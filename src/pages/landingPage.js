import React from "react";

import Banner from "../components/banner";
import CardMockup from "../images/card-mockups.png";
import {
  MasterContainer,
  ContentBox,
  Title,
  Highlight,
  PremiumButton,
  ButtonContainer,
  BannerBox,
  ImageContainer,
  CardImage,
  PBox,
  P,
  TextBox,
  NumBox,
  Num,
  Left,
  Right,
  TitleParagraph,
  TitleContainer,
  TitleTop,
  TitleBottom,
} from "../styles/landingPageStyle";
import ArrowSvg from "../components/arrow";
import { useState } from "react";
import useWindowSize from "../components/useWindowSize";
import { useEffect } from "react";

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

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const numParaButtonVariant = {
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

const contentVariants = {
  hidden: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      ...transiton,
    },
  },
};

const LandingPage = ({ reference }) => {
  return (
    <MasterContainer
      variants={containerVariants}
      initial="hidden"
      animate="animate"
    >
      <ContentBox>
        <Left>
          <NumBox variants={numParaButtonVariant}>
            <Num>01</Num>
          </NumBox>
          <TextBox>
            <Title>
              <TitleTop>
                <TitleContainer>
                  <TitleParagraph variants={contentVariants}>F</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>u</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>t</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>u</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>r</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>e</TitleParagraph>
                </TitleContainer>
                <TitleContainer left={16}>
                  <TitleParagraph variants={contentVariants}>i</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>s</TitleParagraph>
                </TitleContainer>
              </TitleTop>
              <TitleBottom>
                <TitleContainer>
                  <TitleParagraph variants={contentVariants}>h</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>e</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>r</TitleParagraph>
                  <TitleParagraph variants={contentVariants}>e.</TitleParagraph>
                </TitleContainer>
              </TitleBottom>
            </Title>
            <PBox>
              <P variants={numParaButtonVariant}>
                Modern way of storing and managing your cards.
              </P>
            </PBox>
          </TextBox>
        </Left>
        <Right>
          <ButtonContainer variants={numParaButtonVariant}>
            <PremiumButton>Experience Now</PremiumButton>
            <ArrowSvg />
          </ButtonContainer>
        </Right>
      </ContentBox>
    </MasterContainer>
  );
};

export default LandingPage;
