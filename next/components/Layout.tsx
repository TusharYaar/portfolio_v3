import React from "react";
import styles from "../styles/Layout.module.css";
import useGreaterThanView from "../hooks/useGreaterThanView";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Layout = ({ children, handleNavigation }: { children: JSX.Element; handleNavigation: (id: string) => void }) => {
  const isGreaterView = useGreaterThanView([576, 768]);

  return (
    <>
      {isGreaterView[0] ? <Header onClick={handleNavigation} /> : <MobileHeader onClick={handleNavigation} />}
      <div className={styles.pageContainer}>
        {isGreaterView[0] && <LeftBar />}
        <div className={styles.footerContainer}>
          <div className={styles.container}>{children}</div>
          <Footer />
        </div>
        {isGreaterView[1] && <RightBar />}
      </div>
    </>
  );
};

export default Layout;
