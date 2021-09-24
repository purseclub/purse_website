import { motion } from "framer-motion";
import styled from "styled-components";

export const MailSentContainer = styled(motion.div)`
  height: 3rem;
  width: 100%;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  margin: 1.5rem 0;
  position: relative;

  /* @media all and (min-width: 991px) {
    margin: 1.5rem 0;
  } */
`;

export const MailSentContentBox = styled(motion.div)`
  height: 100%;
  margin: auto 0;
  margin-left: 2.5rem;
  max-width: 76%;
  position: absolute;
  top: 0;
  right: 0;

  @media all and (min-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-right: 2.5rem;
    margin-top: 1rem;
  }
`;

export const MailSentContentHeading = styled.h2`
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.001em;
  line-height: 1rem;

  @media all and (min-width: 991px) {
    font-size: 1.625rem;
    letter-spacing: -0.02em;
    line-height: 2rem;
  }
`;

export const MailSentContentSubtitle = styled.h4`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: -0.01em;
  line-height: 0.5rem;
  margin-top: 0.5rem;

  @media all and (min-width: 991px) {
    font-size: 0.875rem;
    letter-spacing: -0.01em;
    line-height: 1rem;
    margin-top: 0;
  }
`;
