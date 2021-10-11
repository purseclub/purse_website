import { motion } from "framer-motion";
import styled from "styled-components";

export const MailSentContainer = styled(motion.div)`
  height: max(4.5vw, 2.5rem);
  width: 100%;
  margin: 1.5em 0 1em 0;

  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  position: relative;
`;

export const MailSentContentBox = styled(motion.div)`
  display: flex;
  margin-left: ${(props) => props.tickWidth}px;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: 1em;
  //transform: translateY(-50%);
  //background-color: red;
  //margin-left: 2.5rem;
`;

export const MailSentContentHeading = styled.p`
  //background-color: red;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: clamp(0.875rem, 3vw, 1.625rem);
  letter-spacing: -0.001em;
  line-height: 100%;
`;
