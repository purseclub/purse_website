import React from "react";
import GlobalFont from "../fonts/font";
import { GlobalStyle, LegalMainContent } from "../styles/legal_layout_style";
import LegalHeader from "./legal_header";

const LegalLayout = ({ children }) => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <LegalHeader />
      <LegalMainContent>{children}</LegalMainContent>
    </>
  );
};

export default LegalLayout;
