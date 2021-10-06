import { motion } from "framer-motion";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 53em) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

export const IllustrationWrapper = styled.div`
  width: 100%;
  flex: 1 1 50%;
`;
export const IllustrationSvg = styled.svg`
  height: 100%;
  width: 100%;
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
