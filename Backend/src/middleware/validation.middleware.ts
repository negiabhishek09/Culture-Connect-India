import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { sendError } from '../utils/response.utils';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      sendError(res, 'Validation failed.', 422, errors);
      return;
    }
    req.body = result.data;
    next();
  };
};

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number'),
  location: z.string().max(200).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(1),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z
    .string()
    .min(8)
    .regex(/[A-Z]/, 'Must contain uppercase')
    .regex(/[0-9]/, 'Must contain a number'),
});

// ─── Posts ────────────────────────────────────────────────────────────────────
export const createPostSchema = z.object({
  caption: z.string().min(1).max(2200),
  image: z.string().url(),
  location: z.string().max(200).optional(),
  categoryId: z.string().optional(),
});

export const addCommentSchema = z.object({
  content: z.string().min(1).max(1000),
});

// ─── Products ─────────────────────────────────────────────────────────────────
export const createProductSchema = z.object({
  name: z.string().min(2).max(200),
  description: z.string().min(10).max(2000),
  image: z.string().url(),
  price: z.number().positive(),
  originalPrice: z.number().positive(),
  tag: z.enum(['Bestseller', 'Premium', 'Handmade', 'Organic', 'New', 'Sale']),
  stock: z.number().int().min(0).default(100),
  businessId: z.string().min(1),
  categoryId: z.string().min(1),
});

// ─── Cart ─────────────────────────────────────────────────────────────────────
export const addToCartSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(100).default(1),
});

export const updateCartSchema = z.object({
  quantity: z.number().int().min(1).max(100),
});

// ─── Orders ───────────────────────────────────────────────────────────────────
export const createOrderSchema = z.object({
  address: z.string().min(10).max(500),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number'),
  notes: z.string().max(500).optional(),
});

export const updateOrderStatusSchema = z.object({
  status: z.enum(['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED']),
});

// ─── Businesses ───────────────────────────────────────────────────────────────
export const createBusinessSchema = z.object({
  name: z.string().min(2).max(200),
  description: z.string().min(10).max(2000),
  image: z.string().url(),
  categoryName: z.string().min(2).max(100),
  location: z.string().min(2).max(300),
  address: z.string().max(500).optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  categoryId: z.string().min(1),
  stateId: z.string().min(1),
});

export const addReviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(5).max(1000),
});

// ─── States & Categories ──────────────────────────────────────────────────────
export const createStateSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(10).max(2000),
  image: z.string().url(),
  highlights: z.string().max(200),
  region: z.enum(['North', 'South', 'East', 'West', 'Northeast', 'Central']),
  capital: z.string().min(2).max(100),
  language: z.array(z.string()).min(1),
});

export const createCategorySchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(5).max(500),
  icon: z.string().min(1),
  color: z.string().min(1),
  bgColor: z.string().min(1),
});

// ─── Profile ──────────────────────────────────────────────────────────────────
export const updateProfileSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  bio: z.string().max(500).optional(),
  location: z.string().max(200).optional(),
  avatar: z.string().url().optional(),
});