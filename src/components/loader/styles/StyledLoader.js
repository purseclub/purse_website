import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
`;

export const PercentageIndicator = styled.div`
  width: 5vw;
  height: 5vw;
  background-color: red;
`;

export const Percentage = styled.h1`
  font-family: var(--font-family-main);
  font-size: 7vw;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--white);
`;
