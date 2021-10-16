import React from "react";
import {
  FlatButtonContainer,
  FlatButtonWrapper,
} from "../../styles/experience/styledPrivateRoute";

const FlatButton = ({ handle, show, theme }) => {
  return (
    <FlatButtonWrapper show={show}>
      <FlatButtonContainer onClick={handle} theme={theme}>
        {theme === "black" && (
          <svg
            width="35"
            height="39"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="17.3036"
              cy="21.1964"
              r="9.42857"
              stroke="#8C8E8F"
              strokeWidth="0.785714"
            />
            <rect
              x="14.7336"
              y="6.84"
              width="5.14143"
              height="16.1414"
              rx="2.57071"
              fill="#C4C4C4"
              stroke="#2F2F2F"
              strokeWidth="3.57"
            />
            <circle cx="17.3036" cy="21.1964" r="3.92857" fill="#FFA46E" />
          </svg>
        )}
        <span>{theme === "white" ? "cancel" : "logout"}</span>
      </FlatButtonContainer>
    </FlatButtonWrapper>
  );
};

export default FlatButton;
