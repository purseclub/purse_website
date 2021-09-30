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
import { motion, useTransform, useViewportScroll } from "framer-motion";

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
const Legals = loadable(() => import("../components/Legals/Legals"));

// markup
const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const colorVal = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#EAF2EF", "#F5E4D0", "#FC9E4F"]
  );

  console.log("hello");

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
    <motion.div
      style={{
        backgroundColor: colorVal,
      }}
    >
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

        <NavigationBar click={showModal} onCursor={onCursor} />
        <Landing onCursor={onCursor} showModal={showModal} />
        <Intro showModal={showModal} onCursor={onCursor} />
        <WhatWeOffer showModal={showModal} onCursor={onCursor} />
        <Faq onCursor={onCursor} />
        <Discord onCursor={onCursor} />
        <Legals onCursor={onCursor} />
      </Layout>
    </motion.div>
  );
};

export default IndexPage;
