import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

/**
 * Shirt Component
 *
 * This component renders a **3D T-shirt model** and dynamically applies:
 * - A **color** chosen by the user.
 * - A **logo decal** (if selected).
 * - A **full texture decal** (if selected).
 *
 * Uses `@react-three/drei` utilities for:
 * - **Decal mapping** (applying images onto the 3D shirt).
 * - **GLTF loading** (loading the shirt 3D model).
 * - **Texture mapping** for user-selected images.
 *
 * @component
 * @returns {JSX.Element} - A 3D shirt with customizable colors and textures.
 */
const Shirt = () => {
  /**
   * Retrieves the reactive state snapshot from Valtio.
   * Allows real-time updates when the user changes colors/textures.
   */
  const snap = useSnapshot(state);

  /**
   * Loads the 3D model of the shirt (`.glb` format).
   * Extracts `nodes` (geometry) and `materials` (textures).
   */
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  /**
   * Loads user-selected logo and full shirt textures from state.
   */
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  /**
   * Updates the **shirt color** smoothly on every frame.
   * Uses the `easing.dampC` function for a gradual color transition.
   *
   * @param {Object} state - The current animation state.
   * @param {number} delta - The frame time difference for smooth animation.
   */
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  /**
   * Serializes the state to force React to re-render when state changes.
   * Helps in dynamically updating the shirt’s color and texture.
   */
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry} // Shirt 3D geometry
        material={materials.lambert1} // Uses the Lambert material
        material-roughness={1} // Defines how rough the surface is (1 = max roughness)
        dispose={null} // Ensures proper cleanup of the 3D object
      >
        {/* Full texture decal - Covers the entire shirt */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]} // Centered on the shirt
            rotation={[0, 0, 0]} // No rotation applied
            scale={1} // Full-size texture
            map={fullTexture} // Applies the full-shirt texture
          />
        )}

        {/* Logo decal - Smaller logo placed on the upper chest */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]} // Slightly above center
            rotation={[0, 0, 0]} // No rotation applied
            scale={0.15} // Small logo scale
            map={logoTexture} // Applies the user-selected logo
            anisotropy={16} // Improves texture clarity
            depthTest={false} // Ensures decal is always visible
            depthWrite={true} // Allows proper layering of decals
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
