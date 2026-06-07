import Image from "next/image";
import styles from "./AboutMe.module.css";
import { DivRef } from "@/types";

const AboutMe = ({ ref }: { ref: DivRef }) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.textContainer}>
        <h3 className={styles.heading}>Who am I?</h3>
        <p className={styles.paragraph}>
          I am a builder who refuses to stay in one lane. While I spend my days
          navigating Kubernetes clusters and distributed systems, I am equally
          passionate about the front of the stack—designing and developing
          seamless web and cross-platform mobile applications. I believe that
          great software isn&apos;t just about powerful code; it&apos;s about
          the synergy between hardware, infrastructure, and the user.
        </p>
        <p className={styles.paragraph}>
          When I&apos;m not smashing a keyboard, I&apos;m likely picking up a
          guitar, synthesizer, or flute, or exploring the world.
        </p>
      </div>

      <Image
        src="/profilepic2.jpeg"
        alt="Tushar S Agrawal"
        className={styles.image}
        height={959}
        width={959}
      />
    </div>
  );
};
AboutMe.displayName = "AboutMe";

export default AboutMe;
