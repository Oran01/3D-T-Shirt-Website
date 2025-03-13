/**
 * Component Exports
 *
 * This file serves as a central export point for UI components,
 * making it easier to import them from a single location.
 *
 * Instead of importing each component individually, other files
 * can simply import from `"../components"`, improving code maintainability.
 */

import CustomButton from "./CustomButton";
import AIPicker from "./AIPicker";
import ColorPicker from "./ColorPicker";
import FilePicker from "./FilePicker";
import Tab from "./Tab";

// Exporting all components from a single file for cleaner imports
export { CustomButton, AIPicker, ColorPicker, FilePicker, Tab };
