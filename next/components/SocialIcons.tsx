import React from "react";
import { motion, Variants } from "framer-motion";

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: (delay) => ({
    opacity: 1,
    pathLength: 1,
    transition: {
      delay,
    },
  }),
};

const SocialIcons = ({ delay, width = 24, height = 24 }: { delay: number; width?: number; height?: number }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="#1d1d1d"
      strokeWidth="2"
    >
      <motion.path
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        custom={delay}
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      />
    </motion.svg>
  );
};

export default SocialIcons;
