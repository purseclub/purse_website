import React from "react";
import { Wrapper } from "../../styles/experience/styledExperienceLayout";
import GlobalFont from "../../fonts/font";
import GlobalStyle from "../../styles/experience/experienceGlobalStyle";

const ExperienceLayout = ({ children }) => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default ExperienceLayout;
