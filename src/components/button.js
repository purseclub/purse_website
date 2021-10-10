import React from "react";
import { ArrowContainer, Button, ButtonText } from "../styles/landing";

import ArrowSvg from "./arrow";

const MinimalButton = ({ buttonText, path, variants, onCursor, click }) => {
  return (
    <>
      <Button variants={variants} initial="initial" animate="animate">
        <ButtonText
          href={path}
          onMouseEnter={() => {
            onCursor("hovered");
          }}
          onMouseLeave={() => {
            onCursor();
          }}
        >
          {buttonText}
        </ButtonText>
        <ArrowContainer>
          <ArrowSvg fill="none" stroke="var(--white)" />
        </ArrowContainer>
      </Button>
    </>
  );
};

export default MinimalButton;
