import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
`;

export const TypoContainer = styled(motion.div)`
  position: fixed;
  height: 100vmax;
  text-transform: uppercase;
  width: 100vmax;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  top: 50%;
  margin-top: -50vmax;
  will-change: transform;
`;

export const Typo = styled(motion.div)`
  white-space: nowrap;
  font-size: 12vh;
  font-size: clamp(7rem, 18.75vh, 15rem);
  line-height: 0.75;
  font-weight: bold;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  color: var(--white);
  opacity: 0.1;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: transform, opacity;
`;
