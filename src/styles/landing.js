import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const LandingWrapper = styled(motion.section)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LandingContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  width: 100%;
  position: relative;

  & > :first-child {
    margin-top: 5.736vw;
  }

  & > :last-child {
    transform: translateY(-38%);
  }
`;

export const TitleTopWrapper = styled.div`
  /* overflow: hidden; */
  margin: 1em 0 2em 0;
`;

export const TitleTop = styled(motion.h2)`
  font-family: var(--font-family-main);
  font-size: 3vw;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--gray);
  text-align: center;
`;

export const TitleWrapper = styled(motion.div)`
  width: 100%;
`;

export const Title = styled(motion.h1)`
  font-family: var(--font-family-main);
  font-size: max(38px, 11.75vw);
  line-height: 1;
  color: ${(props) => (props.hollow ? "var(--black)" : "var(--white)")};
  text-align: center;
  text-transform: uppercase;
  /* -webkit-text-fill-color: ${(props) => (props.hollow ? "black" : "none")};
  -webkit-text-stroke-width: ${(props) => (props.hollow ? "1px" : "none")};
  -webkit-text-stroke-color: ${(props) => (props.hollow ? "white" : "none")}; */

  ${(props) =>
    props.hollow &&
    css`
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    `}
`;

export const Strong = styled.span`
  font-family: var(--font-family-main-Bold);
  color: var(--blue);
  font-weight: 700;
`;

export const ParaContainer = styled(motion.div)`
  width: 100%;

  overflow: hidden;
`;

export const Para = styled(motion.p)`
  opacity: ${(props) => (props.hide ? 0 : 1)};
  display: block;
  font-family: var(--font-family-main-SemiBold);
  font-size: clamp(0.75rem, 4vw, 1.25rem);
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: var(--white);
  font-weight: 600;
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.show ? "underline" : "none")};
  margin-bottom: ${(props) => (props.add ? "1.5em" : "0")};
  margin-top: ${(props) => (props.top ? "5vh" : "0")};
`;

export const Button = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1em;
  margin: 0 auto;
  height: 100%;
  position: relative;
  will-change: transform;
  background-color: transparent;
  border: none;
  //flex: 0 1 12em;

  &::after {
    content: "";
    width: calc(100% - 10px);
    height: 2px;
    top: calc(100% - 10px);
    position: absolute;
    left: 0;
    right: 0;
    background: var(--white);
    transform: scale3d(0, 0, 1);
    transition: transform 0.2s;
    transform-origin: 0 100%;
    transform: scale3d(0, 1, 1);
  }

  @media all and (min-width: 86em) {
    /* margin-top: 3em; */
    /* width: 20em; */
    //flex: 0 1 18em;
    width: 20vw;
  }
  @media (hover: hover) {
    &:hover::after {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const ButtonText = styled.a`
  //display: inline-block;
  font-family: var(--font-family-main);
  font-size: clamp(0.75rem, 3vw, 1.125rem);
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--white);
  text-transform: uppercase;
  //flex: 1 1 90%;
  //text-align: center;
`;

export const ArrowContainer = styled.div`
  /* height: 100%;
  max-height: 70%; */
  margin: auto 0;
  width: min(3rem, 8vw);
  //background-color: red;

  /* @media all and (min-width: 551px) {
    max-height: 100%;
  } */
`;

export const SideNote = styled(motion.p)`
  font-family: var(--font-family-main);
  font-size: clamp(0.625rem, 1vw, 0.75rem);
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: var(--white);
  text-transform: uppercase;
  position: absolute;
  right: 4px;
  bottom: 0;
  margin-right: ${(props) => `-${props.divWidth / 2}px `};
  margin-bottom: ${(props) => `${(props.divWidth * 2) / 3}px`};
  transform: rotate(-90deg);
`;
