import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

/**
 * ColorPicker Component
 *
 * This component provides a **color selection tool** that allows users
 * to change the color of the 3D model in real time.
 *
 * It utilizes:
 * - `react-color`'s `SketchPicker` for a color palette.
 * - **Valtio state management** for real-time updates.
 *
 * @component
 * @returns {JSX.Element} - A color picker interface.
 */
const ColorPicker = () => {
  /**
   * Uses a reactive snapshot of the global state.
   * Ensures real-time updates when the user selects a color.
   */
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      {/* 
         SketchPicker - Color selection tool
        - Displays a palette for selecting colors.
        - Disables alpha (opacity) adjustments.
        - Provides a preset list of colors.
        - Updates the global state when a color is selected.
      */}
      <SketchPicker
        color={snap.color} // Binds the selected color to state
        disableAlpha // Disables transparency adjustments
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#353934",
          "#2CCCE4",
          "#ff8a65",
          "#7098DA",
          "#C19277",
          "#FF96AD",
          "5312314",
          "#5F123D",
        ]}
        onChange={(color) => (state.color = color.hex)} // Updates the selected color in state
      />
    </div>
  );
};

export default ColorPicker;
