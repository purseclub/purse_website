import React from "react";

import NavigationBar from "../components/navigationBar";
import Banner from "../components/banner";
import CardMockup from "../images/card-mockups.png";
import {
  MasterContainer,
  ContentBox,
  Title,
  H1,
  Highlight,
  PremiumButton,
  ButtonContainer,
  BannerBox,
  ImageContainer,
  CardImage,
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

const transiton = { duration: 3.4, ease: [0.6, 0.01, -0.05, 0.9] };

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transiton,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.0,
      ...transiton,
    },
  },
};

const LandingPage = ({ opacity, reference }) => {
  return (
    <MasterContainer
      variants={containerVariants}
      initial="hidden"
      animate="animate"
    >
      <NavigationBar />
      {/* <Banner
        position="downwards"
        title={"Throw your purse away Throw your purse away"}
      /> */}
      <ImageContainer variants={imageVariants}>
        <CardImage src={CardMockup} alt="card-mockup" />
      </ImageContainer>
      <ContentBox variants={contentVariants}>
        <Title>
          <H1>Modern way of storing and managing your cards.</H1>
        </Title>
        <ButtonContainer>
          <PremiumButton>Experience Here</PremiumButton>
        </ButtonContainer>
      </ContentBox>
    </MasterContainer>
  );
};

export default LandingPage;
