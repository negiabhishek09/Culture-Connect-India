import cors from 'cors';
import 'dotenv/config';
import express, { Application, Request, Response } from 'express';

import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { logger } from './config/logger';

// Routes
import authRoutes from './routes/auth.routes';
import searchRoutes from './routes/search.routes'; // ✅ ADD

import { errorHandler, notFound } from './middleware/error.middleware';

const app: Application = express();
const PREFIX = process.env.API_PREFIX || '/api/v1';

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Security
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

// Rate limit
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined', {
  stream: { write: (msg) => logger.http(msg.trim()) }
}));

// Health
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

app.get('/api/v1', (_req, res) => {
  res.json({
    success: true,
    message: 'API is running 🚀'
  });
});

// Routes
app.use(`${PREFIX}/auth`, authRoutes);
app.use(`${PREFIX}`, searchRoutes); // ✅ ADD THIS LINE

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;