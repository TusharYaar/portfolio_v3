import React from "react";
import Container from "./Container";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
