import { useTransform, useViewportScroll } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import GlobalFont from "../fonts/font";
import GlobalStyle from "../styles/globalStyle";
import {
  App,
  AppBackground,
  AppContainer,
  AppSection,
} from "../styles/indexStyle";
import InfoPage from "./infoPage";
import LandingPage from "./landingPage";
import Banner from "../components/banner";
import SmoothScroll from "../components/smoothScroll";

// markup
const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [12, 90]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 650]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 26]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {}, [scrollYProgress]);

  const landingRef = useRef(null);
  const infoRef = useRef(null);

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <App>
        <SmoothScroll>
          <Banner position="upwards" rotate={rotate} y={y} x={x} />
          <LandingPage opacity={opacity} y={y} />
          <LandingPage landingRef={landingRef} />
        </SmoothScroll>
      </App>
    </>
  );
};

export default IndexPage;
