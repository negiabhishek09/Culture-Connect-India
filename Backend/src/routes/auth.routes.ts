import { Router } from 'express';
import { register, login, refreshToken, logout, getMe } from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';
import { validate, registerSchema, loginSchema, refreshSchema } from '../middleware/validation.middleware';

const router = Router();
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/refresh', validate(refreshSchema), refreshToken);
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);
export default router;