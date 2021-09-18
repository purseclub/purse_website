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
  MobileImg,
  MobileImgContainer,
} from "../styles/indexStyle";
import InfoPage from "./infoPage";
import LandingPage from "./landingPage";
import Banner from "../components/banner";
import SmoothScroll from "../components/smoothScroll";
import { useState } from "react";
import Card from "../components/card";
import useWindowSize from "../components/useWindowSize";
import conniCard from "../images/card-mockups.png";
import NavigationBar from "../components/navigationBar";

const titles = [
  "Throw your purse away Throw your purse away",
  "REWARDS REWARDS REWARDS",
];

//transition value
const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

//top variants
const ImageVariant = {
  hidden: {
    width: "0%",
    originX: 0.5,
  },
  animate: {
    width: "70%",
    transition: {
      ...transiton,
    },
  },
};

// markup
const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll();

  const landingRef = useRef(null);
  const infoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <App>
        <>
          <NavigationBar />
          <LandingPage reference={landingRef} />
          {/* <InfoPage reference={infoRef} opacity={opacityRev} /> */}
          {isMobile ? (
            <MobileImgContainer
              variants={ImageVariant}
              initial="hidden"
              animate="animate"
            >
              <MobileImg src={conniCard} alt="conni-card" />
            </MobileImgContainer>
          ) : (
            <Card />
          )}
        </>
      </App>
    </>
  );
};

export default IndexPage;
