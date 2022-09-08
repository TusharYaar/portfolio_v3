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
      name: "coffee_cups",
      title: "Coffee Cups",
      type: "number",
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

          // { title: "React", value: "react" },
          // { title: "React", value: "react" },
          // { title: "React", value: "react" },
        ],
      },
    },
  ],
};
