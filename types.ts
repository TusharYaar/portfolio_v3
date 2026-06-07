import { RefAttributes } from "react";

export type DivRef = RefAttributes<HTMLDivElement>["ref"];

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
