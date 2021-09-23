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
import Modal from "../components/modal/modal";

//transition value
const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// markup
const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);

  const showModal = () => setIsActive(true);
  const hideModal = () => setIsActive(false);

  const body = document.body;
  const style = body.style;

  useEffect(() => {
    if (isActive) {
      // ref.current.style.display = "block";
      style.overflow = "hidden";
    }
    if (!isActive) {
      style.overflow = "visible";
      // ref.current.style.display = "none";
    }
  }, [isActive, style]);

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
