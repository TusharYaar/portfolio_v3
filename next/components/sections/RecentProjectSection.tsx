import React from "react";
import type { ProjectDocument } from "./FeaturedProjectSection";

import RecentProject from "../RecentProject";
import styles from "../../styles/sections/RecentProjectSection.module.css";

const RecentProjectSection = ({ projects }: { projects: ProjectDocument[] }) => {
  return (
    <div>
      <h3>Other projects i made recently...</h3>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <RecentProject project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectSection;
