import React from "react";
import {
  ButtonContainer,
  ButtonText,
  ButtonWrapper,
} from "../../styles/circleButton";
import ArrowSvg from "../arrow";

const transiton = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const ButtonVariant = {
  initial: {
    backgroundColor: "var(--white)",
    transform: "rotate(-30deg)",
  },
  final: {
    backgroundColor: "var(--orange)",
    transform: "rotate(0deg)",
    transition: {
      ...transiton,
    },
  },
};

const CircleButton = () => {
  return (
    <ButtonWrapper>
      <ButtonContainer
        variants={ButtonVariant}
        initial="initial"
        whileHover="final"
      >
        <ArrowSvg />
        <ButtonText>Experience the app</ButtonText>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default CircleButton;
