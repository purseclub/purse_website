import React from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import CustomCursor from "./customCursor/customCursor";
import SmoothScroll from "./smoothScroll";

const Layout = ({ children, isActive }) => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <CustomCursor />
      <SmoothScroll status={isActive}>{children}</SmoothScroll>
    </>
  );
};

export default Layout;
