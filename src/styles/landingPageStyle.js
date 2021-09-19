import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  height: 100%;
  width: 80%;
  overflow: hidden;
  position: relative;
  z-index: 9;
  margin: 0 auto;

  /* @media all and (min-width: 425px) {
    max-height: 70%;
  }
  @media all and (min-width: 1024px) {
    max-width: 68%;
  } */
`;

const ContentBox = styled(motion.div)`
  min-width: 100%;
  height: 90%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-basis: 100%;
  /* padding: var(--mobile-margin); */

  @media all and (min-width: 64rem) {
    flex-direction: row;
    min-width: 80%;
    align-items: center;
    max-height: 50%;
  }
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1 1 90%;
  /* gap: 16rem; */
  /* flex-basis: 100%; */
`;

const TextBox = styled.div`
  overflow: hidden;
  /* flex: 1; */
  /* margin-bottom: -6rem; */
  /* flex-basis: 100%; */
  margin-bottom: -3.6rem;

  @media all and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const NumBox = styled(motion.div)`
  /* flex: 4; */
  /* padding-top: 2.8rem; */
  overflow: hidden;
  align-items: center;
  /* flex-basis: 100%; */

  @media all and (min-width: 425px) {
    padding-top: 0;
  }
`;

const Num = styled.h1`
  font-family: var(--font-family-secondary-bold);
  color: var(--lightBlue);
  -webkit-text-fill-color: var(--lightBlue);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--white);

  font-size: 3rem;
  line-height: 3rem;
  /* letter-spacing: -3.6px; */

  @media all and (min-width: 22.5rem) {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media all and (min-width: 48rem) {
    font-size: 6rem;
    line-height: 6rem;
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
  font-size: 3.25rem;
  letter-spacing: 0px;
  line-height: 3.25rem;
  color: var(--white);

  @media only screen and (min-width: 360px) {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media only screen and (min-width: 425px) {
    font-size: 5.25rem;
    line-height: 5.25rem;
  }
  @media all and (min-width: 768px) {
    font-size: 7.25rem;
    line-height: 7.25rem;
  }
  /* @media only screen and (min-width: 1024px) {
    font-size: 8.5rem;
    line-height: 8.5rem;
  } */
`;

const P = styled(motion.p)`
  font-family: var(--font-family-main-SemiBold);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.1px;

  @media only screen and (min-width: 360px) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: 0px;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex: 1 1 10%;
  /* flex-basis: 100%; */
`;

const ButtonContainer = styled(motion.div)`
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media all and (min-width: 425px) {
    width: 12rem;
  }

  @media all and (min-width: 1024px) {
    margin-bottom: max(1.7rem, 25%);
    margin-right: 4.5rem;
  }
`;

const PremiumButton = styled(motion.h3)`
  border: none;
  font-family: var(--font-family-main-SemiBold);
  letter-spacing: 0.2px;
  line-height: 2.25rem;
  font-size: 0.875rem;
  background-color: transparent;
  color: var(--white);
  text-decoration-line: underline;

  @media only screen and (min-width: 360px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
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
  ButtonContainer,
  PremiumButton,
};
