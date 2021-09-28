import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingWrapper = styled.section`
  width: 100%;
`;

export const LandingContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  overflow: hidden;
  /* max-width: 90%; */

  @media all and (min-width: 991px) {
    /* max-width: 80%; */
    padding-top: 5rem;
    margin: 0 auto;
  }
`;

export const Title = styled(motion.h1)`
  font-family: var(--font-family-main-Bold);
  font-size: 4.375rem;
  letter-spacing: -0.05em;
  line-height: 3.75rem;
  color: var(--white);
  font-weight: 700;
  padding-bottom: 0.2em;

  @media all and (min-width: 991px) {
    font-family: var(--font-family-main-Bold);
    font-weight: 700;
    font-size: 7rem;
    line-height: 6.5rem;
    text-align: center;
  }
`;

export const Strong = styled.span`
  font-family: var(--font-family-main-Bold);
  color: var(--blue);
  font-weight: 700;
`;

export const ParaContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 5rem 0;
  padding: 1.5em 0;

  ::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--black);
  }

  ::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--black);
  }

  @media all and (min-width: 991px) {
    /* max-width: 45%; */
    padding: 2.25em 0;
  }
`;

export const Para = styled.p`
  font-family: var(--font-family-main-SemiBold);
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.001em;
  color: var(--white);
  font-weight: 600;

  @media all and (min-width: 991px) {
    text-align: center;
    max-width: 50%;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: -0.001em;
  }
`;
