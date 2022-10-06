import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/sections/Experience.module.css";

export type ExperienceObject = {
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
  company: string;
  companyUrl: string;
  startDate: string;
  role: string;
  type: string;
  worksHere?: boolean;
  endDate?: string;
  description: string;
  duration: string;
};

const Experience = ({ experiences }: { experiences: ExperienceObject[] }) => {
  const [active, setActive] = useState(experiences[experiences.length - 1]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tabsContainer}>
          {experiences.map((item) => (
            <motion.div className={styles.tab} key={item._id} onClick={() => setActive(item)}>
              <span>{item.company}</span>
              {item._id === active._id && <motion.div layoutId="sideline" className={styles.sideline} />}
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
              <a className={styles.companyName} href={active.companyUrl} target="_blank" rel="noreferrer">
                {`@ ${active.company}`}
              </a>
            </h3>
            <p className={styles.duration}>{active.duration}</p>
            <div dangerouslySetInnerHTML={{ __html: active.description }} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
