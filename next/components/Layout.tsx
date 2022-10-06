import React from "react";
import Header from "./Header";

import useMobileView from "../hooks/useMobileView";
import MobileHeader from "./MobileHeader";

import styles from "../styles/Layout.module.css";
import useGreaterThanView from "../hooks/useGreaterThanView";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  const isMobileView = useMobileView();
  const isGreaterView = useGreaterThanView([576, 768, 992]);

  return (
    <>
      {isMobileView ? <MobileHeader /> : <Header />}
      <div className={styles.pageContainer}>
        {!isMobileView && <LeftBar />}
        <div>
          <div className={styles.container}>{children}</div>
          <Footer />
        </div>
        {isGreaterView[1] && <RightBar />}
      </div>
    </>
  );
};

export default Layout;
