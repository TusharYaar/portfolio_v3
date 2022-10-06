import React from "react";
import styles from "../../styles/sections/FeaturedProjectSection.module.css";
import FeaturedProject from "../FeaturedProject";

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

const FeaturedProjectSection = ({ projects }: { projects: ProjectDocument[] }) => {
  return (
    <div>
      <h3 className={styles.header}>Projects I proudly showcase</h3>
      <div>
        {projects.map((project, index) => (
          <FeaturedProject project={project} key={project._id} reverse={index % 2 == 0} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectSection;
