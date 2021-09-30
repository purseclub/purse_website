import React from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import CustomCursor from "./customCursor/customCursor";
import Modal from "./modal/Modal";
import SmoothScroll from "./smoothScroll";

const Layout = ({ children, isActive, hideModal }) => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <CustomCursor />
      <SmoothScroll>{children}</SmoothScroll>
      {isActive ? <Modal hide={hideModal} /> : <></>}
    </>
  );
};

export default Layout;
