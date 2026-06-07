import Image from "next/image";
import styles from "./styles.module.css";
import { DivRef } from "@/types";

import DATA from "./data.json";

const Certificates = ({ ref }: { ref: DivRef }) => {
  return (
    <div className={styles.container} ref={ref}>
      <div>
        <h3 className={styles.heading}>Some of my certificates</h3>
        <div className={styles.certificatesGrid}>
          {DATA.map((cert) => (
            <div className={styles.certificate} key={cert.title}>
              <Image
                src={cert.image}
                className={styles.certificateImage}
                alt={cert.title}
                width={300}
                height={294}
              />
              <h4 className={styles.certificateTitle}>{cert.title}</h4>
              <p className={styles.certificateIssuer}>
                Issued by{" "}
                <a
                  href={cert.issuerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cert.issuer}
                </a>
              </p>
              <p className={styles.description}>{cert.description}</p>
              <p className={styles.certificateEarned}>
                Earned on: <span>{cert.earnedOn}</span>
              </p>
              <p className={styles.certificateExpires}>
                Expires on: <span>{cert.expiresOn}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Certificates.displayName = "Certificates";

export default Certificates;
