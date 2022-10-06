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
    y: -5,
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
      <div className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.brief }} />
      <motion.div className={styles.projectLinks}>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 25 25"
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
        <a href={project.url} target="_blank" rel="noreferrer">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
          >
            <motion.path variants={iconVariants} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <motion.polyline variants={iconVariants} points="15 3 21 3 21 9" />
            <motion.line variants={iconVariants} x1="10" y1="14" x2="21" y2="3" />
          </motion.svg>
        </a>
        {project.hasMobileApp && (
          <a href={project.playstoreUrl as string} target="_blank" rel="noreferrer">
            <motion.svg
              stroke="var(--secondary)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              width={25}
              height={25}
            >
              <motion.path
                variants={iconVariants}
                d="M11.452,9.125c-0.344,0-0.625-0.28-0.625-0.625c0-0.344,0.28-0.625,0.625-0.625c0.344,0,0.625,0.28,0.625,0.625 C12.076,8.844,11.796,9.125,11.452,9.125"
              />
              <motion.path
                variants={iconVariants}
                d="M4.548,9.125c-0.344,0-0.625-0.28-0.625-0.625c0-0.344,0.28-0.625,0.625-0.625c0.344,0,0.625,0.28,0.625,0.625 C5.173,8.844,4.893,9.125,4.548,9.125"
              />
              <motion.line
                x1="11.454"
                x2="12.724"
                y1="5.484"
                y2="3.251"
                fill="none"
                stroke="var(--secondary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                variants={iconVariants}
              />
              <motion.line
                x1="4.546"
                x2="3.276"
                y1="5.484"
                y2="3.251"
                fill="none"
                stroke="var(--secondary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                variants={iconVariants}
              />
              <motion.path
                fill="none"
                stroke="var(--secondary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M15.505,11.5 C15.153,7.663,11.929,4.656,8,4.656S0.847,7.663,0.495,11.5H15.505z"
                variants={iconVariants}
              />
            </motion.svg>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RecentProject;
