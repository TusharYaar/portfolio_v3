import Hello from "../components/sections/Hello";
import AboutMe from "../components/sections/AboutMe";
import Experience, { ExperienceObject } from "../components/sections/Experience";
import FeaturedProjectSection, { ProjectDocument } from "../components/sections/FeaturedProjectSection";

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { remark } from "remark";
import remarkHtml from "remark-html";

import { format, getYear, parseISO } from "date-fns";

const client = createClient({
  projectId: process.env.CMS_ID,
  dataset: process.env.CMS_DATASET,
  apiVersion: process.env.CMS_API_VERSION,
  useCdn: Boolean(process.env.CMS_USE_CDN),
});
const builder = imageUrlBuilder(client);

const Home = ({
  experiences,
  featuredProjects,
}: {
  experiences: ExperienceObject[];
  featuredProjects: ProjectDocument[];
}) => {
  return (
    <>
      <Hello />
      <AboutMe />
      <Experience experiences={experiences} />
      <FeaturedProjectSection projects={featuredProjects} />
    </>
  );
};

export default Home;

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
  let allProjects = (await client.fetch(`*[_type == "project"] | order(endDate desc)`)) as ProjectDocument[];

  const parser = remark().use(remarkHtml);
  experiences = await Promise.all(
    experiences.map(async (exp) => ({
      ...exp,
      description: await parser.process(exp.description).then((file) => String(file)),
      duration: formatDate(exp.startDate, exp.endDate),
    }))
  );

  allProjects = await Promise.all(
    allProjects.map(async (project) => ({
      ...project,
      imageUrl: builder.image(project.image).url(),
      description: await parser.process(project.description).then((file) => String(file)),
    }))
  );

  const featuredProjects = allProjects.filter((project) => project.featured);
  return {
    props: {
      experiences,
      allProjects,
      featuredProjects,
    },
  };
}
