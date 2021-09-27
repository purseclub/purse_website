import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingWrapper = styled.section`
  width: 100%;
`;

export const LandingContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  max-width: 90%;
  overflow: hidden;

  @media all and (min-width: 991px) {
    max-width: 70%;
    padding-top: 5rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-family-main-Regular);
  font-size: 4.375rem;
  letter-spacing: -0.03em;
  line-height: 4rem;
  color: var(--white);
  font-weight: 400;

  @media all and (min-width: 991px) {
    font-size: 6rem;
    line-height: 6.5rem;
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
    max-width: 45%;
    padding: 2.25em 0;
  }
`;

export const Para = styled.p`
  font-family: var(--font-family-main-Regular);
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.03em;
  color: var(--white);
  font-weight: 400;

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.01em;
  }
`;
