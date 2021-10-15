import { motion } from "framer-motion";
import React from "react";
import {
  LoaderContainer,
  LoaderWrapper,
} from "../../styles/experience/styledLoader";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};
const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const Loader = ({ small }) => {
  return (
    <>
      <LoaderContainer
        small
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </LoaderContainer>
    </>
  );
};

export default Loader;
