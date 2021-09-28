import React from "react";
import {
  LandingContainer,
  LandingWrapper,
  Para,
  ParaContainer,
  Strong,
  Title,
  TitleContainer,
  TitleTop,
  TitleTopContainer,
  TitleTopWrapper,
  TitleWrapper,
} from "../../styles/landing";
import CircleButton from "../CircleButton/CircleButton";

const transiton = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const ButtonVariant = {
  initial: {
    backgroundColor: "var(--blue)",
    transform: "rotate(-30deg)",
  },
  animate: {
    backgroundColor: "var(--darkGreen)",
    transform: "rotate(0deg)",
    transition: {
      ...transiton,
    },
  },
};

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
        <Para variants={paraMotion}>
          Experience the app right in the browser. Download when you feel like
          downloading the app.
        </Para>
      </ParaContainer>
      {/* <CircleButton
        onCursor={onCursor}
        textColor={"var(--white)"}
        arrowStrokeColor={"var(--white)"}
        buttonText={"Experience the app"}
        variants={ButtonVariant}
        size={"13rem"}
        path={"/experience/experienceHome"}
      /> */}
    </LandingWrapper>
  );
};
