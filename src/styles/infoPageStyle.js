import { motion } from "framer-motion";
import styled from "styled-components";

const InfoWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  display: block;
  padding: var(--mobile-margin);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

const InfoContainer = styled(motion.div)`
  width: calc(100vw - 6rem);
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Navigation = styled.div`
  width: 100%;
  height: 40px;
`;

const Text = styled.h4`
  font-family: var(--font-family-main);
  font-weight: 700;
  letter-spacing: -2%;
  color: var(--white);
`;

const Timer = styled.div`
  width: 50%;
  height: 10vh;
  background-color: var(--white);
  text-align: center;
`;

const TimerText = styled.span`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  letter-spacing: -7%;
  font-size: 32px;
  line-height: 10vh;
  color: var(--black);
`;

const BodyTitle = styled.h2`
  font-family: var(--font-family-main);
  font-weight: 700;
  letter-spacing: -7%;
  font-size: 32px;
  line-height: 24px;
  color: var(--white);
`;

const BodyP = styled.p`
  font-family: var(--font-family-secondary);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.15%;
  color: var(--white);
`;

export {
  InfoWrapper,
  InfoContainer,
  Navigation,
  Text,
  Timer,
  TimerText,
  BodyTitle,
  BodyP,
};
