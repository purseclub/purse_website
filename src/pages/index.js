import React, { useState, useEffect } from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import SmoothScroll from "../components/smoothScroll";
import NavigationBar from "../components/Navigation/navigationBar";
import { Landing } from "../components/Landing/Landing";
import WhatWeOffer from "../components/What_we_offer/WhatWeOffer";
import Intro from "../components/Intro/Intro";
import Faq from "../components/Faq/Faq";
import Discord from "../components/Discord/Discord";
import Legals from "../components/Legals/Legals";
import Modal from "../components/modal/Modal";
import { Helmet } from "react-helmet";
import CustomCursor from "../components/customCursor/customCursor";

//Context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import Seo from "../components/seo";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState(0);
  //   const [width, setWidth] = useState(null);
  //   const { width } = useDeviceSize();

  const dispatch = useGlobalDispatchContext();
  const state = useGlobalStateContext();

  const showModal = () => setIsActive(true);
  const hideModal = () => setIsActive(false);

  const onCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    });
  };

  useEffect(() => {
    const body = document.body;
    const offsetY = window.scrollY;

    if (isActive) {
      setOffset(offsetY);
      body.setAttribute(
        "style",
        `position: fixed; top: -${offset}px; left:0; right: 0`
      );
    }
    if (!isActive) {
      body.setAttribute("style", "");
      window.scrollTo(0, offset);
    }

    // window.addEventListener("resize", () => setWidth(window.innerWidth));

    // return () =>
    //   window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [isActive, offset]);

  return (
    <>
      {/* <GlobalFont />
      <GlobalStyle />
      <CustomCursor />
        <Helmet>
          <title>The Purse Club</title>
        </Helmet>
        <Seo
          title={"The Purse Club"}
          description="Modern way of storing and managing you card in wallet aka purse club"
          keywords={[
            "purse",
            "wallet",
            "card",
            "management",
            "storing",
            "modern",
          ]}
        />
        <SmoothScroll status={isActive}>
          <NavigationBar click={showModal} onCursor={onCursor} />
          <Landing onCursor={onCursor} showModal={showModal} />
          <WhatWeOffer showModal={showModal} onCursor={onCursor} />
          <Intro showModal={showModal} onCursor={onCursor} />
          <Faq />
          <Discord />
          <Legals onCursor={onCursor} />
        </SmoothScroll>
        {isActive ? <Modal hide={hideModal} /> : <></>} */}

      <Layout>
        <Seo
          title={"The Purse Club"}
          description="Modern way of storing and managing you card in wallet aka purse club"
          keywords={[
            "purse",
            "wallet",
            "card",
            "management",
            "storing",
            "modern",
          ]}
        />
        <NavigationBar click={showModal} onCursor={onCursor} />
        <Landing onCursor={onCursor} showModal={showModal} />
        <WhatWeOffer showModal={showModal} onCursor={onCursor} />
        <Intro showModal={showModal} onCursor={onCursor} />
        <Faq />
        <Discord />
        <Legals onCursor={onCursor} />
      </Layout>
    </>
  );
};

export default IndexPage;
