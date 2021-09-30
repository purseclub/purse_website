import React from "react";
import {
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
      <TitleContainer>
        <TitleTopWrapper>
          <TitleTop variants={textTopMotion}> PRESENTING </TitleTop>
        </TitleTopWrapper>
        <TitleWrapper>
          <Title variants={textMotion}>Modern way of storing</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title variants={textMotion}>and managing your</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title variants={textMotion}>cards.</Title>
        </TitleWrapper>
      </TitleContainer>
      <ParaContainer>
        <Para variants={paraMotion} align="center">
          Experience the app right in the browser. Download when you feel like
          downloading the app.
        </Para>
      </ParaContainer>
      <MinimalButton
        variants={paraMotion}
        buttonText="Experience Now"
        path="/experience/experienceHome"
        variants={paraMotion}
        onCursor={onCursor}
      />
    </LandingWrapper>
  );
};

export default Landing;
