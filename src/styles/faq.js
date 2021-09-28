import { motion } from "framer-motion";
import styled from "styled-components";

export const FWrapper = styled.section`
  width: 100%;
  background-color: var(--darkGreen);
  margin-top: 5rem;

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

export const FHeading = styled.h1`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: var(--white);
  padding-bottom: 4rem;

  @media all and (min-width: 991px) {
    font-size: 7.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.03em;
    padding-bottom: 7.25rem;
  }
`;

export const QuestionContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  margin-top: 1rem;

  /* padding-bottom: 1.5rem; */
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--white);
  }

  @media all and (min-width: 991px) {
    max-width: 70%;
    margin-left: auto;
  }
`;

export const QcHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled(motion.h2)`
  max-width: 80%;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.5rem;
  color: var(--white);

  @media all and (min-width: 991px) {
    font-size: 2.5rem;

    line-height: 3rem;
  }
`;

export const Arrow = styled.div`
  margin-top: 2rem;
`;

export const AnswerContainer = styled(motion.div)`
  width: 100%;

  height: auto;
`;

export const Answer = styled.p`
  font-family: var(--font-family-main-Regular);
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  line-height: 1.5rem;
  color: var(--white);
  padding-bottom: 1.5rem;

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    letter-spacing: -0.01em;
    line-height: 2rem;
  }
`;
