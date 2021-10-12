import { motion } from "framer-motion";
import styled from "styled-components";

export const DiscordWrapper = styled.section`
  width: 100%;
  margin: 15vh 0;
  //background-color: red;

  @media all and (min-width: 991px) {
    margin: 20vh 0;
  }
`;

export const SpanHeading = styled.span`
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  color: var(--black);
`;

export const Divide = styled.div`
  background-color: var(--white);
  width: 1px;
`;

export const SocialContainer = styled(motion.div)`
  //background-color: red;
  width: 100%;
  margin-top: 2em;
  /* display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(2, auto); */

  @media all and (min-width: 991px) {
    margin-top: 5em;
  }
`;

export const SocialBox = styled.div`
  width: 100%;
  padding: 1em;
  margin: 0 auto;
  border: 1px solid var(--white);
  @media all and (min-width: 426px) {
    max-width: max(800px, 31.25vw);
    padding: 2em;
  }
`;

export const SocialText = styled(motion.span)`
  font-family: var(--font-family-main);
  font-size: clamp(1.5rem, 3vw, 5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--white);
  display: block;
  //text-align: center;
  text-transform: uppercase;
`;

export const Cross = styled.div`
  display: flex;
  & > span {
    display: inline-block;
    height: 2em;
    width: 6px;
    background-color: var(--white);
    transform-origin: center;
  }
  & > :first-child {
    transform: rotateZ(45deg);
  }

  & > :last-child {
    transform: translateX(-5px) rotateZ(-45deg);
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--davysGrey);
  margin-top: 1em;
  @media all and (min-width: 426px) {
    margin-top: 2em;
  }
`;

export const FunMessage = styled.span`
  margin: 1em 0;
  font-size: clamp(0.875rem, 2vw, 1.5rem);
  font-family: var(--font-family-main-Medium);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--davysGrey);
`;

export const SocialMediaContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //height: 4rem;
  margin: 4em 0 1em 0;

  & > li > a > svg {
    // height: 100%;
    width: min(40px, 8vw);
    fill: white;
  }
  @media all and (min-width: 426px) {
    margin: 5em 0 1em 0;
  }
`;
