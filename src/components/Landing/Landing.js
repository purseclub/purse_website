import { Link } from "gatsby";
import React from "react";
import {
  Arrow,
  ArrowContainer,
  Button,
  LandingWrapper,
  Para,
  ParaContainer,
  Title,
  TitleContainer,
  TitleTop,
  TitleTopWrapper,
  TitleWrapper,
} from "../../styles/landing";

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
        <Para variants={paraMotion}>
          Experience the app right in the browser. Download when you feel like
          downloading the app.
        </Para>
      </ParaContainer>
      <Link to="/experience/experienceHome">
        <Button variants={paraMotion}>
          <Para>Experience Now</Para>
          <ArrowContainer>
            <Arrow
              viewBox="0 0 48 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22556 8.26847H0.835938V7.48922H37.67C37.3163 7.41989 36.9611 7.34539 36.6055 7.26544C32.3578 6.31061 27.9827 4.56679 25.0993 1.52323L25.665 0.987305C28.3922 3.866 32.5888 5.56384 36.7764 6.50517C39.4503 7.10623 42.0973 7.3937 44.3123 7.48922H47.5906L47.5911 7.50998C47.7317 7.51505 47.8681 7.52101 48.0002 7.52778L47.9802 8.30652H44.702C42.4869 8.40204 39.8399 8.6895 37.166 9.29057C32.9784 10.2319 28.7818 11.9297 26.0546 14.8084L25.4889 14.2725C28.3723 11.2289 32.7474 9.48513 36.9951 8.53029C37.3507 8.45035 37.7059 8.37585 38.0596 8.30652H1.22556V8.26847Z"
                fill="black"
              />
            </Arrow>
          </ArrowContainer>
        </Button>
      </Link>
    </LandingWrapper>
  );
};
