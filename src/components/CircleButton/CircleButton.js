import { Link } from "gatsby";
import React from "react";
import {
  ButtonContainer,
  ButtonText,
  ButtonWrapper,
} from "../../styles/circleButton";
import NonAnimatedArrow from "../NonAnimatedArrow";

const CircleButton = ({
  onCursor,
  arrowStrokeColor,
  textColor,
  variants,
  buttonText,
  left,
  size,
  path,
}) => {
  return (
    <ButtonWrapper
      whileHover="animate"
      initial="initial"
      animate="initial"
      left={left}
      size={size}
      onMouseEnter={() => onCursor("experience")}
      onMouseLeave={onCursor}
    >
      <Link to={path}>
        <ButtonContainer variants={variants}>
          <NonAnimatedArrow arrowStrokeColor={arrowStrokeColor} />
          <ButtonText textColor={textColor}>{buttonText}</ButtonText>
        </ButtonContainer>
      </Link>
    </ButtonWrapper>
  );
};

export default CircleButton;
