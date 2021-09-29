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

const transiton = { duration: 0.8, ease: [0.5, 1, 0.89, 1] };

const textMotionVariant = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textTopMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transiton,
      duration: 1,
    },
  },
};

const textMotion = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transiton,
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
      duration: 2,
    },
  },
};

export const Landing = ({ onCursor, showModal }) => {
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
        buttonText="Experience Now"
        path="/experience/experienceHome"
        variants={paraMotion}
      />
    </LandingWrapper>
  );
};
