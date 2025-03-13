/**
 * UI Constants and Configuration
 *
 * This file defines various **UI-related constants** used in the application.
 * - `EditorTabs` defines the tabs in the customization panel.
 * - `FilterTabs` defines tabs for applying texture types.
 * - `DecalTypes` maps different decal options to their respective state properties.
 */

import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

/**
 * EditorTabs
 *
 * Defines the available tabs in the customization editor.
 * - `colorpicker`: Allows users to pick a custom shirt color.
 * - `filepicker`: Lets users upload an image for customization.
 * - `aipicker`: Enables AI-generated designs for the shirt.
 */
export const EditorTabs = [
  {
    name: "colorpicker", // Tab for selecting colors
    icon: swatch, // Swatch icon representing color selection
  },
  {
    name: "filepicker", // Tab for uploading custom images
    icon: fileIcon, // File icon representing image uploads
  },
  {
    name: "aipicker", // Tab for generating AI-based designs
    icon: ai, // AI icon representing AI-generated designs
  },
];

/**
 * FilterTabs
 *
 * Defines the available filters that apply **specific textures** to the shirt.
 * - `logoShirt`: Applies a **logo decal** on the shirt.
 * - `stylishShirt`: Applies a **full-shirt texture** for a complete design.
 */
export const FilterTabs = [
  {
    name: "logoShirt", // Filter for applying a small logo on the shirt
    icon: logoShirt, // Icon representing logo texture
  },
  {
    name: "stylishShirt", // Filter for applying a full-shirt texture
    icon: stylishShirt, // Icon representing full-shirt customization
  },
];

/**
 * DecalTypes
 *
 * Defines the **decal mapping** for different customization options.
 * - `logo`: Maps to `logoDecal` and enables `logoShirt` filter.
 * - `full`: Maps to `fullDecal` and enables `stylishShirt` filter.
 */
export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal", // State property for storing the logo texture
    filterTab: "logoShirt", // Filter tab that activates the logo application
  },
  full: {
    stateProperty: "fullDecal", // State property for storing the full-shirt texture
    filterTab: "stylishShirt", // State property for storing the full-shirt texture
  },
};
