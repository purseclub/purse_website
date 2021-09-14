import * as React from "react";
import { motion } from "framer-motion";

const Hamburger = (props) => {
  const ColorVariants = {
    initial: {
      fill: "var(--white)",
    },
    final: {
      fill: "var(--brown)",
    },
  };
  const topBar = {
    initial: {
      rotate: 0,
      y: 0,
      fill: "var(--brown)",
    },
    final: {
      rotate: 45,
      fill: "var(--camel)",
      y: 6,
      transition: {
        duration: 0.2,
      },
    },
  };

  const bottomBar = {
    initial: {
      rotate: 0,
      y: 0,
      fill: "var(--brown)",
    },
    final: {
      rotate: -45,
      fill: "var(--camel)",
      y: -6,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <svg
      width="40"
      height="38"
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="0.5"
        y="0.5"
        width="39"
        height="37"
        variants={ColorVariants}
        animate={props.isActive ? "final" : "initial"}
      />
      <motion.rect
        x="8"
        y="12"
        width="24"
        height="2"
        variants={topBar}
        animate={props.isActive ? "final" : "initial"}
      />
      <motion.rect
        x="8"
        y="24"
        width="24"
        height="2"
        variants={bottomBar}
        animate={props.isActive ? "final" : "initial"}
      />
      <rect x="0.5" y="0.5" width="39" height="37" stroke="#292823" />
    </svg>
  );
};

export default Hamburger;
