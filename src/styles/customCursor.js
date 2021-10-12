import styled from "styled-components";

export const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  transition: all 0.2s ease;
  transition-property: width, height, transform;
  pointer-events: none;
  display: none;
  mix-blend-mode: difference;
  z-index: 99999;
  will-change: width, height, transform;

  &.hovered {
  }

  &.hovered::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 34px;
    height: 34px;
    transform: translate(-50%, -50%);
    color: var(--white);
    border-radius: 100%;
    border: 1px solid var(--white);
  }

  &.bar {
    width: 4px;
    height: 24px;
    border-radius: 10%;
  }

  @media all and (min-width: 86em) {
    display: block;
  }
`;
