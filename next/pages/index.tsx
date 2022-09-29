import type { NextPage } from "next";
import Hello from "../components/sections/Hello";
import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";

import { createClient } from "next-sanity";

import { remark } from "remark";
import remarkHtml from "remark-html";

const client = createClient({
  projectId: process.env.CMS_ID,
  dataset: process.env.CMS_DATASET,
  apiVersion: process.env.CMS_API_VERSION,
  useCdn: Boolean(process.env.CMS_USE_CDN),
});

const Home: NextPage = ({ experiences }: any) => {
  console.log(experiences);
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
  stateDate: Date;
  type: string;
  worksHere?: boolean;
  endDate?: Date;
  description: string;
};

export async function getStaticProps() {
  let experiences = (await client.fetch(`*[_type == "experience"] | order(startDate asc)`)) as experience[];
  const parser = remark().use(remarkHtml);
  experiences = await Promise.all(
    experiences.map(async (exp) => ({
      ...exp,
      description: await parser.process(exp.description).then((file) => String(file)),
    }))
  );
  return {
    props: {
      experiences,
    },
  };
}
