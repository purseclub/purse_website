import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-top: 3.5em;
  grid-column: 1/2;

  & > svg {
    width: 100%;
  }
`;

export const Title = styled.div`
  grid-column: 1/4;
  margin-top: 4em;

  & > h1 {
    font-family: var(--font-family-bold);
    font-weight: 700;
    font-size: clamp(1.25rem, 2.5vw, 2rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-style: normal;
  }
`;

export const SubTitle = styled.div`
  grid-column: 1/4;
  margin-top: 0.5em;

  & > h2 {
    font-family: var(--font-family-medium);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.01em;
    font-style: normal;
    color: var(--white200);
  }
`;

export const Form = styled.form`
  grid-column: 1/-1;
  margin-top: 2.5em;

  & > input {
    width: 100%;
    padding: 0.5em 0.5em 0.5em 0;
    background: transparent;
    border: none;
    font-family: var(--font-family-bold);
    font-weight: 700;
    font-size: clamp(1.5rem, 2vw, 2.25rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    font-style: normal;
    color: var(--white);
    outline: none;

    ::placeholder {
      color: var(--white300);
    }
  }
`;

export const BlackButton = styled.div`
  grid-column: 1/3;
  width: 100%;
  padding: 0.8125em 1.425em;
  display: flex;
  //flex-direction: row;
  //align-items: flex-start;
  background: linear-gradient(
      93.54deg,
      rgba(0, 0, 0, 0.12) 0%,
      rgba(0, 0, 0, 0) 99.82%
    ),
    #242729;
  border: 2px solid rgba(255, 255, 255, 0.02);
  box-shadow: -4.97935px -4.97935px 9.9587px rgba(255, 255, 255, 0.04),
    4.97935px 4.97935px 9.9587px rgba(0, 0, 0, 0.16);
  border-radius: 25px;

  & > span {
    flex-grow: 1;
    display: inline-block;
    font-family: var(--font-family-medium);
    font-weight: 500;
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    line-height: 1;
    letter-spacing: 0.01em;
    font-style: normal;
    color: var(--copper40040);
  }
`;
