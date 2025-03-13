/**
 * Animation Configurations
 *
 * This file defines various animation settings for UI elements using Framer Motion.
 * - Provides smooth entrance and exit animations.
 * - Uses spring-based transitions for natural movement.
 */

/**
 * Default transition configuration
 *
 * - `type: "spring"` → Ensures smooth and elastic movement.
 * - `duration: 0.8` → Defines how long the animation lasts.
 */
export const transition = { type: "spring", duration: 0.8 };

/**
 * Slide Animation
 *
 * Generates an animation object for sliding elements in different directions.
 *
 * @param {"left" | "right" | "up" | "down"} direction - The slide direction.
 * @returns {Object} - Framer Motion animation properties.
 */
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0, // Moves left/right
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Moves up/down
      opacity: 0, // Starts fully transparent
      transition: { ...transition, delay: 0.5 }, // Applies default transition with a delay
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1, // Fully visible when animated
      transition: { ...transition, delay: 0 }, // No delay on animation
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0, // Moves back when exiting
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

/**
 * Fade Animation
 *
 * - Animates the opacity for a fade-in/fade-out effect.
 */
export const fadeAnimation = {
  initial: {
    opacity: 0, // Starts fully transparent
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1, // Becomes fully visible
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0, // Fades out when exiting
    transition: { ...transition, delay: 0 },
  },
};

/**
 * Head Text Animation
 *
 * - Moves text from right to left while fading in.
 * - Uses **spring physics** for natural movement.
 */
export const headTextAnimation = {
  initial: { x: 100, opacity: 0 }, // Starts off-screen to the right
  animate: { x: 0, opacity: 1 }, // Moves to its position while appearing
  transition: {
    type: "spring",
    damping: 5, // Reduces oscillations
    stiffness: 40, // Controls how stiff the movement is
    restDelta: 0.001,
    duration: 0.3,
  },
};

/**
 * Head Content Animation
 *
 * - Moves content from bottom to top while fading in.
 * - Uses **spring physics** for smooth transition.
 */
export const headContentAnimation = {
  initial: { y: 100, opacity: 0 }, // Starts off-screen below
  animate: { y: 0, opacity: 1 }, // Moves to its position while appearing
  transition: {
    type: "spring",
    damping: 7, // Reduces oscillations
    stiffness: 30, // Reduces oscillations
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2, // Starts slightly after the animation begins
    delayChildren: 0.2, // Delays animations for children elements
  },
};

/**
 * Head Container Animation
 *
 * - Moves the container from left to right while fading in.
 */
export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } }, // Starts off-screen to the left
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } }, // Moves into position
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }, // Moves out when exiting
};
