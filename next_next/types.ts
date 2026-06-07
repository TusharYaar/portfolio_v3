import { RefAttributes } from "react";

export type DivRef = RefAttributes<HTMLDivElement>["ref"];

export type ProjectDocument = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "project";
  _updatedAt: string;
  coffee_cups: number;
  endDate: string;
  featured: boolean;
  featuredBrief: string;
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

export type ExperienceObject = {
  _id: string;
  company: string;
  companyUrl: string;
  startDate: string;
  role: string;
  worksHere?: boolean;
  endDate?: string;
  description: string[];
  duration: string;
};
