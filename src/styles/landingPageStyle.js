import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--mobile-margin);
  z-index: 10;

  @media only screen and (min-width: 768px) {
    padding: var(--tablet-margin);
  }
  @media only screen and (min-width: 1024px) {
    padding: var(--desktop-margin);
  }
`;

const ContentBox = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: var(--mobile-margin); */

  @media all and (min-width: 768px) and (orientation: portrait) {
    padding-top: 80px;
    padding-bottom: 80px;
    /* padding: var(--tablet-margin); */
    flex-direction: row;
    /* height: 80%; */
  }

  @media all and (min-width: 768px) and (orientation: landscape) {
    padding: 0;
    margin-top: 0px;
    /* padding: var(--tablet-margin); */
    flex-direction: row;
    /* height: 80%; */
  }

  @media all and (min-width: 1440px) {
    padding: 24px 85px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  flex: 6;

  @media only screen and (min-width: 360px) {
    flex: 5;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 0px;
  }

  @media only screen and (min-width: 1024px) {
    padding-left: 24px;
  }
`;

const TextBox = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 360px) {
    /* margin-bottom: 14px; */
  }
  @media only screen and (min-width: 768px) {
    padding-bottom: 0px;
  }

  @media only screen and (min-width: 1024px) {
    padding-bottom: 48px;
  }
`;

const NumBox = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  padding-top: 64px;
  flex: 1;

  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 24px;
  }
`;

const Num = styled.h1`
  font-family: var(--font-family-secondary-bold);
  color: var(--lightBlue);
  -webkit-text-fill-color: var(--lightBlue);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--white);

  font-size: 48px;
  line-height: 48px;
  /* letter-spacing: -3.6px; */

  @media only screen and (min-width: 360px) {
    font-size: 64px;
    line-height: 63px;
    /* letter-spacing: -3.6px; */
  }

  @media only screen and (min-width: 768px) {
    font-size: 116px;
    line-height: 116px;
    /* letter-spacing: -5.44px; */
  }

  @media only screen and (min-width: 1024px) {
    font-size: 136px;
    line-height: 136px;
    /* letter-spacing: -5.44px; */
  }
`;

const Title = styled(motion.div)`
  overflow: hidden;
  /* height: 20vh; */
`;

const PBox = styled.div`
  overflow: hidden;
  width: 65%;
  padding-bottom: 8px;

  @media only screen and (min-width: 360px) {
    /* width: 80%; */
  }

  @media only screen and (min-width: 768px) {
    /* margin-top: 16px; */
  }
`;

const TitleTop = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TitleBottom = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: -12px;
`;

const TitleContainer = styled.p`
  display: inline-block;
  overflow: hidden;
  margin-left: ${(props) => props.left}px;
`;

const TitleParagraph = styled(motion.span)`
  font-family: var(--font-family-secondary-bold);
  display: inline-block;
  font-size: 52px;
  letter-spacing: 0px;
  line-height: 52px;
  color: var(--white);

  @media only screen and (min-width: 360px) {
    font-size: 64px;
    line-height: 63px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 116px;
    line-height: 116px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 136px;
    line-height: 136px;
  }
`;

const P = styled(motion.p)`
  font-family: var(--font-family-main-SemiBold);
  color: var(--white);
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1px;

  @media only screen and (min-width: 360px) {
    font-size: 14px;
    line-height: 14px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0px;
  }
`;

const Highlight = styled(motion.div)`
  display: inline-block;
  width: 75px;
  background-color: var(--white);
  color: var(--black);
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
`;

const ButtonContainer = styled(motion.div)`
  height: 36px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 360px) {
    height: 44px;
    width: 170px;
  }
  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 260px;
  }
  @media only screen and (min-width: 1024px) {
    height: 60px;
    width: 260px;
    margin-bottom: 48px;
    margin-right: 60px;
  }
`;

const PremiumButton = styled(motion.h3)`
  border: none;
  font-family: var(--font-family-main-SemiBold);
  letter-spacing: 0.2px;
  line-height: 36px;
  font-size: 14px;
  background-color: transparent;
  color: var(--white);
  text-decoration-line: underline;

  @media only screen and (min-width: 360px) {
    font-size: 18px;
    line-height: 44px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 60px;
  }
`;

export {
  MasterContainer,
  ContentBox,
  Left,
  Right,
  TextBox,
  Title,
  TitleContainer,
  TitleTop,
  TitleBottom,
  P,
  PBox,
  Num,
  NumBox,
  TitleParagraph,
  Highlight,
  ButtonContainer,
  PremiumButton,
};
