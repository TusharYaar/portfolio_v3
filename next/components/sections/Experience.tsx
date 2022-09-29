import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/Experience.module.css";

type Props = {
  experiences: {
    _createdAt: Date;
    _id: string;
    _type: string;
    _updatedAt: string;
    company: string;
    companyUrl: string;
    stateDate: Date;
    type: string;
    worksHere?: boolean;
    endDate?: Date;
    description: string;
  }[];
};

const Experience = ({ experiences }: Props) => {
  const [active, setActive] = useState(experiences[experiences.length - 1]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tabsContainer}>
          {experiences.map((item) => (
            <div
              className={`${styles.tab} ${item._id === active._id && styles.activeTab}`}
              key={item._id}
              onClick={() => setActive(item)}
            >
              {item.company}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3>{active.company}</h3>
            <div dangerouslySetInnerHTML={{ __html: active.description }} />
            {/* {active.description} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
