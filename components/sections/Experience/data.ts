import { ExperienceObject } from "@/types";

const data: ExperienceObject[] = [
  {
    company: "Richedu",
    companyUrl: "",
    description: [
      "Write modern, performant, maintainable code while managing and communicating with different departments.",
      "Work with international team to develop project which would enhance student's experience with their peers.",
    ],
    startDate: "2021-04-02",
    endDate: "2021-07-02",
    worksHere: false,
    role: "Tech Intern",
    _id: "richedu",
    duration: "April - July 2021",
  },

  {
    company: "SEDS-VIT",
    companyUrl: "https://www.sedsvit.in/",
    description: [
      "Manage all the social interactions of the chapter on various social media websites.",
      "Design posters and illustrations for various chapter events and activities.",
      "Teach chapter members about design and development.",
      "Develop and maintain chapter website to organize various events and blogs.",
    ],
    startDate: "2021-08-26",
    endDate: "2022-08-18",
    worksHere: false,
    role: "Marketing Manager",
    _id: "seds_vit",
    duration: "August 2021 - August 2022",
  },
  {
    company: "Upwork",
    companyUrl: "https://www.upwork.com/freelancers/~01723d38b18d5064a2",
    description: [
      "Translated business requirements into technical specifications, ensuring that final products aligned with client goals and user needs.",
    ],
    startDate: "2021-07-23",
    endDate: "2021-04-25",
    worksHere: false,
    role: "Freelancer",
    _id: "upwork",
    duration: "July 2021 - April 2022",
  },
  {
    company: "Appointy",
    companyUrl: "https://www.appointy.com/",
    description: [
      "Built scalable and intelligent web, mobile, and AI-driven applications used by thousands of people globally.",
      "Contributed in the field of product development using React, Javascript, Git,and GraphQL.",
      "Improve the working of internal tools to increase the team's efficiency by 30%.",
      "Improved the accessibility of live product by 10%.",
    ],
    startDate: "2022-05-20",
    endDate: "2022-07-21",
    worksHere: false,
    role: "Frontend Tech Intern",
    _id: "appointy",
    duration: "May - July 2022",
  },

  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/",
    description: [
      "Building scalable, cloud-native microservices using Java, C++, and Python and deploying them with Kubernetes, Docker and Helm",
      "Working on cloud-native Session border controller, with deep knowledge on SIP (Session Initiation Protocol)",
      "Collaborated with the GUI team to architect and develop a centralized management dashboard, streamlining the configuration process for cnSBC.",
      "Executed the end-to-end development of new gateway features, from technical design to production deployment and monitoring.",
    ],
    startDate: "2023-01-02",
    worksHere: true,
    role: "Software Developer",
    _id: "oracle",
    duration: "January 2023 - Present",
  },
];
export default data;
