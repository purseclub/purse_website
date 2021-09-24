import { motion } from "framer-motion";
import styled from "styled-components";

export const TickBoxContainer = styled(motion.div)`
  width: 100%;
  height: 3rem;
  @media all and (min-width: 991px) {
    height: 5rem;
  }
`;

export const TickSvg = styled.svg`
  height: 100%;
  width: 3rem;
  margin: auto;

  @media all and (min-width: 991px) {
    width: 5rem;
  }
`;
