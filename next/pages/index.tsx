import Hello from "../components/sections/Hello";
import AboutMe from "../components/sections/AboutMe";
import Experience, { ExperienceObject } from "../components/sections/Experience";

import { createClient } from "next-sanity";

import { remark } from "remark";
import remarkHtml from "remark-html";

import { format, getYear, parseISO } from "date-fns";

const client = createClient({
  projectId: process.env.CMS_ID,
  dataset: process.env.CMS_DATASET,
  apiVersion: process.env.CMS_API_VERSION,
  useCdn: Boolean(process.env.CMS_USE_CDN),
});

const Home = ({ experiences }: { experiences: ExperienceObject[] }) => {
  return (
    <>
      <Hello />
      <AboutMe />
      <Experience experiences={experiences} />
    </>
  );
};

export default Home;
type experience = {
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: string;
  company: string;
  companyUrl: string;
  startDate: string;
  type: string;
  worksHere?: boolean;
  endDate?: string;
  description: string;
  duration: string;
};

const formatDate = (_startDate: string, _endDate?: string) => {
  const startDate = parseISO(_startDate);
  if (!_endDate) {
    return `${format(startDate, "MMMM yyyy")} - Present`;
  } else {
    const endDate = parseISO(_endDate);
    if (getYear(startDate) === getYear(endDate)) {
      return `${format(startDate, "MMMM")} - ${format(endDate, "MMMM yyyy")}`;
    } else {
      return `${format(startDate, "MMMM yyyy")} - ${format(endDate, "MMMM yyyy")}`;
    }
  }
};

export async function getStaticProps() {
  let experiences = (await client.fetch(`*[_type == "experience"] | order(startDate asc)`)) as ExperienceObject[];
  const parser = remark().use(remarkHtml);
  experiences = await Promise.all(
    experiences.map(async (exp) => ({
      ...exp,
      description: await parser.process(exp.description).then((file) => String(file)),
      duration: formatDate(exp.startDate, exp.endDate),
    }))
  );
  return {
    props: {
      experiences,
    },
  };
}
