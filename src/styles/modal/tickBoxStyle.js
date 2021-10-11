import { motion } from "framer-motion";
import styled from "styled-components";

export const TickBoxContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 0;

  bottom: 0;
`;

export const TickSvg = styled.svg`
  height: 100%;
`;
