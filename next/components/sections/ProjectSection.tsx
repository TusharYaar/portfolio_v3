import React from "react";
import styles from "../../styles/sections/ProjectSection.module.css";
import FeaturedProject from "../FeaturedProject";
import RecentProject from "../RecentProject";
export type ProjectDocument = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "project";
  _updatedAt: string;
  coffee_cups: number;
  endDate: string;
  featured: boolean;
  githubLink: string;
  hasMobileApp: boolean;
  image: { _type: "image"; asset: any };
  imageUrl: string;
  playstoreUrl: string | null;
  stack: string[];
  startDate: string;
  title: string;
  url: string;
  description: string;
  brief: string;
};

const ProjectSection = ({
  featuredProjects,
  projects,
}: {
  featuredProjects: ProjectDocument[];
  projects: ProjectDocument[];
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Projects I proudly showcase</h3>
      <div className={styles.featureProjectContainer}>
        {featuredProjects.map((project, index) => (
          <FeaturedProject project={project} key={project._id} reverse={index % 2 == 0} />
        ))}
      </div>
      <div className={styles.recentProjectSection}>
        <h3 className={styles.subHeader}>Other projects i made recently...</h3>
        <div className={styles.recentProjectContainer}>
          {projects.map((project) => (
            <RecentProject project={project} key={project._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
