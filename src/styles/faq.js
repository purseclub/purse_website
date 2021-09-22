import { motion } from "framer-motion";
import styled from "styled-components";

export const FWrapper = styled.section`
  width: 100%;
  background-color: var(--white);
`;

export const FContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 4.5rem 0;
`;

export const FHeading = styled.h1`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: var(--black);
  padding-bottom: 4rem;
`;

export const QuestionContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  margin-top: 1rem;
  /* padding-bottom: 1.5rem; */

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black);
  }
`;

export const QcHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.h2`
  max-width: 80%;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.5rem;
  color: var(--black);
`;

export const Arrow = styled.div`
  margin-top: 2rem;
`;

export const AnswerContainer = styled(motion.div)`
  width: 100%;
  padding-bottom: 1.5rem;
  height: auto;
`;

export const Answer = styled.p`
  font-family: var(--font-family-main-Regular);
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  line-height: 1.5rem;
  color: var(--black);
`;
