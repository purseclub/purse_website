import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  /* display: none; */
`;

export const ModalContainer = styled.div`
  background-color: var(--white);
  width: 90%;
  margin: 0 auto;
  padding: 1em;
  color: var(--black);
  position: relative;

  @media all and (min-width: 26.625em) {
    max-width: 60%;
    padding: 2em;
  }
`;

export const CrossContainer = styled.button`
  border: none;
  background-color: transparent;
  width: min(40px, 8vw);
  position: absolute;
  right: 0;
  top: 0;
`;

export const CrossContainerSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.h3`
  white-space: normal;

  margin-right: auto;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: clamp(1.125rem, 7vw, 2.2rem);
  letter-spacing: -0.05em;
  line-height: 1.05;
  margin-top: 0.5em;

  @media (min-width: 26.625em) and (orientation: landscape) {
    max-width: 90%;
  }
`;

export const ModalSubtitle = styled.p`
  margin-top: 1em;
  display: inline-block;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: clamp(0.75rem, 2vw, 1.125rem);
  letter-spacing: 0.02em;
  line-height: 1.1;

  @media (min-width: 26.625em) and (orientation: landscape) {
    max-width: 80%;
    margin-top: 1.5em;
  }
`;

export const ErrorMsg = styled(motion.p)`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.5rem;
  letter-spacing: 0.001em;
  color: var(--errorColor);
  margin: 0.5rem 0;

  @media all and (min-width: 991px) {
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.001em;
  }
`;

export const MobileInputContainer = styled.div`
  //background-color: red;
  margin: 1.5em 0 1em 0;
  height: max(4.5vw, 2.5rem);
  //width: 100%;
  display: inline-block;
  border: 1px solid var(--black);
  border-radius: 50px;
  outline: none;
  padding: 0px 1.25em;
  padding-right: 0.375em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (min-width: 26.625em) and (orientation: landscape) {
    max-width: 80%;
  }

  /* @media all and (min-width: 991px) {
    width: 80%;
    margin-right: auto;
    height: 5rem;
    padding-left: 2.5rem;
  } */
`;

export const MobileInput = styled.input`
  flex: 1 1 80%;
  //background-color: red;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: clamp(1rem, 1.75vw, 2.75rem);
  letter-spacing: 0.001em;
  line-height: 100%;
  color: var(--black);
  padding-bottom: 0;
  margin: 0;

  ::placeholder {
    color: var(--gray);
    font-weight: 600;
  }
`;

export const SubmitButtonContainer = styled.button`
  flex: 1 1 20%;
  border: none;
  background-color: transparent;
  //background-color: red;
  //margin-top: 0.1rem;
  height: 100%;
  position: absolute;
  right: 0;
  padding: 0.3em;
`;

export const SubmitSvg = styled.svg`
  height: 100%;
`;
