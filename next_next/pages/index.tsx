import Hello from "../components/sections/Hello";
import AboutMe from "../components/sections/AboutMe";
import Experience, {
  ExperienceObject,
} from "../components/sections/Experience";

import { format, getYear, parseISO } from "date-fns";
import ContactSection from "../components/sections/ContactSection";
import Head from "next/head";
import ProjectSection, {
  ProjectDocument,
} from "../components/sections/ProjectSection";
import Layout from "../components/Layout";
import { useCallback, useRef } from "react";

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
    if (id === "about" && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "projects" && projectRef.current)
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "contact" && contactRef.current)
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "experience" && expRef.current)
      expRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Layout handleNavigation={handleNavigation}>
      <>
        <Head>
          <title>Tushar Agrawal</title>
        </Head>
        <Hello />
        <AboutMe ref={aboutRef} />
        <Experience experiences={[]} ref={expRef} />
        <ProjectSection featuredProjects={[]} projects={[]} ref={projectRef} />
        <ContactSection ref={contactRef} />
      </>
    </Layout>
  );
};

export default Home;
