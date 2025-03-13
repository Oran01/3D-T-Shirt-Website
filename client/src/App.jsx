import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

/**
 * Main Application Component
 *
 * This component serves as the **entry point** for rendering the application.
 * - Displays the **Home** page (introduction screen).
 * - Renders the **Canvas** for the 3D model.
 * - Loads the **Customizer** for interactive customization.
 *
 * @component
 * @returns {JSX.Element} - The root layout of the application.
 */
function App() {
  return (
    <main className="app transition-all ease-in">
      {/* Home Screen (Displayed first) */}
      <Home />

      {/* 3D Canvas (Renders the T-shirt model) */}
      <Canvas />

      {/* Customizer Panel (Handles user interactions) */}
      <Customizer />
    </main>
  );
}

export default App;
