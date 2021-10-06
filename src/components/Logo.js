import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;
const LogoContainer = styled.div`
  padding: 0.5em 0.5em;
  border: 1px solid var(--black);
  /* flex: 1 1 3.5em; */
  height: 100%;
  /* background-color: blue; */
  /* width: min(25%, 3.5em); */
  width: 2.5rem;

  @media all and (min-width: 551px) {
    width: min(25%, 3.5em);
  }
`;

const WhiteLogo = () => {
  return (
    <Svg viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.06641 0.969886C7.06641 0.470472 7.52656 0.0979993 8.01502 0.202027L26.0719 4.04761C26.4343 4.1248 26.6935 4.4449 26.6935 4.81547V38.2504C26.6935 38.7606 26.2144 39.1352 25.7193 39.0123L7.66237 34.5306C7.31225 34.4437 7.06641 34.1294 7.06641 33.7687V0.969886Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0 5.68082C0 5.18141 0.460155 4.80894 0.948614 4.91296L19.0055 8.75855C19.3679 8.83574 19.6271 9.15584 19.6271 9.52641V42.9613C19.6271 43.4715 19.148 43.8462 18.6529 43.7233L0.595965 39.2416C0.245842 39.1547 0 38.8403 0 38.4796V5.68082Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="26.6935"
          y1="4.02688"
          x2="8.08946"
          y2="34.3141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C2C2C2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="19.6271"
          y1="10.5134"
          x2="-0.449802"
          y2="37.4229"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C2C2C2" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

const Logo = () => {
  return (
    <LogoContainer>
      <WhiteLogo />
    </LogoContainer>
  );
};

export default Logo;
