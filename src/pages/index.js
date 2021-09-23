import React, { useState, useEffect } from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import { App } from "../styles/indexStyle";
import SmoothScroll from "../components/smoothScroll";
import NavigationBar from "../components/Navigation/navigationBar";
import { Landing } from "../components/Landing/Landing";
import WhatWeOffer from "../components/What_we_offer/WhatWeOffer";
import Intro from "../components/Intro/Intro";
import Faq from "../components/Faq/Faq";
import Discord from "../components/Discord/Discord";
import Legals from "../components/Legals/Legals";
import Modal from "../components/modal/Modal";

//transition value
const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const isBrowser = typeof window !== "undefined";

// markup
const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState(0);

  const showModal = () => setIsActive(true);
  const hideModal = () => setIsActive(false);

  useEffect(() => {
    const body = document.body;
    const offsetY = window.scrollY;

    const style = body.style;
    if (isActive) {
      setOffset(offsetY);
      body.setAttribute(
        "style",
        `position: fixed; top: -${offsetY}px; left:0; right: 0`
      );
    }
    if (!isActive) {
      body.setAttribute("style", "");
      window.scrollTo(0, offsetY);
    }
  }, [isActive]);

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <>
        <SmoothScroll status={isActive}>
          <NavigationBar click={showModal} />
          <Landing />
          <WhatWeOffer />
          <Intro />
          <Faq />
          <Discord />
          <Legals />
        </SmoothScroll>
        {isActive ? <Modal hide={hideModal} /> : <></>}
      </>
    </>
  );
};

export default IndexPage;
