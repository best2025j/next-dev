// components/ScrollAnimation.js
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import PropTypes from "prop-types";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { type: "tween", duration: 1.03 },
      });
    }
  };

  return (
    <Element name="scrollAnimation" className="scroll-animation">
      <motion.div
     
      >
        <motion.div
          className="slide-in absolute top-0 left-0 w-full h-full bg-slate-900 transform-gpu"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <motion.div
          className="slide-out absolute top-0 left-0 w-full h-full bg-slate-900 transform-gpu"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Element>
  );
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollAnimation;
