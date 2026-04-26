import "dotenv/config";
import app from "./app";
import { connectDB, disconnectDB } from "./config/database";
import { logger } from "./config/logger";
import searchRoutes from "./routes/search.routes";

// 🔥 Register routes BEFORE server start
// app.use("/api/v1", searchRoutes);

const PORT = process.env.PORT || 8000;

async function bootstrap() {
  try {
    // ✅ DB connect
    await connectDB();

    // ✅ Server start
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info(`Base URL: http://localhost:${PORT}/api/v1`);
    });

  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// ✅ Graceful shutdown
process.on("SIGINT", async () => {
  logger.info("Shutting down server...");
  await disconnectDB();
  process.exit(0);
});

bootstrap();