import { Router } from 'express';
import { getProfile, updateProfile, changePassword, getWishlist, getSavedPosts, getAllUsers } from '../controllers/user.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';
import { validate, updateProfileSchema, changePasswordSchema } from '../middleware/validation.middleware';

const router = Router();
router.use(protect);
router.get('/profile',           getProfile);
router.patch('/profile',         validate(updateProfileSchema),  updateProfile);
router.patch('/change-password', validate(changePasswordSchema), changePassword);
router.get('/wishlist',          getWishlist);
router.get('/saved-posts',       getSavedPosts);
router.get('/',                  restrictTo('ADMIN'), getAllUsers);
export default router;