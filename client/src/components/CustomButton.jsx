import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

/**
 * CustomButton Component
 *
 * A reusable button component that dynamically styles itself based on:
 * - The **selected color** from state.
 * - The **button type** (filled or outline).
 *
 * @component
 * @param {Object} props - React props.
 * @param {"filled" | "outline"} props.type - The button style type.
 * @param {string} props.title - The text displayed on the button.
 * @param {string} [props.customStyles] - Additional CSS classes for styling.
 * @param {Function} [props.handleClick] - Function triggered when the button is clicked.
 * @returns {JSX.Element} - A customizable button component.
 */
const CustomButton = ({ type, title, customStyles, handleClick }) => {
  /**
   * Uses a reactive snapshot of the global state.
   * Ensures that the button updates when the color changes.
   */
  const snap = useSnapshot(state);

  /**
   * Generates the appropriate button style based on its type.
   *
   * - `"filled"`: Uses the selected color as background with a contrasting text color.
   * - `"outline"`: Transparent background with a colored border.
   *
   * @param {"filled" | "outline"} type - The button type.
   * @returns {Object} - The inline CSS styles for the button.
   */
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color, // Button background matches selected color
        color: getContrastingColor(snap.color), // Ensures text is readable
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color, // Border color matches selected color
        color: snap.color, // Text color matches selected color
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title} {/* Button text */}
    </button>
  );
};

export default CustomButton;
