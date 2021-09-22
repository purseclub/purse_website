import * as React from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import { App } from "../styles/indexStyle";
import SmoothScroll from "../components/smoothScroll";
import NavigationBar from "../components/Navigation/navigationBar";
import { Landing } from "../components/Landing/Landing";
import WhatWeOffer from "../components/What_we_offer/WhatWeOffer";
import Intro from "../components/Intro/Intro";
import Faq from "../components/Faq/Faq";

//transition value
const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <>
        <SmoothScroll>
          <NavigationBar />
          <Landing />
          <WhatWeOffer />
          <Intro />
          <Faq />
        </SmoothScroll>
      </>
    </>
  );
};

export default IndexPage;
