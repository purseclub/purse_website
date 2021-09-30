import { motion } from "framer-motion";
import styled from "styled-components";

export const WwoWrapper = styled.section`
  width: 100%;
  margin-top: 20vh;
  @media all and (min-width: 991px) {
    margin-top: 25vh;
  }
`;

export const WwoContainer = styled.div`
  padding: 5.33rem 0;

  @media all and (min-width: 991px) {
    padding: 10.5rem 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};

  @media all and (min-width: 991px) {
    max-width: ${(props) => props.width ?? "100%"};
    margin-left: auto;
  }
`;

export const ContentBox = styled(motion.div)`
  opacity: 0;

  width: 100%;
  margin: 15vh 0;

  @media all and (min-width: 53em) {
    margin: 20vh 0;
  }
`;

export const Item = styled.article`
  @media all and (min-width: 53em) {
    position: relative;
    display: grid;
    grid-template-areas:
      "image image image enter"
      "meta meta meta meta"
      "... ... excerpt ...";
    grid-template-columns: 1fr auto 360px 1fr;
    grid-template-rows: minmax(420px, 40vh) auto auto;

    &.invert {
      grid-template-areas:
        "enter image image image"
        "meta meta meta meta"
        "... ... excerpt ...";
      grid-template-columns: 1fr auto 360px 1fr;
    }
  }
`;

export const ImgWrp = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 200px;
  will-change: transform;

  @media all and (min-width: 53em) {
    grid-area: image;
  }
`;

export const ItemImg = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 200px;
  /* background-size: cover;
  background-position: 50% 50%; */
  will-change: transform;
  /* background-image: url(${(props) => props.texture}); */

  @media all and (min-width: 53em) {
    width: 100%;
    height: 100%;
  }
`;

export const ItemEnter = styled(motion.button)`
  display: none;
  will-change: transform;

  &.unbutton {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    font: inherit;
  }

  &.unbutton:focus {
    outline: none;
  }

  @media all and (min-width: 53em) {
    align-self: center;
    justify-self: center;
    display: flex;
    grid-area: enter;
    position: relative;
    z-index: 1000;
    max-width: 400px;
    max-height: 400px;
    align-items: center;
    justify-content: center;
  }
`;
export const ItemEnterCircle = styled(motion.svg)`
  fill: none;
  stroke: #000;
  stroke-width: 1px;
  will-change: transform, opacity;

  @media all and (min-width: 53em) {
    pointer-events: none;
    cursor: pointer;
    flex: none;
  }
`;

export const Heading = styled(motion.h2)`
  font-family: var(--font-family-main);
  font-weight: 400;
  font-size: 6vw;
  font-size: clamp(2rem, 6vw, 5rem);
  line-height: 1.1;
  color: var(--black);

  @media all and (min-width: 53em) {
    margin: 0;
    grid-area: 1 / 1 / 2 / 5;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
`;

export const HeadingSpan = styled.span`
  display: flex;
  position: relative;
  z-index: 100;

  :first-child {
    font-size: 14vw;
    font-size: clamp(2rem, 14vw, 9rem);
  }

  :nth-child(2) {
    margin-top: -2vw;
    text-transform: lowercase;
  }

  @media all and (min-width: 53em) {
    justify-content: center;
  }
`;

export const ItemMeta = styled.div`
  margin: 0.85rem 0 2rem;
  line-height: 1.3;
  font-size: 0.67rem;
  text-transform: uppercase;
  overflow: hidden;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;

  @media all and (min-width: 53em) {
    grid-area: meta;

    &.invert-meta {
      justify-self: end;
      text-align: right;
    }
  }
`;

export const ItemMetaRow = styled.span`
  display: block;
  position: relative;
  overflow: hidden;

  & > span {
    display: block;
    will-change: transform;
  }
`;

export const ItemExcerpt = styled.div`
  will-change: transform;
  @media all and (min-width: 53em) {
    grid-area: excerpt;
  }
`;

export const ItemExcerptLink = styled.a`
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: var(--black);
  line-height: 1;
  overflow: hidden;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  margin-top: 1em;
  font-size: clamp(0.875rem, 4vw, 1.25rem);

  & > span {
    display: inline-block;
    padding-bottom: 10px;
    position: relative;
  }

  & > span::after {
    content: "";
    width: 100%;
    height: 2px;
    top: calc(100% - 10px);
    position: absolute;
    left: 0;
    background: var(--black);
    transition: transform 0.2s;
    transform-origin: 100% 0;
  }

  @media (hover: hover) {
    & > span:hover::after {
      transform: scale3d(0, 1, 1);
    }
  }
`;

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentHeadTitle = styled.h2`
  max-width: 84%;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: var(--offWhite);

  @media all and (min-width: 991px) {
    max-width: 70%;
    font-size: 7.875rem;
    line-height: 7.5rem;
    letter-spacing: -0.03em;
  }
`;

export const ContentBody = styled.div`
  max-width: 80%;
  margin-left: auto;
  padding-top: 2.25rem;

  @media all and (min-width: 991px) {
    padding-top: 3.25rem;
    max-width: 55%;
  }
`;

export const ContentPara = styled.p`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.01em;
  color: var(--offWhite);

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
  }
`;

export const ContentButtonContainer = styled.div`
  width: 100%;
  height: 3.125rem;
  margin-top: 2.25rem;

  @media all and (min-width: 991px) {
    margin-top: 3.25rem;
    max-width: 40%;
    margin-left: auto;
    height: 4.5rem;
  }
`;

export const ContentButton = styled.button`
  border: none;
  background-color: var(--blue);
  width: 100%;
  height: 100%;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: -0.01em;
  color: var(--orange);

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
