/**
 * Utility Functions
 *
 * This file contains helper functions used for:
 * - Downloading a canvas as an image.
 * - Reading uploaded files.
 * - Determining a contrasting text color based on a given color.
 */

/**
 * Downloads the current canvas as a PNG image.
 *
 * - Retrieves the first `<canvas>` element from the DOM.
 * - Converts the canvas to a **data URL**.
 * - Creates a temporary `<a>` element to trigger the download.
 */
export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas"); // Selects the first canvas element
  const dataURL = canvas.toDataURL(); // Converts the canvas to an image data URL
  const link = document.createElement("a"); // Creates a temporary download link

  link.href = dataURL;
  link.download = "canvas.png"; // Sets the download filename
  document.body.appendChild(link); // Appends the link to the DOM
  link.click(); // Triggers the download
  document.body.removeChild(link); // Removes the link after the click
};

/**
 * Reads an uploaded file and converts it to a **data URL**.
 *
 * - Uses `FileReader` to read the file asynchronously.
 * - Resolves the **base64-encoded string** once the file is loaded.
 *
 * @param {File} file - The file to be read.
 * @returns {Promise<string>} - A promise that resolves with the base64 string of the file.
 */
export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader(); // Creates a FileReader instance
    fileReader.onload = () => resolve(fileReader.result); // Resolves with the base64 string
    fileReader.onerror = reject; // Rejects the promise if there's an error
    fileReader.readAsDataURL(file); // Reads the file as a data URL
  });

/**
 * Determines the **contrasting text color** (black or white) based on the given background color.
 *
 * - Extracts RGB values from a **hex color**.
 * - Calculates brightness using the **perceived luminance formula**.
 * - Returns `"black"` for bright colors and `"white"` for dark colors.
 *
 * @param {string} color - The hex color string (e.g., `#FFFFFF`).
 * @returns {string} - `"black"` or `"white"` for contrast.
 */
export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16); // Red component
  const g = parseInt(hex.substring(2, 4), 16); // Green component
  const b = parseInt(hex.substring(4, 6), 16); // Blue component

  // Calculate the brightness of the color using perceived luminance formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black for bright colors, white for dark colors
  return brightness > 128 ? "black" : "white";
};
