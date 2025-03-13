import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

// Load environment variables from `.env` file
dotenv.config();

/**
 * Express Application Setup
 *
 * - Initializes the Express app.
 * - Configures middleware for CORS and JSON parsing.
 * - Sets request size limit to 50MB.
 */
const app = express();
app.use(cors()); // Enables Cross-Origin Resource Sharing (CORS)
app.use(express.json({ limig: "50mb" })); // Parses incoming JSON requests with a size limit

/**
 * Routes Configuration
 *
 * - Mounts DALL·E-related routes under `/api/v1/dalle`.
 */
app.use("/api/v1/dalle", dalleRoutes);

/**
 * GET /
 *
 * - Root route to confirm API is running.
 * - Responds with a simple JSON message.
 *
 * @route GET /
 * @returns {Object} JSON message confirming API availability.
 */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

/**
 * Start the Express Server
 *
 * - Listens for incoming requests on port 8080.
 * - Logs a message when the server starts.
 */
app.listen(8080, () => console.log("Server has started on port 8080"));
