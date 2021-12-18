import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerContainer = styled(motion.div)`
  width: 100%;

  //max-height: 3em;
  //margin-left: -50%;
  background-color: #426bb6;
  position: relative;
  top: 6.5rem;
  color: #fff;
  font-family: var(--font-family-main-Medium);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  /* &::before {
    content: "before";
    position: absolute;
    background-color: #426bb6;
    color: var(--white);
    top: 0;
    height: 3em;
    left: -200px;
    bottom: 0;
    right: 0;
    //margin-left: -30px;
    width: 50px;
    z-index: -1;
  } */
`;

export const BannerContent = styled.div`
  max-width: 80%;
  padding: 1em 0;
  p {
    font-size: clamp(0.8125rem, 1.5vw, 1.125rem);
    text-align: center;
  }

  @media all and (max-width: 25.875em) {
    padding: 0.5em 0;
  }
`;

export const BannerLink = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.25em;

  button {
    text-decoration: none;
    font-size: clamp(0.8125rem, 1.5vw, 1.125rem);
    padding-right: 0.25em;
    background: none;
    border: none;
    color: var(--white);
    font-family: var(--font-family-main-Medium);
  }

  button:hover {
    text-decoration: underline;
  }

  svg {
    margin-top: 3px;
  }
`;
