import React from "react";
import styles from "../styles/Header.module.css";

import { motion, Variants } from "framer-motion";

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

const Header = () => {
  return (
    <motion.nav className={styles.navbar} variants={navbarVariants} initial="hidden" animate="visible">
      Tushar
    </motion.nav>
  );
};

export default Header;
