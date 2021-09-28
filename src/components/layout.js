import React from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import CustomCursor from "./customCursor/customCursor";
import Legals from "./Legals/Legals";
import SmoothScroll from "./smoothScroll";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <CustomCursor />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
};

export default Layout;
