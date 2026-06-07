import React, { SubmitEvent, useCallback, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./ContactSection.module.css";
import { DivRef } from "@/types";

import { CONTACT_EMAIL } from "@/constants/links";


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

type FormState = {
  name: string;
  email: string;
  description: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  description: "",
};

const ContactSection = ({ ref }: { ref: DivRef }) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setError("");
    setForm((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  const onClickSubmit = useCallback(
    async (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError("");
      const trimmedName = form.name.trim();
      const trimmedEmail = form.email.trim();
      const trimmedDescription = form.description.trim();

      if (!trimmedName || !trimmedEmail || !trimmedDescription) {
        setError("Please fill in all fields.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        setError("Please enter a valid email address.");
        return;
      }
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email: trimmedEmail, name: trimmedName, description: trimmedDescription,  "form-name": "pizzaOrder" }).toString()
        })
      } catch {
        setError("Unable to submit the details. Please try again.");
        return;
      }
      setForm(initialForm);
      setSubmitted(true);
    },
    [form],
  );

  return (
    <div className={styles.container} ref={ref}>
      <h3 className={styles.header}>Get In Touch</h3>
      <div className={styles.contentContainer}>
        <p className={styles.phrase}>I would love to hear from you.</p>
        <form onSubmit={onClickSubmit} className={styles.form} noValidate>
        <input type="hidden" name="form-name" value="pizzaOrder" />
          <div className={styles.formField}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              type="text"
              placeholder="John Smith"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              value={form.email}
              type="email"
              placeholder="john@mail.com"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="contact-description">Description</label>
            <textarea
              id="contact-description"
              name="description"
              value={form.description}
              placeholder="Can you make an app for me?"
              onChange={handleOnChange}
              required
            />
          </div>
          {error && (
            <p className={styles.formError} role="alert">
              {error}
            </p>
          )}
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
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

ContactSection.displayName = "ContactSection";
export default ContactSection;
