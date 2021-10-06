import { motion } from "framer-motion";
import styled from "styled-components";

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

  @media all and (min-width: 1024px) {
    margin-top: 5em;
  }

  @media all and (min-width: 1440px) {
    margin-top: 10em;
  }
`;

export const TitleTopWrapper = styled.div`
  /* overflow: hidden; */
  margin-bottom: 1em;
  padding-top: 0.5em;
`;

export const TitleTop = styled(motion.h2)`
  font-family: var(--font-family-main);
  font-size: 9vw;
  line-height: 9vw;
  letter-spacing: -0.01em;
  color: var(--gray);
  font-weight: 400;
  text-align: center;

  @media all and (min-width: 768px) {
    font-size: 5vw;
    line-height: 5vw;
  }
`;

export const TitleWrapper = styled(motion.div)`
  width: 100%;

  margin-top: -1.5em;

  @media all and (min-width: 400px) {
    margin-top: -1.8em;
  }

  @media all and (min-width: 551px) {
    margin-top: -2.6em;
  }

  @media all and (min-width: 768px) {
    margin-top: -3.6em;
  }

  @media all and (min-width: 1024px) {
    margin-top: -4.6em;
  }

  @media all and (min-width: 1080px) {
    margin-top: -5.6em;
  }

  @media all and (min-width: 1440px) {
    margin-top: -6.6em;
  }
`;

export const Title = styled(motion.h1)`
  font-family: var(--font-family-main);
  font-size: clamp(3rem, 14vw, 13rem);
  line-height: 1.1;
  color: ${(props) => (props.hollow ? "var(--black)" : "var(--white)")};
  text-align: center;
  text-transform: uppercase;
  /* -webkit-text-fill-color: ${(props) => (props.hollow ? "black" : "none")};
  -webkit-text-stroke-width: ${(props) => (props.hollow ? "1px" : "none")};
  -webkit-text-stroke-color: ${(props) => (props.hollow ? "white" : "none")}; */

  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;

export const Strong = styled.span`
  font-family: var(--font-family-main-Bold);
  color: var(--blue);
  font-weight: 700;
`;

export const ParaContainer = styled.div`
  width: 100%;
  flex: 1 1 50%;
  overflow: hidden;
`;

export const Para = styled(motion.p)`
  opacity: ${(props) => (props.hide ? 0 : 1)};
  display: block;
  font-family: var(--font-family-main-Regular);
  font-size: clamp(0.75rem, 4vw, 1rem);
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: var(--white);
  font-weight: 400;
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => (props.show ? "underline" : "none")};
  margin-bottom: ${(props) => (props.add ? "1.5em" : "0")};
  margin-top: ${(props) => (props.top ? "10vh" : "0")};
`;

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1em;
  margin: 0 auto;
  height: 2.25em;
  border: none;
  background-color: transparent;
  margin-top: 1em;
  position: relative;
  will-change: transform;

  &::after {
    content: "";
    width: calc(100% - 5px);
    height: 2px;
    top: calc(100% - 4px);
    position: absolute;
    left: 0;
    background: var(--white);
    transform: scale3d(0, 0, 1);
    transition: transform 0.2s;
    transform-origin: 0 100%;
    transform: scale3d(0, 1, 1);
  }

  @media all and (min-width: 768px) {
    margin-top: 3em;
  }
  @media (hover: hover) {
    &:hover::after {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const ButtonText = styled.a`
  font-family: var(--font-family-main);
  font-size: clamp(0.75rem, 3vw, 1.125rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--white);
  text-transform: uppercase;
`;

export const ArrowContainer = styled.div`
  height: 100%;
  max-height: 70%;
  margin: auto 0;
  width: 33px;

  @media all and (min-width: 551px) {
    max-height: 100%;
  }
`;

export const SideNote = styled.p`
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
