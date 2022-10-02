import React from "react";
import type { ProjectDocument } from "./sections/FeaturedProjectSection";
import { motion, Variants } from "framer-motion";

import styles from "../styles/components/RecentProject.module.css";

const variants: Variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  hover: {
    color: "var(--secondary)",
    y: -10,
    transition: {
      color: {
        duration: 0.3,
      },
    },
  },
};

const iconVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
    },
  },
};

const RecentProject = ({ project }: { project: ProjectDocument }) => {
  return (
    <motion.div className={styles.container} variants={variants} initial="initial" animate="visible" whileHover="hover">
      <h4 className={styles.projectTitle}>{project.title}</h4>
      <div className={styles.projectStack}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.description }} />
      <motion.div>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox={`0 0 ${25} ${25}`}
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
          >
            <motion.path
              variants={iconVariants}
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </motion.svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default RecentProject;
