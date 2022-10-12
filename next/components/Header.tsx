import React from "react";
import styles from "../styles/components/Header.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type Sections = {
  name: string;
  link: string;
};

const navbarVariants: Variants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const svgVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
      // delay: 2,
    },
  },
};

const sections: Sections[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#",
  },
  {
    name: "Experience",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const Header = () => {
  return (
    <motion.nav className={styles.navbar} variants={navbarVariants} initial="hidden" animate="visible">
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        width={40}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <motion.rect
          x="25"
          y="25"
          width="950"
          height="950"
          rx="110"
          fill="none"
          stroke="var(--secondary)"
          strokeMiterlimit="10"
          strokeWidth="50"
          variants={svgVariants}
        />
        <motion.path
          d="M140.551,215.094h385v69.3h-151.2v420.7h-82.6v-420.7h-151.2Z"
          fill="var(--secondary)"
          variants={svgVariants}
        />
        <motion.path
          d="M839.151,705.094h-72.1l-4.9-35a122.843,122.843,0,0,1-41.649,29.4,129.389,129.389,0,0,1-52.15,10.5q-40.606,0-70.7-17.15t-46.2-50.4q-16.11-33.24-16.1-82.25v-205.1h79.1v193.9q0,44.1,17.5,66.85t53.9,22.75q35,0,54.95-22.75t19.95-66.85v-193.9h78.4Z"
          fill="var(--secondary)"
          variants={svgVariants}
        />
      </motion.svg>
      <div className={styles.sections}>
        {sections.map((item, index) => (
          <Link href={item.link} key={item.name}>
            <p>
              <span>{index}.</span> {item.name}
            </p>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Header;
