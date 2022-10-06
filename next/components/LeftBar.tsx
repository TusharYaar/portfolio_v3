import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "../styles/components/LeftBar.module.css";

const iconVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
      delay: 1.5,
    },
  },
};

const barVariant: Variants = {
  hidden: {
    x: -80,
  },
  visible: {
    x: 0,
  },
};

const LeftBar = () => {
  return (
    <motion.div className={styles.leftSide} variants={barVariant} initial="hidden" animate="visible">
      <div className={styles.fixedContainer}>
        <div className={styles.iconsContainer}>
          <a>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <motion.path
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              />
            </motion.svg>
          </a>
          <a href="https://www.github.com/tusharyaar" target="_blank" rel="noreferrer">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <motion.path
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </motion.svg>
          </a>
          <a href="https://www.linkedin.com/in/tusharyaar/" target="_blank" rel="noreferrer">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <motion.path
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <motion.rect
                x="2"
                y="9"
                width="4"
                height="12"
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              />
              <motion.circle cx="4" cy="4" r="2" initial="hidden" animate="visible" variants={iconVariants} />
            </motion.svg>
          </a>
          <a href="https://twitter.com/tushar_yaar" target="_blank" rel="noreferrer">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke="var(--secondary)"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <motion.path
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </motion.svg>
          </a>
        </div>
        <span>SOCIALS</span>
      </div>
    </motion.div>
  );
};

export default LeftBar;
