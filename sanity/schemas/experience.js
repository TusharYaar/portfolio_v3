export default {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "companyUrl",
      title: "Company URL",
      type: "url",
    },
    {
      name: "type",
      title: "Employment Type",
      type: "string",
      options: [
        { title: "Internship", value: "internship" },
        { title: "Full-Time Employee", value: "employee" },
      ],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "worksHere",
      title: "Works Here",
      type: "boolean",
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
