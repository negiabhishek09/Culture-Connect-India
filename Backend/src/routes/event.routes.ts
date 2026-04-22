import { Router } from 'express';
import { getEvents, getEventBySlug, createEvent, updateEvent, deleteEvent } from '../controllers/event.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';

const router = Router();
router.get('/',       getEvents);
router.get('/:slug',  getEventBySlug);
router.post('/',      protect, restrictTo('ADMIN'), createEvent);
router.patch('/:id',  protect, restrictTo('ADMIN'), updateEvent);
router.delete('/:id', protect, restrictTo('ADMIN'), deleteEvent);
export default router;