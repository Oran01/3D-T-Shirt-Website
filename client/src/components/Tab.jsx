import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

/**
 * Tab Component
 *
 * This component represents a **clickable tab** that can be used in two ways:
 * - As a **filter tab**, which modifies the displayed model based on a selection.
 * - As a **regular tab**, which triggers a UI-related action.
 *
 * The tab's appearance and behavior are dynamically updated based on:
 * - Whether it is **active** or **inactive**.
 * - Whether it is being used as a **filter tab**.
 * - The **current selected color** from the global state.
 *
 * @component
 * @param {Object} props - React props.
 * @param {Object} props.tab - Tab object containing metadata like name and icon.
 * @param {boolean} props.isFilterTab - Determines if the tab functions as a filter.
 * @param {boolean} props.isActiveTab - Indicates if the tab is currently active.
 * @param {Function} props.handleClick - Function triggered when the tab is clicked.
 * @returns {JSX.Element} - A stylized tab component.
 */
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  /**
   * Uses a reactive snapshot of the global state.
   * Ensures that the tab updates when the user selects a new color.
   */
  const snap = useSnapshot(state);

  /**
   * Generates the dynamic styles for the tab based on:
   * - **Active state**: If the tab is selected, its background color changes.
   * - **Filter tab mode**: If it's a filter, it uses a semi-transparent background.
   */
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 } // Active filter tab style
      : { backgroundColor: "transparent", opacity: 1 }; // Default tab style

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      {/* Tab icon (either a filter icon or a standard tab icon) */}
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
