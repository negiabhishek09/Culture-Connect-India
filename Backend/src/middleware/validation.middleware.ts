import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { sendError } from '../utils/response.utils';

// ✅ VALIDATION MIDDLEWARE
export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): Response | void => {

    if (!schema) {
      return sendError(res, 'Schema not provided', 500, [
        { message: 'Validation schema is undefined' },
      ]);
    }

    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        const errors = (result.error?.issues || []).map((e) => ({
          field: e.path.join('.') || 'unknown',
          message: e.message,
        }));

        return sendError(res, 'Validation failed.', 422, errors);
      }

      req.body = result.data;
      next();

    } catch (error: any) {
      return sendError(res, 'Validation middleware error', 500, [
        { message: error.message },
      ]);
    }
  };
};

// ✅ SCHEMAS (VERY IMPORTANT)

export const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(1),
});