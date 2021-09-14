import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ArrowSvg from "../arrow";

const NavBox = (props) => {
  const Box = styled(motion.div)`
    transform-origin: top right;
    transform: scale(0);
    background: var(--brown);
    position: absolute;
    top: 1.3rem;
    right: 2.0rem;
    z-index: 100;
    font-family: var(--font-family-main);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  `;

  const TextLink = styled(motion.div)`
    display: flex;
    align-items: center;
    /* margin-bottom: 4px; */
  `;

  const H3 = styled(motion.h3)`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -0.1px;
    color: var(--camel);
    margin-top: 0.875rem;
    /* margin-bottom: 2px; */

    @media screen and (min-width: 375px) {
      font-size: 14px;
      margin-top: 1.7rem;
    }
  `;

  const A = styled.a`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.45px;
    text-decoration: 2px underline;
    padding-right: 0.2rem;
    color: var(--camel);

    @media screen and (min-width: 375px) {
      font-size: 18px;
    }
  `;

  const Ul = styled.ul`
    list-style: none;
  `;

  const Li = styled.li`
    margin-bottom: 4px;
  `;

  const TextVariants = {
    initial: {
      opacity: 0,
      display: "none",
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
    final: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  const BoxVariants = {
    open: {
      opacity: 1,
      scale: 1,
      width: "70%",
      height: "30vh",
      padding: "32px",
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
    collapsed: {
      opacity: 0,
      scale: 0,
      padding: "0px",
      transition: {
        duration: 0.25,
        ease: "easeOut",
        when: "afterChildren",
      },
    },
  };
  return (
    <Box
      variants={BoxVariants}
      animate={props.isVisible ? "open" : "collapsed"}
    >
      <TextLink
        variants={TextVariants}
        animate={props.isVisible ? "final" : "initial"}
      >
        <A>Download the app</A>
        <ArrowSvg />
      </TextLink>
      <H3
        variants={TextVariants}
        animate={props.isVisible ? "final" : "initial"}
      >
        Social Media
      </H3>
      <Ul>
        <Li>
          <TextLink
            variants={TextVariants}
            animate={props.isVisible ? "final" : "initial"}
          >
            <A>INSTAGRAM</A>
            <ArrowSvg />
          </TextLink>
        </Li>
        <Li>
          <TextLink
            variants={TextVariants}
            animate={props.isVisible ? "final" : "initial"}
          >
            <A>TWITTER</A>
            <ArrowSvg />
          </TextLink>
        </Li>
        <Li>
          <TextLink
            variants={TextVariants}
            animate={props.isVisible ? "final" : "initial"}
          >
            <A>LINKEDLN</A>
            <ArrowSvg />
          </TextLink>
        </Li>
      </Ul>
    </Box>
  );
};

export default NavBox;
