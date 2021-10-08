import { motion } from "framer-motion";
import styled from "styled-components";

export const DiscordWrapper = styled.section`
  width: 100%;
  margin: 15vh 0;

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

export const SocialContainer = styled.div`
  width: 100%;
  margin-top: 5em;
  border: 1px solid var(--white);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(2, auto);

  @media all and (min-width: 991px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 10em;
  }
`;

export const SocialText = styled(motion.span)`
  font-family: var(--font-family-main);
  font-size: 4vw;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--white);
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DiscordContainer = styled(motion.div)`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  border-bottom: 1px solid var(--white);
  position: relative;
  /* background-color: red; */

  & > a > svg {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const InstagramContainer = styled(motion.div)`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  border-bottom: 1px solid var(--white);
  position: relative;
  /* background-color: red; */

  & > a > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const TwitterContainer = styled(motion.div)`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  position: relative;
  /* background-color: red; */

  & > a > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const LinkdlenContainer = styled(motion.div)`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  position: relative;
  /* background-color: red; */

  & > a > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
