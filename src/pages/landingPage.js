import React from "react";

import NavigationBar from "../components/navigationBar";
import Banner from "../components/banner";
import {
  MasterContainer,
  ContentBox,
  Title,
  H1,
  Highlight,
  PremiumButton,
  ButtonContainer,
  BannerBox,
} from "../styles/landingPageStyle";

// const datas = [
//   {
//     zIndex: 8,
//     title: "INTRO",
//     num: 1,
//     bgColor: "var(--beige)",
//     textColor: "var(--green)",
//     borderColor: "#fef2e3",
//     yOffSet: 170,
//     transformInitialValue: 0,
//     transformFinalValue: 170,
//     shadowOffset: 370,
//   },
//   {
//     zIndex: 9,
//     title: "REWARDS",
//     num: 2,
//     bgColor: "var(--green)",
//     textColor: "var(--beige)",
//     borderColor: "#819483",
//     yOffSet: 340,
//     transformInitialValue: 0,
//     transformFinalValue: 170,
//     shadowOffset: 370,
//   },
//   {
//     zIndex: 10,
//     title: "CONNI",
//     num: 3,
//     bgColor: "var(--green)",
//     textColor: "var(--beige)",
//     borderColor: "#819483",
//     yOffSet: 510,
//     transformInitialValue: 0,
//     transformFinalValue: 170,
//     shadowOffset: 370,
//   },
// ];

const transiton = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const textVariants = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.4,
      ...transiton,
    },
  },
};

const LandingPage = ({ opacity, y }) => {
  return (
    <MasterContainer
      style={{
        y: y,
      }}
    >
      <NavigationBar />
      <Banner position="downwards" />
      <ContentBox
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.6,
            ...transiton,
          },
        }}
        style={{
          opacity: opacity,
        }}
      >
        <Title>
          <H1>
            <Highlight
              initial={{
                width: "0px",
              }}
              animate={{
                width: "75px",
                transition: {
                  delay: 0.6,
                  ...transiton,
                },
              }}
            >
              {" "}
              Modern
            </Highlight>{" "}
            way of
            <br /> storing and <br />
            managing your cards.
          </H1>
        </Title>
        <ButtonContainer>
          <PremiumButton>Experience Here</PremiumButton>
        </ButtonContainer>
      </ContentBox>
    </MasterContainer>
  );
};

export default LandingPage;
