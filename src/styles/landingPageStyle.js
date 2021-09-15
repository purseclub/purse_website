import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--black);
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--mobile-margin);

  @media only screen and (min-width: 768px) {
    margin-top: 80px;
    padding: var(--tablet-margin);
  }
`;

const BannerBox = styled.div`
  width: 100%;
  position: absolute;
  top: 30vh;
  left: -30px;
`;

const Title = styled.div`
  overflow: hidden;
  padding-bottom: 5px;
  /* height: 20vh; */
`;

const H1 = styled(motion.h1)`
  font-family: var(--font-family-main-Bold);
  font-size: 28px;
  letter-spacing: -0.56px;
  line-height: 27px;
  color: var(--white);
  text-align: center;

  @media only screen and (min-width: 375px) {
    font-size: 32px;
    line-height: 34px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 62px;
    letter-spacing: -1.28px;
  }
`;

const Highlight = styled(motion.div)`
  display: inline-block;
  width: 75px;
  background-color: var(--white);
  color: var(--black);
`;

const ButtonContainer = styled.div`
  height: 36px;
  width: 130px;
  margin-top: 24px;

  @media only screen and (min-width: 375px) {
    height: 44px;
    width: 170px;
  }
  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 260px;
  }
`;

const PremiumButton = styled(motion.button)`
  height: 100%;
  width: 100%;
  border: none;
  font-family: var(--font-family-main-SemiBold);
  letter-spacing: 0px;
  line-height: 36px;
  font-size: 12px;
  padding: 0 16px;
  background-color: var(--white);
  text-align: center;
  color: var(--black);

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
  ImageContainer,
  CardImage,
  BannerBox,
  Title,
  H1,
  Highlight,
  ButtonContainer,
  PremiumButton,
};
