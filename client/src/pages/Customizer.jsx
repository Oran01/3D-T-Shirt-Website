import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { download } from "../assets";
import { reader, downloadCanvasToImage } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

/**
 * Customizer Component
 *
 * This component allows users to:
 * - **Customize a 3D T-shirt model** by changing colors, adding images, or using AI-generated designs.
 * - **Toggle between different editing options** using tabs.
 * - **Download the customized design** as an image.
 *
 * It utilizes `valtio` state management, `framer-motion` for animations, and various custom components.
 *
 * @component
 * @returns {JSX.Element} - The UI for customizing the T-shirt.
 */
const Customizer = () => {
  const snap = useSnapshot(state); // Reactive snapshot of the global state

  /** Stores the uploaded file */
  const [file, setFile] = useState("");
  /** Stores the AI prompt input */
  const [prompt, setPrompt] = useState("");

  /** Tracks if an AI-generated image is being processed */
  const [generatingImg, setGeneratingImg] = useState(false);
  /** Manages the active editor tab (color picker, file picker, AI picker) */
  const [activeEditorTab, setActiveEditorTab] = useState("");
  /** Manages the active filter tab (logo or full-shirt texture) */
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  /**
   * Renders the appropriate tab content based on the active selection.
   * @returns {JSX.Element | null} - The component for the selected tab.
   */
  const generateTabContact = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={setPrompt}
            handelSubmit={handelSubmit}
          />
        );

      default:
        return null;
    }
  };

  /**
   * Sends a request to the AI API to generate a design based on the user's prompt.
   * @param {"logo" | "full"} type - The type of design to generate.
   */
  const handelSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      handelDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab(""); // Closes the editor tab after AI generation
    }
  };

  /**
   * Updates the state with the generated or uploaded decal image.
   * @param {"logo" | "full"} type - The type of decal being applied.
   * @param {string} result - The image URL or base64 string.
   */
  const handelDecals = (type, result) => {
    const decalsType = DecalTypes[type];

    state[decalsType.stateProperty] = result;

    if (!activeEditorTab[decalsType.FilterTab]) {
      handleActiveFilterTab(decalsType.FilterTab);
    }
  };

  /**
   * Toggles the filter tab for logo or full-shirt textures.
   * @param {"logoShirt" | "stylishShirt"} tabName - The name of the filter tab.
   */
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  /**
   * Reads an uploaded file and sets the decal image.
   * @param {"logo" | "full"} type - The type of decal.
   */
  const readFile = (type) => {
    reader(file).then((result) => {
      handelDecals(type, result);
      setActiveEditorTab(""); // Closes the file picker tab after selection
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Editor Tabs for Customization */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() =>
                      setActiveEditorTab((prevTab) =>
                        prevTab === tab.name ? "" : tab.name
                      )
                    }
                  />
                ))}
                {generateTabContact()}
              </div>
            </div>
          </motion.div>

          {/* Go Back Button */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => {
                setActiveEditorTab(""); // Close any open tab first
                setTimeout(() => {
                  state.intro = true; // Now, go back to the intro after a tiny delay
                }, 0);
              }}
              CustomStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* Filter Tabs for Logo and Full Shirt Textures */}
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}

            {/* Download Button */}
            <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
