import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Entry Point of the Application
 *
 * - Initializes the React application.
 * - Wraps the app inside `<StrictMode>` for better debugging.
 * - Injects the app into the **root** HTML element.
 *
 * @module Main
 */

// Selects the root HTML element and mounts the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Main App Component */}
    <App />
  </StrictMode>
);
