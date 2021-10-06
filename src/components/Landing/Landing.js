import React from "react";
import {
  LandingContainer,
  LandingWrapper,
  Para,
  ParaContainer,
  Title,
  TitleContainer,
  TitleTop,
  TitleTopWrapper,
  TitleWrapper,
} from "../../styles/landing";
import MinimalButton from "../button";

const transiton = { duration: 0.8, ease: "easeIn" };

const textMotionVariant = {
  animate: {
    transition: {
      //   delayChildren: 0.8,
      //   staggerChildren: 0.8,
    },
  },
};

const textTopMotion = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    opacity: 1,
    scale: 0.85,
    transition: {
      delay: 0.6,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const textMotion = {
  initial: {
    opacity: 0,
    // scale: 0.85,
  },
  animate: {
    opacity: 1,
    // scale: 1,
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: "easeIn",
    },
  },
};

const paraMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transiton,
      delay: 3.5,
      // duration: 2,
    },
  },
};

const Landing = ({ onCursor, showModal }) => {
  return (
    <LandingWrapper
      variants={textMotionVariant}
      initial="initial"
      animate="animate"
    >
      <LandingContainer>
        <TitleContainer>
          {/* <TitleTopWrapper>
            <TitleTop variants={textTopMotion}> welcome to </TitleTop>
          </TitleTopWrapper> */}
          <TitleWrapper>
            <Title variants={textMotion}>a digital</Title>
          </TitleWrapper>
          <TitleWrapper>
            <Title variants={textMotion}>storage.</Title>
          </TitleWrapper>
          {/* <TitleWrapper>
            <Title variants={textMotion}>your f***ing cards.</Title>
          </TitleWrapper> */}
        </TitleContainer>
        {/* <ParaContainer>
          <Para variants={paraMotion} align="center">
            Experience the app right in the browser. Download when you feel like
            downloading the app.
          </Para>
        </ParaContainer> */}
        <MinimalButton
          variants={paraMotion}
          buttonText="Experience Now"
          path="/experience/experienceHome"
          variants={paraMotion}
          onCursor={onCursor}
        />
      </LandingContainer>
    </LandingWrapper>
  );
};

export default Landing;
