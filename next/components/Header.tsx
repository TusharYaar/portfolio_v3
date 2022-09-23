import React from "react";
import styles from "../styles/Header.module.css";
import { motion, Variants } from "framer-motion";

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

const sections: Sections[] = [
  {
    name: "About",
    link: "#",
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
      Tushar
      <div className={styles.sections}>
        {sections.map((item, index) => (
          <h6 key={index}>
            <span>{index}.</span> {item.name}
          </h6>
        ))}
      </div>
    </motion.nav>
  );
};

export default Header;
