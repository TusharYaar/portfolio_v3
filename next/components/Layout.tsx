import React from "react";
import Container from "./Container";
import Header from "./Header";

import useMobileView from "../hooks/useMobileView";
import MobileHeader from "./MobileHeader";

const Layout = ({ children }: { children: JSX.Element }) => {
  const isMobileView = useMobileView();

  return (
    <>
      {isMobileView ? <MobileHeader /> : <Header />}
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
