import React, { FormEvent, forwardRef, useCallback, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "../../styles/sections/ContactSection.module.css";

const buttonVariant: Variants = {
  hover: {
    scale: 1.1,
  },
  active: {
    scale: 0.9,
  },
};
const iconVariant: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    x: 10,
  },
  active: {
    opacity: 0,
    x: 100,
  },
};

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [form, setform] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setform((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  const onClickSubmit = useCallback((e: FormEvent) => {
    console.log("submit");
    e.preventDefault();
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <h3 className={styles.header}>Get In Touch</h3>
      <div className={styles.contentContainer}>
        <p className={styles.phrase}>I would love to hear from you.</p>
        <form onSubmit={onClickSubmit} className={styles.form}>
          <div className={styles.formField}>
            <p>Name</p>
            <input name="name" value={form.name} type="text" placeholder="John Smith" onChange={handleOnChange} />
          </div>
          <div className={styles.formField}>
            <p>Email</p>
            <input
              name="email"
              value={form.email}
              type="text"
              placeholder="jooohn@mail.com"
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.formField}>
            <p>Description</p>
            <textarea
              name="description"
              value={form.description}
              placeholder="Can you make an app for me"
              onChange={handleOnChange}
            />
          </div>
          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover="hover"
            whileTap="active"
            initial="initial"
            variants={buttonVariant}
          >
            Send
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconVariant}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          </motion.button>
        </form>
      </div>
    </div>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
