import { motion } from "framer-motion";
import React from "react";
import { ArrowContainer, Button, ButtonText } from "../styles/landing";

import ArrowSvg from "./arrow";

const arrowMotion = {
  initial: {
    x: 0,
  },
  animate: {
    x: 15,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const MinimalButton = ({ buttonText, path, variants, onCursor, click }) => {
  return (
    <Button
      variants={variants}
      initial="initial"
      animate="animate"
      onMouseEnter={() => {
        onCursor("hovered");
      }}
      onMouseLeave={() => {
        onCursor();
      }}
    >
      <ButtonText>{buttonText}</ButtonText>
      <ArrowContainer>
        <ArrowSvg />
      </ArrowContainer>
    </Button>
  );
};

export default MinimalButton;
