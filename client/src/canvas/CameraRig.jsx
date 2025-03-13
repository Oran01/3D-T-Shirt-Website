import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

/**
 * CameraRig Component
 *
 * This component controls the **camera position and rotation** dynamically based on:
 * - Screen size (desktop, tablet, mobile).
 * - Whether the user is in the intro state (`snap.intro`).
 * - Mouse movement for interactive camera rotation.
 *
 * @component
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - The 3D objects inside the camera rig.
 * @returns {JSX.Element} - A `<group>` wrapper for applying camera motion effects.
 */
const CameraRig = ({ children }) => {
  /**
   * Reference to the group element containing all child 3D objects.
   * Used to apply camera rotations based on user input.
   */
  const group = useRef();

  /**
   * Snapshot of the global state using Valtio.
   * Provides reactive access to the `state.intro` value.
   */
  const snap = useSnapshot(state);

  /**
   * useFrame Hook (Runs on every frame update)
   *
   * - Dynamically adjusts the camera **position** based on screen size and state.
   * - Applies **smooth easing** when changing camera properties.
   * - Rotates the camera **based on mouse movement** for an interactive experience.
   */
  useFrame((state, delta) => {
    // Screen size breakpoints
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Default camera position (for non-intro state)
    let targetPosition = [-0.4, 0, 2];

    // Adjust position if user is in the intro state
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2]; // Tablet screens
      if (isMobile) targetPosition = [0, 0.2, 2.5]; // Mobile screens
    } else {
      if (isMobile)
        targetPosition = [0, 0.2, 2.5]; // Mobile layout (consistent)
      else targetPosition = [0, 0, 2]; // Default position
    }

    // Smooth transition (camera moves to target position over time)
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Apply interactive rotation based on mouse movement
    easing.dampE(
      group.current.rotation, // Rotates the group (3D objects)
      [state.pointer.y / 10, -state.pointer.x / 5, 0], // Mouse-controlled rotation
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
