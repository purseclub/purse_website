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

const titles = [
  "Throw your purse away Throw your purse away",
  "REWARDS REWARDS REWARDS",
];

// markup
const IndexPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bannerTitle, setBannerTitle] = useState(titles[0]);
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [75, 90]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 74]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 26]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityRev = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const landingRef = useRef(null);
  const infoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  // useEffect(() => {
  //   scrollYProgress.onChange((x) => {
  //     if (x == 1) {
  //       setScrolled(true);
  //       setBannerTitle(titles[1]);
  //     }
  //     if (x === 0) {
  //       setScrolled(false);
  //       setBannerTitle(titles[0]);
  //     }
  //   });

  //   if (scrolled) {
  //     landingRef.current.style.visibility = "hidden";
  //     infoRef.current.style.visibility = "visible";
  //   } else {
  //     landingRef.current.style.visibility = "visible";
  //     infoRef.current.style.visibility = "hidden";
  //   }
  // }, [scrollYProgress, scrolled]);

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <App>
        <>
          <LandingPage opacity={opacity} reference={landingRef} />
          {/* <InfoPage reference={infoRef} opacity={opacityRev} /> */}
          {isMobile ? (
            <MobileImgContainer>
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
