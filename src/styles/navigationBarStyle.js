import styled from "styled-components";

const MasternNav = styled.header`
  max-width: 90%;
  height: 56px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 2em auto;
  background-color: rgba(16, 16, 16, 0.8);
  //background-color: red;
`;

const NavContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media all and (min-width: 551px) {
    flex: 1 1 40%;
  }
`;

export const LogoName = styled.span`
  display: inline-block;
  font-family: var(--font-family-main);
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-align: left;
  color: var(--gray);
  display: none;
  /* flex: 1 1 30%; */

  @media all and (min-width: 551px) {
    display: block;
    padding-left: 1em;
  }
`;

export const LinkWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* flex: 1 1 50%; */

  @media all and (min-width: 551px) {
    /* flex: 1 1 50%; */
  }
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  height: 100%;
  gap: 0.25em;

  @media all and (min-width: 551px) {
    justify-content: flex-end;
    padding-right: 1em;
    flex: 1 1 50%;
  }
`;

export const Clock = styled.svg`
  width: min(20%, 1.5rem);
`;

export const Time = styled.span`
  font-family: var(--font-family-main);
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 56px;
  letter-spacing: -0.01em;
  color: var(--white);
`;

const NavButton = styled.button`
  height: 100%;
  padding-left: 1em;
  padding-right: 0.5em;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--white);
  font-family: var(--font-family-main);
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 56px;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: uppercase;
  display: none;

  @media all and (min-width: 551px) {
    display: block;
    text-align: end;
  }
`;

export const Hamburger = styled.div`
  height: 100%;
  width: 3.5em;
  border: 1px solid var(--black);
  @media all and (min-width: 551px) {
    display: none;
  }
`;

export const Ham = styled.svg`
  width: 100%;
  height: 100%;
`;

export { MasternNav, NavContainer, NavButton };
