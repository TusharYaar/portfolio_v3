import React, { FormEvent, useCallback, useState } from "react";

import styles from "../../styles/sections/ContactSection.module.css";

const ContactSection = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  const onClickSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Get In Touch</h3>
      <div className={styles.content}>
        <div>I would love to hear from you.</div>
        <div className={styles.formContainer}>
          <form onSubmit={onClickSubmit}>
            {/* <input name="name" value={form.name} onChange={handleOnChange} /> */}
            {/* <input name="email" value={form.email} onChange={handleOnChange} /> */}
            {/* <input name="description" value={form.description} onChange={handleOnChange} /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
