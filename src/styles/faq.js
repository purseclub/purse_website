import { motion } from "framer-motion";
import styled from "styled-components";

export const FWrapper = styled.section`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 15vh;

  @media all and (min-width: 1080px) {
    margin-top: 8rem;
    margin-bottom: 20vh;
  }
`;

export const AccordianContainer = styled.div`
  margin-top: 8vh;
  @media all and (min-width: 991px) {
    margin-top: 12vh;
  }
`;

export const QuestionContainer = styled(motion.div)`
  opacity: 0;
  width: 100%;
  position: relative;
  margin-bottom: 1em;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--white);
  }

  @media all and (min-width: 1080px) {
    max-width: 70%;
    margin-left: auto;
  }
`;

export const QcHead = styled.div`
  display: flex;
  /* height: min(15%, 1em); */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1em;
  @media all and (min-width: 1080px) {
    padding-bottom: 0em;
  }
`;

export const Question = styled(motion.h2)`
  flex: 1 1 80%;
  font-family: var(--font-family-main);
  font-size: clamp(1rem, 2.5vw, 2rem);
  letter-spacing: 0.01em;
  line-height: 1.1;
  color: var(--white);
`;

export const Arrow = styled.div`
  flex: 1 1 10%;
  padding: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1080px) {
    padding: 1.5em;
  }
`;

export const AnswerContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;
