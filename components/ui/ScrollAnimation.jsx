import React, { Children } from "react";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";

export default function ScrollAnimation({ Children }) {
  const controls = useAnimation();

  const handleScroll = () => {
    // Adjust the scroll position where you want the animation to trigger
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  return (
    <Element name="scrollAnimation" className="scroll-animation">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Children}
      </motion.div>
    </Element>
  );
}
