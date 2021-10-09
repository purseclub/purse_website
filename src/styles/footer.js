import styled, { css, keyframes } from "styled-components";

export const FooterWrapper = styled.section`
  width: 100%;
  margin-bottom: 5vh;
  /* background-color: red; */
  border: 1px solid var(--white);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);

  @media all and (min-width: 53em) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

export const FallingLetter = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  /* background-color: blue; */
  position: relative;
  overflow: hidden;

  min-height: 176px;

  @media all and (min-width: 53em) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const Playground = styled.div`
  position: absolute;
  overflow: hidden;
  inset: -600px 0px 0px;

  & > span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 36px;
    width: 31px;
    display: block;
    font-family: var(--font-family-main);
    font-size: 45px;
    line-height: 1.1;
    color: var(--white);
    margin: 6px;
    /* transform: translate3d(calc(49.7414px - 50%), calc(-376.653px + 50%), 0px)
      rotate(-2069.88deg); */
    will-change: transform;
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
  gap: 1em;

  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);

  & > div {
    width: 100%;
  }

  @media all and (min-width: 53em) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;

    gap: 2em;
    padding: 2em;

    border-left: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
  }
`;

export const FooterTagLine = styled.h6`
  font-family: var(--font-family-main);
  font-size: clamp(1rem, 4.5vw, 1.8rem);
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: ${(props) => (props.line ? "var(--black)" : "var(--white)")};
  text-transform: uppercase;
  margin-bottom: 0.2em;

  ${(props) =>
    props.line &&
    css`
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    `};
`;

export const Legals = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5em;
`;

export const LegalTextBox = styled.div`
  /* flex: 1 1 50%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > a {
    display: inline-block;
    font-family: var(--font-family-main);
    font-size: clamp(0.6rem, 1.5vw, 1rem);
    letter-spacing: 0.01em;
    line-height: 1.1;
    color: var(--white);
    text-transform: uppercase;
    text-decoration: underline solid var(--white) 2px;
  }
  & > div {
    height: 1em;
    width: 1em;
    transform: rotate(270deg);
  }

  @media all and (min-width: 53em) {
    & > div {
      height: 2rem;
      width: 2rem;
    }
  }
`;

export const Links = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 3;
  grid-row-end: 4;

  display: flex;
  justify-content: space-evenly;
  align-content: center;

  border-bottom: 1px solid var(--white);
  & > :first-child {
    border-right: 1px solid var(--white);
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    flex: 1 1 50%;
  }

  & > div > a {
    text-align: center;
    font-family: var(--font-family-main);
    font-size: clamp(0.6rem, 1.2vw, 1rem);
    letter-spacing: 0.01em;
    line-height: 1.1;
    color: var(--white);
    text-transform: uppercase;
  }

  @media all and (min-width: 53em) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    border-top: 1px solid var(--white);
    border-right: 1px solid var(--white);
  }
`;

export const Trademark = styled.p`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 4;
  grid-row-end: 5;

  padding: 1em;

  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: clamp(0.6rem, 1.2vw, 1rem);
  letter-spacing: 0.01em;
  line-height: 1.1;
  text-align: center;
  color: var(--white);

  @media all and (min-width: 53em) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
