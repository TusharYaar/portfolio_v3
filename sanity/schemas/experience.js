export default {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "companyUrl",
      title: "Company URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Employment Type",
      type: "string",
      default: "",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "worksHere",
      title: "Works Here",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ document }) => document.worksHere,
    },
    {
      name: "description",
      title: "Description",
      type: "markdown",
    },
  ],
};
