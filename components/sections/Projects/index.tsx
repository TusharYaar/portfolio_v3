import { DivRef } from "@/types";
import styles from "./ProjectSection.module.css";
import Image from "next/image";

const ProjectSection = ({ ref }: { ref: DivRef }) => {
  return (
    <div className={styles.container} ref={ref}>
      <h3 className={styles.header}>Project Showcase</h3>
      <div className={styles.featureProjectContainer}>
        <div id={styles.snaps} className={styles.featureProject}>
          <h5 className={styles.featureProjectTitle}>Snaps</h5>
          <p className={styles.featureProjectDescription}>
            A personal photography portfolio showcasing travel, nature, and
            cultural moments.
          </p>
          <Image
            className={styles.featureProjectImage}
            src="/projects/snaps.png"
            width={1920}
            height={913}
            alt="Snaps Site"
          />
        </div>
        <div id={styles.moneybracket} className={styles.featureProject}>
          <h5 className={styles.featureProjectTitle}>Money Bracket</h5>
          <p className={styles.featureProjectDescription}>
            A personal photography portfolio showcasing travel, nature, and
            cultural moments.
          </p>
          <Image
            className={styles.featureProjectImage}
            src="/projects/moneybracket.jpg"
            width={1080}
            height={2340}
            alt="Snaps Site"
          />
        </div>
        <div id={styles.docdepo} className={styles.featureProject}>
          <h5 className={styles.featureProjectTitle}>Docdepo</h5>
          <p className={styles.featureProjectDescription}>
            A personal photography portfolio showcasing travel, nature, and
            cultural moments.
          </p>
          <Image
            className={styles.featureProjectImage}
            src="/projects/docdepo.png"
            width={600}
            height={800}
            alt="Snaps Site"
          />
        </div>
        <div id={styles.colorquest} className={styles.featureProject}>
          <h5 className={styles.featureProjectTitle}>Colorquest</h5>
          <p className={styles.featureProjectDescription}>
            A personal photography portfolio showcasing travel, nature, and
            cultural moments.
          </p>
          <Image
            className={styles.featureProjectImage}
            src="/projects/colorquest.png"
            width={1920}
            height={913}
            alt="Snaps Site"
          />
        </div>
        <div id={styles.mockback} className={styles.featureProject}>
          <h5 className={styles.featureProjectTitle}>Mockback</h5>
          <p className={styles.featureProjectDescription}>
            A personal photography portfolio showcasing travel, nature, and
            cultural moments.
          </p>
          <Image
            className={styles.featureProjectImage}
            src="/projects/mockback.png"
            width={1920}
            height={913}
            alt="Snaps Site"
          />
        </div>
      </div>
    </div>
  );
};

ProjectSection.displayName = "Projects";
export default ProjectSection;
