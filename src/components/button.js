import React from "react";
import { ArrowContainer, Button, ButtonText } from "../styles/landing";

import ArrowSvg from "./arrow";

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
      <ButtonText href={path}>{buttonText}</ButtonText>
      <ArrowContainer>
        <ArrowSvg />
      </ArrowContainer>
    </Button>
  );
};

export default MinimalButton;
