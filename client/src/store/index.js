import { proxy } from "valtio";

/**
 * Global State Management
 *
 * This file defines the **central state** for the application using `valtio`.
 * - Stores the current customization settings.
 * - Ensures **reactive updates** across components.
 * - Provides a **single source of truth** for UI state management.
 */
const state = proxy({
  /**
   * Determines whether the **intro screen** is displayed.
   * - `true` → Shows the home screen.
   * - `false` → Switches to the customization interface.
   * @type {boolean}
   */
  intro: true,

  /**
   * Stores the **selected color** for the T-shirt.
   * - Default color: `#EFBD46` (Yellow).
   * - Updated when the user selects a different color.
   * @type {string}
   */
  color: "#EFBD46",

  /**
   * Controls whether a **logo texture** is applied.
   * - `true` → Displays a **logo** on the T-shirt.
   * - `false` → No logo is applied.
   * @type {boolean}
   */
  isLogoTexture: true,

  /**
   * Controls whether a **full-shirt texture** is applied.
   * - `true` → Covers the **entire** T-shirt with an image.
   * - `false` → Uses only the selected color.
   * @type {boolean}
   */
  isFullTexture: false,

  /**
   * Stores the **logo decal image URL**.
   * - Default: `"./threejs.png"`.
   * - Updated when the user selects a new logo image.
   * @type {string}
   */
  logoDecal: "./threejs.png",

  /**
   * Stores the **full-shirt decal image URL**.
   * - Default: `"./threejs.png"`.
   * - Updated when the user applies a full-shirt texture.
   * @type {string}
   */
  fullDecal: "./threejs.png",
});

export default state;
