import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  /* transform-origin: center; */
`;

const ArrowSvg = ({ selectedNo, index, variants, fill, stroke }) => {
  return (
    <Svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        style={{
          transformOrigin: "center",
        }}
      >
        <motion.path
          variants={variants}
          animate={selectedNo === index ? "animate" : "initial"}
          d="M7.65225 11.2052L10.7889 8.29447L19.4857 16.667L19.5221 10.6345L23.1847 10.6124L23.1092 23.1083L10.6134 23.1837L10.6355 19.5212L16.1294 19.488L7.65225 11.2052Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="0.5"
        />
      </motion.g>
    </Svg>
  );
};

export default ArrowSvg;
