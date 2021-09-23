import { Link } from "gatsby";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  OutlineButtonContainer,
  OButton,
  ButtonText,
  OutlineArrow,
  ArrowContainer,
} from "../../styles/outlineButton";

const OutlineButton = ({
  arrowStrokeColor,
  buttonText,
  bgColor,
  lineColor,
  textColor,
  variants,
  left,
  right,
  widthPercentage,
}) => {
  const [path, setPath] = useState("/");

  useEffect(() => {
    if (buttonText === "Terms & Conditions") {
      setPath("/terms_and_condition");
    } else if (buttonText === "Privacy Policy") {
      setPath("/privacy_policy");
    }
  }, [path, buttonText]);

  return (
    <OutlineButtonContainer
      whileHover="animate"
      initial="initial"
      animate="initial"
      left={left}
      right={right}
      widthPercentage={widthPercentage}
    >
      <Link to={path}>
        <OButton bgColor={bgColor} lineColor={lineColor}>
          <ButtonText textColor={textColor}>{buttonText}</ButtonText>
          <Arrow borderColor={arrowStrokeColor} variants={variants} />
        </OButton>
      </Link>
    </OutlineButtonContainer>
  );
};

const Arrow = ({ borderColor, variants }) => {
  return (
    <ArrowContainer>
      <OutlineArrow
        variants={variants}
        viewBox="0 0 130 130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.4227 81.4583L29.8927 74.2145L48.465 40.587L29.8927 45.4434L26.8082 34.2038L65.2794 24.144L75.803 62.491L64.5269 65.4395L59.9002 48.5801L41.4227 81.4583Z"
          stroke={borderColor}
        />
      </OutlineArrow>
    </ArrowContainer>
  );
};

export default OutlineButton;
