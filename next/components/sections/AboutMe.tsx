import Image from "next/image";
import React from "react";
import styles from "../../styles/sections/AboutMe.module.css";
import image from "../../assets/profilepic2.jpeg";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Who am I?</h3>
        <p className={styles.paragraph}>
          Hello,I am Tushar S Agrawal, a final year student at Vellore Institute of Technology, Vellore. I am currently
          pursuing a Bachelor’s degree in computer science. I am a quick learner and I a always strive to learn
          something new in any project I make. I try to keep up to date with latest. Apart form technical skills, I like
          to play guitar, synthesizer and flute. I also used to play for the school band.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt="Tushar S Agrawal" />
      </div>
    </div>
  );
};

export default AboutMe;
