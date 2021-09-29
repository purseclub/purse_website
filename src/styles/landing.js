import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingWrapper = styled(motion.section)`
  width: 100%;
  margin-top: 10vh;

  @media all and (min-width: 768px) {
    margin-top: 5vh;
  }
`;

export const LandingContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const TitleContainer = styled.div``;

export const TitleTopWrapper = styled.div`
  /* overflow: hidden; */
  margin-bottom: 1em;
  padding-top: 0.5em;
`;

export const TitleTop = styled(motion.h2)`
  font-family: var(--font-family-main);
  font-size: 9vw;
  line-height: 9vw;
  letter-spacing: -0.01em;
  color: var(--gray);
  font-weight: 400;
  text-align: center;

  @media all and (min-width: 768px) {
    font-size: 5vw;
    line-height: 5vw;
  }
`;

export const TitleWrapper = styled.div`
  /* overflow: hidden; */
  padding-top: 0.25em;
  margin-top: -0.2em;
`;

export const Title = styled(motion.h2)`
  font-family: var(--font-family-main);
  font-size: 9vw;
  line-height: 9vw;
  letter-spacing: 0.01em;
  color: var(--black);
  font-weight: 400;
  text-align: center;
`;

export const Strong = styled.span`
  font-family: var(--font-family-main-Bold);
  color: var(--blue);
  font-weight: 700;
`;

export const ParaContainer = styled.div`
  width: 100%;
  margin: 1em auto;
  @media all and (min-width: 768px) {
    max-width: 70%;
  }
  @media all and (min-width: 1024px) {
    max-width: 40%;
  }
`;

export const Para = styled(motion.p)`
  display: block;
  font-family: var(--font-family-main-SemiBold);
  font-size: 4vw;
  line-height: 6vw;
  letter-spacing: -0.005em;
  color: var(--black);
  font-weight: 600;
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.show ? "underline" : "none")};

  @media all and (min-width: 425px) {
    letter-spacing: -0.015em;
    font-size: min(1.25rem, 4vw);
    line-height: min(1.5rem, 4vw);
  }
`;

export const Button = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: min(15.75rem, 60%);
  /* gap: 0.5em; */
  margin: 0 auto;
  height: 2.125rem;
`;

export const ArrowContainer = styled.div`
  padding-top: 0.3em;
  width: min(3.75rem, 30%);
`;

export const Arrow = styled(motion.svg)`
  width: 100%;
`;
