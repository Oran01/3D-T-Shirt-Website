import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

/**
 * Backdrop Component
 *
 * This component creates a **realistic shadow effect** behind the 3D T-shirt model
 * using `AccumulativeShadows` from `@react-three/drei`. It also sets up multiple
 * **light sources** to balance brightness and shadow realism.
 *
 * @component
 * @returns {JSX.Element} - A backdrop with dynamic lighting and shadow effects.
 */
const Backdrop = () => {
  /**
   * A ref to store the shadow object for better performance optimization.
   * `useRef` prevents unnecessary re-renders when updating shadows.
   */
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows} // Reference to the shadow object
      temporal // Enables temporal anti-aliasing for smoother shadow blending
      frames={50} // Controls shadow blending speed (higher = smoother)
      alphaTest={0.9} // Adjusts shadow transparency for a softer effect
      scale={4} // Defines the shadow size (higher = larger shadow area)
      rotation={[Math.PI / 2, 0, 0]} // Rotates the shadow plane to sit beneath the object
      position={[0, -0.5, -0.2]} // Moves the shadow slightly below the model
    >
      {/* 
        MAIN LIGHT - Provides strong front lighting.
        - Positioned to the top-right.
        - Strong intensity to create clear, visible shadows.
      */}
      <RandomizedLight
        amount={4} // Number of light sources for natural randomness
        radius={8} // Spread radius of the light
        intensity={0.8} // Brightness of the light source
        ambient={0.5} // Adds ambient (background) lighting to prevent excessive darkness
        position={[5, 5, -5]} // Positioned to provide natural highlights
      />

      {/* 
        FILL LIGHT - Softens shadows and reduces harsh contrasts.
        - Positioned on the opposite side of the main light.
        - Higher ambient light to prevent excessive darkness.
      */}
      <RandomizedLight
        amount={3}
        radius={6}
        intensity={1.9} // Stronger fill light to counteract deep shadows
        ambient={0.6} // Higher ambient to maintain balanced brightness
        position={[-4, 4, -6]} // Opposite placement for even lighting
      />

      {/* 
        BACKLIGHT - Adds highlights and depth to the model.
        - Positioned behind the shirt to create a natural glow.
      */}
      <RandomizedLight
        amount={2}
        radius={7}
        intensity={0.35} // Low intensity to create subtle highlights
        ambient={0.3} // Adds depth without overpowering the scene
        position={[0, -3, 3]} // Positioned to create realistic depth lighting
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
