import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import styles from "../styles/components/MobileHeader.module.css";

type Sections = {
  name: string;
  link: string;
};
const backdropVariants: Variants = {
  initial: {
    opacity: 0,
    y: -70,
    transition: {
      type: "tween",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const sectionVaiants: Variants = {
  initial: {
    opacity: 0,
    x: 40,
    transition: {
      type: "tween",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (delay) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
      delay: delay * 0.3 + 1.5,
    },
  }),
};

const sections: Sections[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#",
  },
  {
    name: "Experience",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const svgVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
    },
  },
};

const menuVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (delay) => ({
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
      delay: 0.2 * delay,
      duration: 0.3,
    },
  }),
};

const MobileHeader = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand((curr) => !curr);
  };

  return (
    <>
      <AnimatePresence>
        {expand && (
          <motion.div
            className={styles.backdrop}
            variants={backdropVariants}
            initial="initial"
            exit="initial"
            animate="visible"
          >
            <div className={styles.crossContainer}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleExpand}
              >
                <motion.line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  variants={menuVariants}
                  custom={0}
                  initial="initial"
                  animate="visible"
                />
                <motion.line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  variants={menuVariants}
                  custom={1}
                  initial="initial"
                  animate="visible"
                />
              </motion.svg>
            </div>
            <div className={styles.container}>
              <div className={styles.iconsContainer}>
                <a href="mailto:tusharsagrawal16@gmail.com">
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
                      custom={0}
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <motion.polyline
                      custom={0.2}
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                      points="22,6 12,13 2,6"
                    />
                  </motion.svg>
                </a>
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
                      custom={1}
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
                      custom={2}
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
                      custom={3}
                      variants={iconVariants}
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <motion.rect
                      x="2"
                      y="9"
                      width="4"
                      height="12"
                      custom={3.2}
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                    />
                    <motion.circle
                      custom={3.4}
                      cx="4"
                      cy="4"
                      r="2"
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                    />
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
                      custom={4}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    />
                  </motion.svg>
                </a>
              </div>
              <motion.div className={styles.sectionContainer}>
                {sections.map((item, index) => (
                  <motion.p key={item.name} variants={sectionVaiants}>
                    <span>{index}.</span> {item.name}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav className={styles.navbar} initial="hidden" animate="visible">
        <motion.svg
          id="Layer_1"
          data-name="Layer 1"
          width={30}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <motion.rect
            x="25"
            y="25"
            width="950"
            height="950"
            rx="110"
            fill="none"
            stroke="var(--secondary)"
            strokeMiterlimit="10"
            strokeWidth="50"
            variants={svgVariants}
          />
          <motion.path
            d="M140.551,215.094h385v69.3h-151.2v420.7h-82.6v-420.7h-151.2Z"
            fill="var(--secondary)"
            variants={svgVariants}
          />
          <motion.path
            d="M839.151,705.094h-72.1l-4.9-35a122.843,122.843,0,0,1-41.649,29.4,129.389,129.389,0,0,1-52.15,10.5q-40.606,0-70.7-17.15t-46.2-50.4q-16.11-33.24-16.1-82.25v-205.1h79.1v193.9q0,44.1,17.5,66.85t53.9,22.75q35,0,54.95-22.75t19.95-66.85v-193.9h78.4Z"
            fill="var(--secondary)"
            variants={svgVariants}
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={toggleExpand}
        >
          <motion.line
            variants={menuVariants}
            custom={0}
            initial="initial"
            animate="visible"
            x1="3"
            y1="12"
            x2="21"
            y2="12"
          />
          <motion.line
            variants={menuVariants}
            custom={1}
            initial="initial"
            animate="visible"
            x1="3"
            y1="6"
            x2="21"
            y2="6"
          />
          <motion.line
            variants={menuVariants}
            custom={2}
            initial="initial"
            animate="visible"
            x1="3"
            y1="18"
            x2="21"
            y2="18"
          />
        </motion.svg>
      </motion.nav>
    </>
  );
};

export default MobileHeader;
