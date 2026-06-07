import styles from "./Hello.module.css";

import { motion, Variants } from "framer-motion";
import MotionUnderline from "@components/MotionCircle";

import { DivRef } from "@/types";
import ScrambleText from "@components/ScrambleText";
import { useEffect, useState } from "react";
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

const PLATFORMS = ["browser", "mobile", "baremetal", "cluster"];

const Hello = ({ ref }: { ref: DivRef }) => {
  const [scrambleText, setScrambleText] = useState(PLATFORMS[0]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setScrambleText(PLATFORMS[index]);
      index = (index + 1) % PLATFORMS.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [setScrambleText]);

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        className={styles.aboutLines}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className={styles.codeLine}
          variants={lineVariants}
          custom={0}
        >
          Hello, my name is
        </motion.p>
        <motion.p
          className={styles.nameLine}
          variants={lineVariants}
          custom={1}
        >
          Tushar.
        </motion.p>
        <motion.p
          className={styles.workLine}
          variants={lineVariants}
          custom={2}
        >
          I make <MotionUnderline>stuff</MotionUnderline> for{" "}
          <br className={styles.linebreak} />
          <ScrambleText text={scrambleText} delay={0} />
        </motion.p>
        <motion.p
          className={styles.codeLine}
          variants={lineVariants}
          custom={3}
        >
          by smashing keyboard.
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.brief}
        variants={lineVariants}
        custom={4}
        initial="hidden"
        animate="visible"
      >
        I am a <span>software engineer</span> currently working at Oracle. I
        focus on the architecture and deployment of containerized systems at
        scale. I also develop websites and cross-platform apps (sometime design
        them too) as well.
      </motion.div>
    </div>
  );
};

Hello.displayName = "Hello";
export default Hello;
