export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "hasMobileApp",
      title: "Mobile App Avalible",
      type: "boolean",
      default: false,
    },
    {
      name: "playstoreUrl",
      title: "Playstore Url",
      type: "url",
      hidden: ({ document }) => !document.hasMobileApp,
    },
    {
      name: "coffee_cups",
      title: "Coffee Cups",
      type: "number",
    },
    {
      title: "Project Start Date",
      name: "startDate",
      type: "date",
    },
    {
      title: "Project End Date",
      name: "endDate",
      type: "date",
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
      default: false,
    },
    {
      name: "brief",
      title: "Brief",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "markdown",
    },
    {
      name: "stack",
      title: "Stack Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Javascript", value: "JavaScript" },
          { title: "Typescript", value: "TypeScript" },
          { title: "React", value: "React" },
          { title: "React Native", value: "React Native" },
          { title: "Node.js", value: "NodeJs" },
          { title: "Firebase", value: "Firebase" },
          { title: "Git", value: "Git" },
          { title: "Electron", value: "Electron" },
          { title: "Digital Ocean", value: "Digital Value" },
          { title: "MongoDb", value: "MongoDb" },
          { title: "SQL", value: "SQL" },
        ],
      },
    },
    {
      type: "image",
      name: "image",
      title: "Image",
    },
  ],
};
