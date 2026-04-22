import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.model';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.utils';
import { sendSuccess, sendError } from '../utils/response.utils';
import { AppError } from '../middleware/error.middleware';
import { sendWelcomeEmail } from '../services/email.service';

// POST /api/v1/auth/register
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, password, location } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      sendError(res, 'An account with this email already exists.', 409);
      return;
    }

    // Password is hashed by pre-save hook in User model
    const user = await User.create({ name, email, password, location });

    const payload = { id: user._id.toString(), email: user.email, role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    // Store hashed refresh token
    user.refreshToken = await bcrypt.hash(refreshToken, 8);
    await user.save();

    // toJSON strips password and refreshToken automatically
    sendSuccess(
      res,
      { user, accessToken, refreshToken },
      'Account created successfully.',
      201
    );

    // Fire-and-forget welcome email
    sendWelcomeEmail(user.name, user.email);
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/auth/login
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Explicitly select password (it's select:false by default)
    const user = await User.findOne({ email }).select('+password +refreshToken');
    if (!user || !(await user.comparePassword(password))) {
      sendError(res, 'Invalid email or password.', 401);
      return;
    }

    if (!user.isActive) {
      sendError(res, 'Your account has been deactivated. Contact support.', 403);
      return;
    }

    const payload = { id: user._id.toString(), email: user.email, role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    user.refreshToken = await bcrypt.hash(refreshToken, 8);
    await user.save();

    // Re-fetch without sensitive fields for the response
    const safeUser = await User.findById(user._id);
    sendSuccess(res, { user: safeUser, accessToken, refreshToken }, 'Login successful.');
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/auth/refresh
export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken: token } = req.body;
    if (!token) { sendError(res, 'Refresh token is required.', 400); return; }

    const decoded = verifyRefreshToken(token);
    const user = await User.findById(decoded.id).select('+refreshToken');

    if (!user?.refreshToken) { sendError(res, 'Invalid refresh token.', 401); return; }

    const isValid = await bcrypt.compare(token, user.refreshToken);
    if (!isValid) { sendError(res, 'Invalid refresh token.', 401); return; }

    const payload = { id: user._id.toString(), email: user.email, role: user.role };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

    user.refreshToken = await bcrypt.hash(newRefreshToken, 8);
    await user.save();

    sendSuccess(res, { accessToken: newAccessToken, refreshToken: newRefreshToken }, 'Token refreshed.');
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/auth/logout
export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await User.findByIdAndUpdate(req.user!.id, { $unset: { refreshToken: 1 } });
    sendSuccess(res, null, 'Logged out successfully.');
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/auth/me
export const getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.user!.id);
    if (!user) throw new AppError('User not found.', 404);
    sendSuccess(res, user);
  } catch (error) {
    next(error);
  }
};