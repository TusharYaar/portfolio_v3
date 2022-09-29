import React from "react";
import Container from "./Container";
import Header from "./Header";

import useMobileView from "../hooks/useMobileView";
import MobileHeader from "./MobileHeader";

import styles from "../styles/Layout.module.css";
import SocialIcons from "./SocialIcons";

const Layout = ({ children }: { children: JSX.Element }) => {
  const isMobileView = useMobileView();

  return (
    <>
      {isMobileView ? <MobileHeader /> : <Header />}
      <div className={styles.container}>
        {!isMobileView && (
          <div className={styles.leftSide}>
            <div className={styles.fixedContainer}>
              <div className={styles.iconsContainer}>
                {/* <SocialIcons delay={1} />
                <SocialIcons delay={2} />
                <SocialIcons delay={3} />
                <SocialIcons delay={4} /> */}
              </div>
              <span>SOCIALS</span>
            </div>
          </div>
        )}
        <Container>{children}</Container>
        {!isMobileView && (
          <div className={styles.rightSide}>
            <span>WEB&nbsp;DEVELOPER</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
