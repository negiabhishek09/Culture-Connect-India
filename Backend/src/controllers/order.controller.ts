import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Order } from '../models/Order.model';
import { Cart } from '../models/Cart.model';
import { Product } from '../models/Product.model';
import { User } from '../models/User.model';
import { sendSuccess, sendPaginated, sendError, parsePagination } from '../utils/response.utils';
import { AppError } from '../middleware/error.middleware';
import { sendOrderConfirmationEmail } from '../services/email.service';

// POST /api/v1/orders — atomic checkout
export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { address, phone, notes } = req.body;
    const userId = req.user!.id;

    const cart = await Cart.findOne({ userId }).populate<{
      items: { productId: InstanceType<typeof Product>; quantity: number }[];
    }>('items.productId');

    if (!cart || cart.items.length === 0) {
      await session.abortTransaction();
      sendError(res, 'Your cart is empty.', 400);
      return;
    }

    // Validate stock for every item
    for (const item of cart.items) {
      const product = item.productId as InstanceType<typeof Product>;
      if (!product || !product.isActive) {
        await session.abortTransaction();
        sendError(res, `Product "${product?.name}" is no longer available.`, 400);
        return;
      }
      if (product.stock < item.quantity) {
        await session.abortTransaction();
        sendError(res, `Insufficient stock for "${product.name}". Available: ${product.stock}`, 400);
        return;
      }
    }

    // Build order items snapshot (prices captured at order time — important!)
    const orderItems = cart.items.map((item) => {
      const product = item.productId as InstanceType<typeof Product>;
      return {
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: item.quantity,
      };
    });

    const totalAmount = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // Create order
    const [order] = await Order.create(
      [{ userId, items: orderItems, totalAmount, address, phone, notes }],
      { session }
    );

    // Decrement stock & increment soldCount for each product
    await Promise.all(
      cart.items.map((item) => {
        const product = item.productId as InstanceType<typeof Product>;
        return Product.findByIdAndUpdate(
          product._id,
          {
            $inc: { stock: -item.quantity, soldCount: item.quantity },
          },
          { session }
        );
      })
    );

    // Clear the cart
    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } }, { session });

    await session.commitTransaction();

    sendSuccess(res, order, 'Order placed successfully.', 201);

    // Fire-and-forget confirmation email
    const user = await User.findById(userId).select('name email');
    if (user) sendOrderConfirmationEmail(user.name, user.email, order._id.toString(), totalAmount);

  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
};

// GET /api/v1/orders
export const getMyOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { page, limit, skip } = parsePagination(req.query as Record<string, unknown>);

    const [orders, total] = await Promise.all([
      Order.find({ userId: req.user!.id })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Order.countDocuments({ userId: req.user!.id }),
    ]);

    sendPaginated(res, orders, { page, limit, total, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/orders/:id
export const getOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const order = await Order.findById(req.params.id).populate('userId', 'name email');
    if (!order) throw new AppError('Order not found.', 404);

    if (order.userId._id.toString() !== req.user!.id && req.user!.role !== 'ADMIN') {
      throw new AppError('Access denied.', 403);
    }

    sendSuccess(res, order);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/v1/orders/:id/status — admin only
export const updateOrderStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!order) throw new AppError('Order not found.', 404);
    sendSuccess(res, order, `Order status updated to ${order.status}.`);
  } catch (error) {
    next(error);
  }
};