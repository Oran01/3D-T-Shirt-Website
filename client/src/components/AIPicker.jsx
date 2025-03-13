import React from "react";
import CustomButton from "./CustomButton";

/**
 * AIPicker Component
 *
 * This component provides a **text input field** where users can input a prompt
 * to request an AI-generated design. It includes:
 * - A **textarea** for user input.
 * - A **loading state** when AI is processing the request.
 * - Buttons to generate an AI-designed **logo** or **full texture**.
 *
 * @component
 * @param {Object} props - React props.
 * @param {string} props.prompt - The current user input for the AI.
 * @param {Function} props.setPrompt - Function to update the `prompt` state.
 * @param {boolean} props.generatingImg - Indicates if the AI is generating an image.
 * @param {Function} props.handleSubmit - Function to submit the AI request.
 * @returns {JSX.Element} - A text input with AI request buttons.
 */
const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      {/* 
         Textarea for user input
        - Allows users to enter a prompt for AI-generated images.
        - Updates the state on every keystroke.
      */}
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5} // Sets the number of visible rows
        value={prompt} // Controlled component (binds state)
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* 
         Buttons Section
        - Shows a loading button when the AI is processing.
        - Displays AI Logo & AI Full buttons when ready.
      */}
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            {/* AI Logo Button - Generates a logo decal */}
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            {/* AI Full Button - Generates a full-shirt design */}
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
