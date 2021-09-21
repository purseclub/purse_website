import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media all and (min-width: 991px) {
    height: 13rem;
    width: 13rem;
  }
`;

export const ButtonContainer = styled(motion.div)`
  background-color: var(--white);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-30deg);
`;

export const ButtonText = styled.h4`
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 0.5rem;
  font-size: 0.875rem;
  color: var(--black);

  @media all and (min-width: 991px) {
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    line-height: 1rem;
  }
`;
