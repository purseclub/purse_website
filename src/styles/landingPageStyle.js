import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageContainer = styled(motion.div)`
  margin-top: -40px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 375px) {
    margin-top: -80px;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled(motion.div)`
  z-index: 8;
  margin-top: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: var(--mobile-margin);

  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    padding: var(--tablet-margin);
    height: 80%;
    width: 78%;
    flex-direction: row;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  flex: 3;
`;

const TextBox = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

const NumBox = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    padding-bottom: 8px;
  }
`;

const Num = styled.h1`
  font-family: var(--font-family-main-SemiBold);
  color: var(--lightblue);
  -webkit-text-fill-color: var(--lightBlue);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--white);

  font-size: 72px;
  line-height: 63px;
  letter-spacing: -3.6px;

  @media only screen and (min-width: 768px) {
    font-size: 136px;
    line-height: 106px;
    letter-spacing: -5.44px;
  }
`;

const Title = styled.div`
  overflow: hidden;
  padding-bottom: 5px;
  /* height: 20vh; */
`;

const PBox = styled.div`
  margin-top: 16px;
  overflow: hidden;
  width: 65%;
`;

const H1 = styled(motion.h1)`
  font-family: var(--font-family-main-SemiBold);
  font-size: 72px;
  letter-spacing: -3.6px;
  line-height: 63px;
  color: #9db1ce;

  @media only screen and (min-width: 375px) {
    font-size: 32px;
    line-height: 34px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 136px;
    line-height: 106px;
    letter-spacing: -5.44px;
  }
`;

const P = styled.p`
  font-family: var(--font-family-main-Regular);
  color: var(--white);
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.7px;

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

const ButtonContainer = styled.div`
  height: 36px;
  margin-bottom: 48px;
  margin-right: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (min-width: 375px) {
    height: 44px;
    width: 170px;
  }
  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 260px;
  }
`;

const PremiumButton = styled(motion.h3)`
  border: none;
  font-family: var(--font-family-main-SemiBold);
  letter-spacing: 0px;
  line-height: 36px;
  font-size: 12px;
  background-color: transparent;
  color: var(--white);
  text-decoration-line: underline;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 40px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 52px;
  }
`;

export {
  MasterContainer,
  ContentBox,
  Left,
  Right,
  ImageContainer,
  CardImage,
  TextBox,
  Title,
  P,
  PBox,
  Num,
  NumBox,
  H1,
  Highlight,
  ButtonContainer,
  PremiumButton,
};
