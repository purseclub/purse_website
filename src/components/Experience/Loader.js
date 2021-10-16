import { motion } from "framer-motion";
import React from "react";
import { LoaderContainer } from "../../styles/experience/styledLoader";

const loadingContainerVariants = {
  start: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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
        small={small}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        exit="exit"
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
