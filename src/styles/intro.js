import { motion } from "framer-motion";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  width: 100%;
  /* height: 80vh; */
  /* background-color: red; */
`;

export const IntroContainer = styled.div`
  width: 100%;
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
    font-size: clamp(1em, 4vw, 2em);
  }
`;

export const IntroHeading = styled(motion.h2)`
  width: 100%;
  font-family: var(--font-family-main);
  font-size: 11vw;
  letter-spacing: 0.01em;
  line-height: 11vw;
  color: var(--black);
  font-weight: 400;
  text-align: center;
  opacity: 0;
  /* margin: 0 auto; */

  @media all and (min-width: 991px) {
    /* line-height: 7rem; */
  }
`;
