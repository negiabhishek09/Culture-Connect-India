import { Router } from 'express';
import { getProducts, getProductBySlug, createProduct, updateProduct, toggleWishlist } from '../controllers/product.controller';
import { protect, restrictTo, optionalAuth } from '../middleware/auth.middleware';
import { validate, createProductSchema } from '../middleware/validation.middleware';

const router = Router();
router.get('/',          optionalAuth, getProducts);
router.get('/:slug',     getProductBySlug);
router.post('/',         protect, restrictTo('BUSINESS_OWNER', 'ARTISAN', 'ADMIN'), validate(createProductSchema), createProduct);
router.patch('/:id',     protect, updateProduct);
router.post('/:id/wishlist', protect, toggleWishlist);
export default router;