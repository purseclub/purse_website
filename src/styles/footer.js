import styled, { css } from "styled-components";

export const FooterWrapper = styled.section`
  width: 100%;
  margin-bottom: 5vh;
  /* background-color: red; */
  border: 1px solid var(--white);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);

  @media all and (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

export const FallingLetter = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: blue;

  height: 3rem;

  @media all and (min-width: 1080px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const ActionContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  grid-row-end: 3;

  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;

  & > div {
    width: 100%;
  }

  @media all and (min-width: 1080px) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;

    border-left: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
  }
`;

export const FooterTagLine = styled.h6`
  font-family: var(--font-family-main);
  font-size: 2vw;
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: ${(props) => (props.line ? "var(--black)" : "var(--white)")};

  ${(props) =>
    props.line &&
    css`
      text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff,
        -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;
    `};
`;

export const Legals = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Links = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 3;
  grid-row-end: 4;

  display: flex;
  justify-content: space-between;
  align-content: center;

  & > div > span {
    text-align: center;
    font-family: var(--font-family-main-SemiBold);
    font-weight: 600;
    font-size: clamp(0.75rem, 0.1vw, 1rem);
    letter-spacing: -0.005em;
    line-height: 1rem;
    color: var(--white);
  }

  @media all and (min-width: 1080px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const Trademark = styled.p`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 4;
  grid-row-end: 5;
  padding-top: 3.5em;
  padding-bottom: 4.5em;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.005em;
  line-height: 0.5rem;
  text-align: center;
  color: var(--white);

  @media all and (min-width: 1080px) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
