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
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      title: "Project End Date",
      name: "endDate",
      type: "date",
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
      default: false,
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
          { title: "React", value: "react" },
          { title: "React Native", value: "react_native" },
          { title: "Node.js", value: "nodejs" },
          { title: "Typescript", value: "typescript" },
          // { title: "Node.js", value: "nodejs" },
          // { title: "Node.js", value: "nodejs" },
          // { title: "Node.js", value: "nodejs" },
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
