import { motion } from "framer-motion";
import styled from "styled-components";

export const FWrapper = styled.section`
  width: 100%;

  @media all and (min-width: 991px) {
    margin-top: 8rem;
  }
`;

export const FContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 4.5rem 0;
  transform-origin: 0% 0% 0%;

  @media all and (min-width: 991px) {
    padding: 10rem 0;
  }
`;

export const QuestionContainer = styled(motion.div)`
  opacity: 0;
  width: 100%;
  position: relative;
  margin-top: 1em;

  /* padding-bottom: 1.5rem; */
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;

    background-color: var(--black);
  }

  @media all and (min-width: 991px) {
    max-width: 70%;
    margin-left: auto;
  }
`;

export const QcHead = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
`;

export const Question = styled(motion.h2)`
  flex: 1 1 80%;
  font-family: var(--font-family-main);
  font-weight: 400;
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  color: var(--black);

  /* @media all and (min-width: 991px) {
    font-size: 2.5rem;

    line-height: 3rem;
  } */
`;

export const Arrow = styled.div`
  flex: 1 1 20%;
  margin-top: 2rem;
`;

export const AnswerContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

export const Answer = styled(motion.p)`
  font-family: var(--font-family-main-Regular);
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  line-height: 1.5rem;
  color: var(--black);
  margin-bottom: 2.5em;
  display: block;
  overflow: hidden;

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    letter-spacing: -0.01em;
    line-height: 2rem;
  }
`;
