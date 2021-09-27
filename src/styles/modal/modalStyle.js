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
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  /* display: none; */
`;

export const ModalContainer = styled.div`
  background-color: var(--blue);
  width: 90%;
  margin: 0 auto;
  /* height: 60%; */
  padding: 2rem;
  color: var(--white);
  position: relative;

  @media all and (min-width: 991px) {
    max-width: 55%;
    max-height: 60%;
    padding: 3.75rem;
  }
`;

export const CrossContainer = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 101;
`;

export const ModalTitle = styled.h3`
  width: 90%;
  margin-right: auto;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.01em;
  line-height: 2rem;

  @media all and (min-width: 991px) {
    font-size: 3rem;
    letter-spacing: -0.04em;
    line-height: 3rem;
  }
`;

export const ModalSubtitle = styled.h6`
  margin-top: 1rem;
  display: inline-block;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  line-height: 1rem;

  @media all and (min-width: 991px) {
    width: 90%;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    line-height: 1.5rem;
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
  display: block;
  margin: 1.5rem 0;
  height: 3rem;
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 50px;
  outline: none;
  padding: 0px 1.25rem;
  padding-right: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: 991px) {
    width: 80%;
    margin-right: auto;
    height: 5rem;
    padding-left: 2.5rem;
  }
`;

export const MobileInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.001em;
  line-height: 1.5rem;
  color: var(--white);
  padding-bottom: 0;
  margin: 0;

  ::placeholder {
    color: var(--white);
  }

  @media all and (min-width: 991px) {
    font-size: 2.25rem;
    letter-spacing: 0.001em;
    line-height: 3.375;
  }
`;

export const SubmitButtonContainer = styled.button`
  /* flex: 1 1 20%; */
  border: none;
  background-color: transparent;
  margin-top: 0.1rem;
`;

export const SubmitSvg = styled.svg`
  width: 2.25rem;
  @media all and (min-width: 991px) {
    width: 3.875rem;
  }
`;
