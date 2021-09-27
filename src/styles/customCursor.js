import styled from "styled-components";

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: var(--black);
  will-change: width, height, border, transform;
  transition-property: width, height, border;
  transition: all 1 ease-in-out;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
