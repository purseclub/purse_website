import { motion } from "framer-motion";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  /* height: 80vh; */
  /* background-color: red; */
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 53em) {
    flex-direction: row-reverse;
  }
`;

export const IllustrationWrapper = styled(motion.div)`
  width: 100%;
`;
export const IllustrationSvg = styled(motion.svg)`
  height: 100%;
  width: 100%;
`;

export const DotContainer = styled(motion.div)`
  width: 100%;
  margin: 0 auto;

  & > span {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    font-family: var(--font-family-main);
    color: var(--white);
    font-size: clamp(18px, 2vw, 32px);
  }
`;

export const IntroHeading = styled(motion.h1)`
  width: 100%;
  font-family: var(--font-family-main);
  font-size: 10vw;
  letter-spacing: -0.02em;
  line-height: 0.85;
  color: var(--white);
  //text-align: center;
  opacity: 0;
  /* margin: 0 auto; */

  @media all and (min-width: 991px) {
    /* line-height: 7rem; */
  }
`;
