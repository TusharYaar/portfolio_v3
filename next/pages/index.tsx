import Hello from "../components/sections/Hello";
import AboutMe from "../components/sections/AboutMe";
import Experience, { ExperienceObject } from "../components/sections/Experience";

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { remark } from "remark";
import remarkHtml from "remark-html";

import { format, getYear, parseISO } from "date-fns";
import ContactSection from "../components/sections/ContactSection";
import Head from "next/head";
import ProjectSection, { ProjectDocument } from "../components/sections/ProjectSection";
import Layout from "../components/Layout";
import { useCallback, useRef } from "react";

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
  allProjects,
}: {
  experiences: ExperienceObject[];
  featuredProjects: ProjectDocument[];
  allProjects: ProjectDocument[];
}) => {
  const helloRef = useRef(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavigation = useCallback((id: string) => {
    console.log(id);
    if (id === "about" && aboutRef.current) aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "projects" && projectRef.current) projectRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "contact" && contactRef.current) contactRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "experience" && expRef.current) expRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Layout handleNavigation={handleNavigation}>
      <>
        <Head>
          <title>Tushar Agrawal</title>
        </Head>
        <Hello />
        <AboutMe ref={aboutRef} />
        <Experience experiences={experiences} ref={expRef} />
        <ProjectSection featuredProjects={featuredProjects} projects={allProjects} ref={projectRef} />
        <ContactSection ref={contactRef} />
      </>
    </Layout>
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
      featuredBrief: await parser.process(project.featuredBrief).then((file) => String(file)),
    }))
  );

  const featuredProjects = allProjects.filter((project) => project.featured);
  allProjects = allProjects
    .filter((project) => !project.featured)
    .slice(0, 6)
    .map((pro) => ({ ...pro, stack: pro.stack.slice(0, 4) }));

  return {
    props: {
      experiences,
      allProjects,
      featuredProjects,
    },
  };
}
