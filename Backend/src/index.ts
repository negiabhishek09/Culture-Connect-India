import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { connectDB, disconnectDB } from './config/database';
import { logger } from './config/logger';
import process from 'process';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  await connectDB();

  app.listen(PORT, () => {
    logger.info(`🚀 Cultural Connect India API running on port ${PORT}`);
    logger.info(`📦 Database: MongoDB`);
    logger.info(`📖 Environment: ${process.env.NODE_ENV}`);
    logger.info(`🔗 Base URL: http://localhost:${PORT}${process.env.API_PREFIX || '/api/v1'}`);
  });
}

// Graceful shutdown
const shutdown = async (signal: string) => {
  logger.info(`${signal} received — shutting down gracefully...`);
  await disconnectDB();
  process.exit(0);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));
process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', reason);
  process.exit(1);
});

bootstrap();