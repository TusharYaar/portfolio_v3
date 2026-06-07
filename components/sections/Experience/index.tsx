import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Experience.module.css";
import { DivRef } from "@/types";
import DATA from "./data";

const Experience = ({ ref }: { ref: DivRef }) => {
  const [active, setActive] = useState(DATA[DATA.length - 1]);
  return (
    <div className={styles.container} ref={ref}>
      <h3 className={styles.heading}>Place I&apos;ve Worked..</h3>
      <div className={styles.content}>
        <div className={styles.tabsContainer}>
          {DATA.map((item) => (
            <motion.div
              className={styles.tab}
              key={item._id}
              onClick={() => setActive(item)}
            >
              <span>{item.company}</span>
              {item._id === active._id && (
                <motion.div layoutId="sideline" className={styles.sideline} />
              )}
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.description}
            key={active._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.employment}>
              {active.role}
              <a
                className={styles.companyName}
                href={active.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                {`@ ${active.company}`}
              </a>
            </h3>
            <p className={styles.duration}>{active.duration}</p>
            <ul>
              {active.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Experience.displayName = "Experience";

export default Experience;
