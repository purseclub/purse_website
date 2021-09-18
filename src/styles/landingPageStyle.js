import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  width: 80%;
  height: 94%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;

  @media all and (min-width: 425px) {
    max-height: 70%;
  }
  @media all and (min-width: 1024px) {
    max-width: 68%;
  }
`;

const ContentBox = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-basis: 100%;
  /* padding: var(--mobile-margin); */

  @media all and (min-width: 425px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 2;
  flex-basis: 100%;
`;

const TextBox = styled.div`
  overflow: hidden;
  flex: 1;

  @media all and (min-width: 1024px) {
    padding-bottom: 8rem;
  }
`;

const NumBox = styled(motion.div)`
  flex: 1;
  padding-top: 7.8rem;
  overflow: hidden;
  align-items: center;

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
    font-size: 5rem;
    line-height: 5rem;
  }
  @media all and (min-width: 48rem) {
    font-size: 8rem;
    line-height: 8rem;
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
  flex: 2;
`;

const ButtonContainer = styled(motion.div)`
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media all and (min-width: 425px) {
    height: 3.25rem;
    width: 13rem;
    margin-bottom: 4.5rem;
    margin-left: 2rem;
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
