import React from "react";
import { motion } from "framer-motion";
import type { ProjectDocument } from "./sections/ProjectSection";

import styles from "../styles/components/FeaturedProject.module.css";
const FeaturedProject = ({ project, reverse }: { project: ProjectDocument; reverse: boolean }) => {
  return (
    <div className={`${styles.container} ${reverse && styles.reverse}`}>
      <motion.div className={styles.imageContainer}>
        <motion.div className={styles.imageBackground} />
        <motion.img src={project.imageUrl} className={styles.image} />
      </motion.div>
      <div className={styles.content}>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <div className={styles.projectStack}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.featuredBrief }} />
      </div>
      <div className={styles.projectLinks}>{}</div>
    </div>
  );
};

export default FeaturedProject;
