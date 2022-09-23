import React from "react";
import styles from "../../styles/Hello.module.css";

import { motion, Variants } from "framer-motion";
import MotionUnderline from "../MotionUnderline";

const lineVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1 + custom * 0.2,
    },
  }),
};

const Hello = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.aboutLines} initial="hidden" animate="visible">
        <motion.p className={styles.codeLine} variants={lineVariants} custom={0}>
          Hello, my name is
        </motion.p>
        <motion.p className={styles.nameLine} variants={lineVariants} custom={1}>
          Tushar S Agrawal.
        </motion.p>
        <motion.p className={styles.workLine} variants={lineVariants} custom={2}>
          I make <MotionUnderline>stuff</MotionUnderline> on the web
        </motion.p>
        <motion.p className={styles.codeLine} variants={lineVariants} custom={3}>
          by smashing keyboard.
        </motion.p>
      </motion.div>
      <motion.div className={styles.brief}>
        I am a final year student from India. I can make website and cross-platform apps (sometime design them too).
        Currently I&apos;m waiting to join
        <span> Oracle</span> in January.
        {/* Currently I&apos;m working at Oracle as a Software developer engineer */}
      </motion.div>
    </div>
  );
};

export default Hello;
