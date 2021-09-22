import * as React from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import { App } from "../styles/indexStyle";
import SmoothScroll from "../components/smoothScroll";
import NavigationBar from "../components/Navigation/navigationBar";
import { Landing } from "../components/Landing/Landing";
import WhatWeOffer from "../components/What_we_offer/WhatWeOffer";
import Intro from "../components/Intro/Intro";

//transition value
const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <App>
        <SmoothScroll>
          <NavigationBar />
          <Landing />
          <WhatWeOffer />
          <Intro />
        </SmoothScroll>
      </App>
    </>
  );
};

export default IndexPage;
