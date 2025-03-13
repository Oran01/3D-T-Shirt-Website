/**
 * Application Configuration
 *
 * This configuration file defines environment-specific settings for
 * the backend API URL. The correct URL is selected based on whether
 * the application is running in development or production mode.
 *
 * Usage:
 * - The `development` URL is used when working locally.
 * - The `production` URL is used when the app is deployed.
 */

const config = {
  /**
   * Development Environment Configuration
   * - Uses a local backend server running on port 8080.
   * - Suitable for local testing and debugging.
   */
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },

  /**
   * Production Environment Configuration
   * - Uses a deployed backend hosted on Render.
   * - Ensures the app connects to the correct live API.
   */
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
};

export default config;
