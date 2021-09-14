import React from "react";
import styled from "styled-components";

const ArrowSvg = () => {
  const Svg = styled.svg`
    width: 16px;
    height: 18px;
    margin-bottom: -4px;

    @media screen and (min-width: 375px) {
      width: 18px;
      height: 19px;
    }
  `;

  return (
    <Svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1996 5.00146L5.41016 15.0015"
        stroke="#F5E4BC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.04297 5.00098H15.2009V13.3343"
        stroke="#F5E4BC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowSvg;
