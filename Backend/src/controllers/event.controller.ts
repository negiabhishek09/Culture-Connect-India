import { Request, Response, NextFunction } from 'express';
import slugify from 'slugify';
import { Event } from '../models/Event.model';
import { sendSuccess, sendPaginated, sendError, parsePagination } from '../utils/response.utils';
import { AppError } from '../middleware/error.middleware';

// GET /api/v1/events
export const getEvents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { page, limit, skip } = parsePagination(req.query as Record<string, unknown>);
    const { stateId, categoryId, featured, search, upcoming } = req.query;

    const filter: Record<string, unknown> = { isActive: true };
    if (stateId)           filter.stateId = stateId;
    if (categoryId)        filter.categoryId = categoryId;
    if (featured === 'true')  filter.isFeatured = true;
    if (upcoming === 'true')  filter.startDate = { $gte: new Date() };
    if (search)            filter.name = { $regex: search, $options: 'i' };

    const [events, total] = await Promise.all([
      Event.find(filter)
        .sort({ isFeatured: -1, startDate: 1 })
        .skip(skip)
        .limit(limit)
        .populate('stateId', 'name slug')
        .populate('categoryId', 'name slug color'),
      Event.countDocuments(filter),
    ]);

    sendPaginated(res, events, { page, limit, total, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/events/:slug
export const getEventBySlug = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const event = await Event.findOne({ slug: req.params.slug, isActive: true })
      .populate('stateId')
      .populate('categoryId');

    if (!event) throw new AppError('Event not found.', 404);

    // Increment viewCount — fire and forget
    Event.findByIdAndUpdate(event._id, { $inc: { viewCount: 1 } }).exec();

    sendSuccess(res, event);
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/events — admin only
export const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const slug = slugify(req.body.name, { lower: true, strict: true });

    const existing = await Event.findOne({ slug });
    if (existing) {
      sendError(res, 'An event with this name already exists.', 409);
      return;
    }

    const event = await Event.create({ ...req.body, slug });
    const populated = await event.populate([
      { path: 'stateId', select: 'name' },
      { path: 'categoryId', select: 'name' },
    ]);

    sendSuccess(res, populated, 'Event created successfully.', 201);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/v1/events/:id — admin only
export const updateEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) throw new AppError('Event not found.', 404);
    sendSuccess(res, event, 'Event updated.');
  } catch (error) {
    next(error);
  }
};

// DELETE /api/v1/events/:id — soft delete
export const deleteEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!event) throw new AppError('Event not found.', 404);
    sendSuccess(res, null, 'Event deleted successfully.');
  } catch (error) {
    next(error);
  }
};