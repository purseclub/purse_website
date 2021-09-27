import styled from "styled-components";

export const Cursor = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  background-color: var(--blue);
  transition: all 0.1s ease-Out;
  will-change: width, height, border, transform;
  transition-property: width, height, border;
  pointer-events: none;
  display: none;
  z-index: 999999;
  &.hovered {
    width: 80px;
    height: 80px;
    color: var(--white);
  }

  &.hovered::after {
    content: "yeahh!";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-family-main-SemiBold);
    font-weight: 600;
    color: var(--white);
  }

  &.experience {
    width: 80px;
    height: 80px;
    color: var(--white);
  }

  &.experience::after {
    content: "noice!";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-family-main-SemiBold);
    font-weight: 600;
    color: var(--white);
  }

  &.cool {
    width: 80px;
    height: 80px;
    background-color: var(--white);
  }

  &.cool::after {
    content: "cooool!";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-family-main-SemiBold);
    font-weight: 600;
    color: var(--blue);
  }

  @media all and (min-width: 991px) {
    display: block;
  }
`;
