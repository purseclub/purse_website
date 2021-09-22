import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Svg = styled(motion.svg)`
  width: 5.08rem;
  height: 5.17rem;
  margin-top: -1.5rem;

  @media all and (min-width: 991px) {
    width: 6.23rem;
    height: 6.35rem;
  }
`;

const transiton = { duration: 1.0, ease: [0.22, 1, 0.36, 1] };

const arrowVariant = {
  initial: {
    fill: "none",
    transform: "rotate(0deg)",
    originX: 0.2,
    originY: 0.2,
  },
  animate: {
    originX: 0.2,
    originY: 0.2,
    fill: "var(--black)",
    transform: "rotate(195deg)",

    transition: {
      ...transiton,
    },
  },
};

const ArrowSvg = ({ selectedNo, index }) => {
  return (
    <Svg
      variants={arrowVariant}
      initial={selectedNo === index ? "initial" : "animate"}
      animate={selectedNo === index ? "animate" : "initial"}
      key="arrow"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.4227 81.4583L29.8927 74.2145L48.465 40.587L29.8927 45.4434L26.8082 34.2038L65.2794 24.144L75.803 62.491L64.5269 65.4395L59.9002 48.5801L41.4227 81.4583Z"
        stroke="#292A2B"
      />
    </Svg>
  );
};

export default ArrowSvg;
