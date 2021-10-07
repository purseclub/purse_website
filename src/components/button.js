import React from "react";
import { ArrowContainer, Button, ButtonText } from "../styles/landing";

import ArrowSvg from "./arrow";

const MinimalButton = ({ buttonText, path, variants, onCursor, click }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "2.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        href={path}
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
    </div>
  );
};

export default MinimalButton;
