import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

/**
 * Home Component
 *
 * This component renders the **home screen** of the application.
 * - Displays an introduction message.
 * - Allows users to navigate to the customization page.
 * - Uses animations for smooth transitions.
 *
 * @component
 * @returns {JSX.Element} - The home screen UI.
 */
const Home = () => {
  /**
   * Uses a reactive snapshot of the global state.
   * - `snap.intro` determines whether the intro screen is shown.
   */
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {/* Displays the home screen only if `snap.intro` is true */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/* Logo Animation (Slides down) */}
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          {/* Home Content (Includes text and button) */}
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>

            {/* Description + Button Animation */}
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              {/* Introduction text */}
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style{" "}
              </p>

              {/* Button to start customization */}
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)} // Hides intro and enters customization
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
