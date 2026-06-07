import Hello from "@sections/Hello";
import AboutMe from "@sections/AboutMe";
import Certificates from "@sections/Certificates";
import Experience from "@sections/Experience";
import ContactSection from "@sections/Contact";
import Head from "next/head";
import Projects from "@sections/Projects";
import Layout from "../components/Layout";
import { useCallback, useRef } from "react";

const Home = () => {
  const helloRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

  const handleNavigation = useCallback((id: string) => {
    console.log(id);
    if (id === "hello" && helloRef.current)
      helloRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "about" && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "projects" && projectsRef.current)
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "contact" && contactRef.current)
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "experience" && expRef.current)
      expRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "certificates" && certificatesRef.current)
      certificatesRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Layout handleNavigation={handleNavigation}>
      <>
        <Head>
          <title>Tushar Agrawal</title>
        </Head>
        <Hello ref={helloRef} />
        <AboutMe ref={aboutRef} />
        <Experience ref={expRef} />
        <Projects ref={projectsRef} />
        <Certificates ref={certificatesRef} />
        <ContactSection ref={contactRef} />
      </>
    </Layout>
  );
};

export default Home;
