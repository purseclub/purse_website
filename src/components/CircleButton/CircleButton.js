import React from "react";
import {
  ButtonContainer,
  ButtonText,
  ButtonWrapper,
} from "../../styles/circleButton";
import NonAnimatedArrow from "../NonAnimatedArrow";

const CircleButton = ({
  arrowStrokeColor,
  textColor,
  variants,
  buttonText,
  left,
  size,
}) => {
  return (
    <ButtonWrapper
      whileHover="animate"
      initial="initial"
      animate="initial"
      left={left}
      size={size}
    >
      <ButtonContainer variants={variants}>
        <NonAnimatedArrow arrowStrokeColor={arrowStrokeColor} />
        <ButtonText textColor={textColor}>{buttonText}</ButtonText>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default CircleButton;
