import React, { useState, useEffect } from "react";

//lodable
import loadable from "@loadable/component";

//Context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

//components
import Seo from "../components/seo";
import Layout from "../components/layout";

const NavigationBar = loadable(() =>
  import("../components/Navigation/navigationBar")
);
const Landing = loadable(() => import("../components/Landing/Landing"));
const WhatWeOffer = loadable(() =>
  import("../components/What_we_offer/WhatWeOffer")
);
const Intro = loadable(() => import("../components/Intro/Intro"));
const Faq = loadable(() => import("../components/Faq/Faq"));
const Discord = loadable(() => import("../components/Discord/Discord"));
const Footer = loadable(() => import("../components/footer/footer"));

// markup
const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState(0);

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
  }, [isActive, offset]);

  return (
    <>
      <NavigationBar click={showModal} onCursor={onCursor} />
      <Layout isActive={isActive} hideModal={hideModal}>
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
        <Landing onCursor={onCursor} showModal={showModal} />
        <Intro showModal={showModal} onCursor={onCursor} />
        <WhatWeOffer showModal={showModal} onCursor={onCursor} />
        <Faq onCursor={onCursor} />
        <Discord onCursor={onCursor} />
        <Footer onCursor={onCursor} />
      </Layout>
    </>
  );
};

export default IndexPage;
