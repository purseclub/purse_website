import { motion } from "framer-motion";
import styled from "styled-components";

const MasterContainer = styled(motion.section)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--black);
  position: relative;
  z-index: 9;
`;

const ContentBox = styled(motion.div)`
  margin-top: 46vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--mobile-margin);
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; */
`;

const BannerBox = styled.div`
  width: 100%;
  position: absolute;
  top: 30vh;
  left: -30px;
`;

const Title = styled.div`
  overflow: hidden;
  /* height: 20vh; */
`;

const H1 = styled(motion.h1)`
  font-family: var(--font-family-secondary);
  font-size: 20px;
  letter-spacing: -6%;
  line-height: 26px;
  font-weight: 400;
  color: var(--white);
`;

const Highlight = styled(motion.div)`
  display: inline-block;
  width: 75px;
  background-color: var(--white);
  color: var(--black);
`;

// const Second = styled(motion.span)`
//   overflow: hidden;
//   margin-top: -8px;
// `;

// const Letter = styled(motion.span)`
//   display: inline-block;
//   font-family: "Causten", sans-serif;
//   font-size: 28px;
//   letter-spacing: -1.12px;
//   font-weight: 700;
// `;

// const Card = styled(motion.div)`
//   padding-top: 4vh;
//   display: block;
// `;

// const Body = styled(motion.div)`
//   width: 100%;
//   margin-top: 10vh;
// `;

// const P = styled.p`
//   display: inline-block;
//   font-family: "Causten", sans-serif;
//   font-size: 28px;
//   letter-spacing: -0.28px;
//   line-height: 30px;
//   font-weight: 400;

//   @media only screen and (max-width: 320px) {
//     font-size: 28px;
//     letter-spacing: -0.28px;
//     line-height: 28px;
//   }
// `;

const ButtonContainer = styled.div`
  height: 40px;
  margin-top: 24px;
`;

const PremiumButton = styled(motion.button)`
  height: 100%;
  width: 100%;
  border: none;
  font-family: var(--font-family-main);
  font-weight: 400;
  letter-spacing: 0px;
  font-size: 14px;
  padding: 0 32px;
  background-color: var(--white);
  text-align: center;
  color: var(--black);
`;

export {
  MasterContainer,
  ContentBox,
  BannerBox,
  Title,
  H1,
  Highlight,
  ButtonContainer,
  PremiumButton,
};
