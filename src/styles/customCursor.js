import styled from "styled-components";

export const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: var(--blue);
  transition-property: width, height, border;
  will-change: width, height, border, transform;
  transition: all 0.1s ease-in-out;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
