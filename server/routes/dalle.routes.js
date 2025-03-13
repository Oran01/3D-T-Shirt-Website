import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// Load environment variables from `.env` file
dotenv.config();

// Create an Express router instance
const router = express.Router();

/**
 * OpenAI API Configuration
 *
 * - Uses API key from `.env` (`OPEN_AI_KEY`).
 * - Ensures authentication for OpenAI's API.
 */
const config = new Configuration({ apiKey: process.env.OPEN_AI_KEY }); // Ensure this key is set in your .env file

// Initialize OpenAI API instance
const openai = new OpenAIApi(config);

/**
 * GET /api/v1/dalle/
 *
 * - Health check endpoint for DALL·E routes.
 * - Responds with a simple JSON message to confirm the API is running.
 *
 * @route GET /api/v1/dalle/
 * @returns {Object} JSON message confirming route availability.
 */
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

/**
 * POST /api/v1/dalle/
 *
 * - Generates an AI-created image based on the provided text prompt.
 * - Uses OpenAI's `createImage()` function.
 *
 * @route POST /api/v1/dalle/
 * @param {Object} req - Express request object.
 * @param {string} req.body.prompt - The text prompt for AI image generation.
 * @returns {Object} JSON response containing the base64-encoded image.
 */
router.route("/").post(async (req, res) => {
  try {
    // Extracts the text prompt from the request body
    const { prompt } = req.body;

    // Sends the prompt to OpenAI's DALL·E API to generate an image
    const response = await openai.createImage({
      prompt, // User input for AI image generation
      n: 1, // Number of images to generate
      size: "1024X1024", // Image resolution
      response_format: "b64_json", // Returns the image in Base64 format
    });

    // Extracts the Base64 image data from the response
    const image = response.data.data[0].b64_json;

    // Sends the generated image as a response
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);

    // Handles OpenAI API errors and returns a generic error response
    res.status(500).json({ message: "Something went wrong " });
  }
});

// Export the configured Express router
export default router;
