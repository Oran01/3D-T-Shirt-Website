import React from "react";

import CustomButton from "./CustomButton";

/**
 * FilePicker Component
 *
 * This component allows users to upload an **image file** for use in customizing
 * a 3D model. Users can:
 * - **Upload an image** via a file input.
 * - **See the uploaded file name** or a "No file selected" message.
 * - **Choose how the image is applied** (as a logo or full-shirt texture).
 *
 * @component
 * @param {Object} props - React props.
 * @param {File | string} props.file - The selected file or an empty string.
 * @param {Function} props.setFile - Function to update the selected file.
 * @param {Function} props.readFile - Function to process and apply the uploaded file.
 * @returns {JSX.Element} - A file input with buttons to process the upload.
 */
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      {/* File Upload Section */}
      <div className="flex-1 flex flex-col">
        {/* Input for selecting an image file */}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])} // Updates state when file is selected
        />

        {/* Label for the file upload input */}
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        {/* Displays the file name or "No file selected" */}
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      {/* Buttons to Process File Upload */}
      <div className="mt-4 flex flex-wrap gap-3">
        {/* Applies the uploaded file as a logo */}
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          CustomStyles="text-xs"
        />

        {/* Applies the uploaded file as a full-shirt design */}
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          CustomStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
