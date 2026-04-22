import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { logger } from './config/logger';

// Routes
import authRoutes         from './routes/auth.routes';
import userRoutes         from './routes/user.routes';
import categoryRoutes     from './routes/category.routes';
import stateRoutes        from './routes/state.routes';
import eventRoutes        from './routes/event.routes';
import productRoutes      from './routes/product.routes';
import cartRoutes         from './routes/cart.routes';
import orderRoutes        from './routes/order.routes';
import postRoutes         from './routes/post.routes';
import notificationRoutes from './routes/notification.routes';
import statsRoutes        from './routes/stats.routes';
import uploadRoutes       from './routes/upload.routes';

import { errorHandler, notFound } from './middleware/error.middleware';

const app: Application = express();
const PREFIX = process.env.API_PREFIX || '/api/v1';

// ─── Security ─────────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// ─── Rate Limiting ─────────────────────────────────────
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));

// ─── General Middleware ────────────────────────────────
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: { write: (msg) => logger.http(msg.trim()) } }));

// ─── Health Check ──────────────────────────────────────
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// ─── SAFE ROUTE HANDLER FUNCTION 🔥
const useRoute = (path: string, route: any) => {
  if (route && typeof route === 'function') {
    app.use(path, route);
  } else {
    console.warn(`⚠️ Skipped route: ${path} (invalid or undefined)`);
  }
};

// ─── API Routes ────────────────────────────────────────
useRoute(`${PREFIX}/auth`, authRoutes);
useRoute(`${PREFIX}/users`, userRoutes);
useRoute(`${PREFIX}/categories`, categoryRoutes);
useRoute(`${PREFIX}/states`, stateRoutes);
useRoute(`${PREFIX}/events`, eventRoutes);
useRoute(`${PREFIX}/products`, productRoutes);
useRoute(`${PREFIX}/cart`, cartRoutes);
useRoute(`${PREFIX}/orders`, orderRoutes);
useRoute(`${PREFIX}/posts`, postRoutes);
useRoute(`${PREFIX}/notifications`, notificationRoutes);
useRoute(`${PREFIX}/stats`, statsRoutes);
useRoute(`${PREFIX}/upload`, uploadRoutes);

// ─── Error Handling ────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;