import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";

/**
 * CanvasModel Component
 *
 * This component sets up the **3D scene** using `@react-three/fiber`.
 * It includes:
 * - **Camera controls** via `CameraRig`.
 * - **Lighting & environment** for realistic rendering.
 * - **A Shirt model** placed at the center.
 * - **A backdrop for shadows** to enhance realism.
 *
 * @component
 * @returns {JSX.Element} - A canvas rendering the 3D t-shirt model.
 */
const CanvasModel = () => {
  return (
    <Canvas
      shadows // Enables shadow rendering for realism
      camera={{ position: [0, 0, 0], fov: 25 }} // Sets initial camera position & field of view
      gl={{ preserveDrawingBuffer: true }} // Preserves canvas for better image rendering
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {/* Ambient light for soft global illumination */}
      <ambientLight intensity={0.5} />

      {/* Environment lighting preset (city-like reflections) */}
      <Environment preset="city" />

      {/* CameraRig manages camera positioning & smooth interactions */}
      <CameraRig>
        {/* Backdrop provides a shadow effect behind the model */}
        <Backdrop />

        {/* Center aligns the Shirt model at the center of the scene */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
