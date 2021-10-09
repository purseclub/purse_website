import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { LoaderWrapper, Typo, TypoContainer } from "./styles/StyledLoader";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const typoVariants = {
  animate: {
    x: ["20%", "-200%"],
    opacity: [1, 0],
    transition: {
      duration: 2.3,
      ease: "easeOut",
    },
  },
};

const Loader = () => {
  const containerControl = useAnimation();
  const typoControl = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await containerControl
        .start({
          scale: 2.7,
          rotate: "-90deg",
          transition: {
            duration: 1.4,
            ease: "easeInOut",
          },
        })
        .then(
          await typoControl.start({
            x: "20%",
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          })
        );
      //   typoControl.set({
      //     x: "20%",
      //     opacity: 1,
      //     transition: {
      //       staggerChildren: 0.04,
      //     },
      //   });

      //   await typoControl.start({
      //     x: "20%",
      //     transition: {
      //       duration: 1,
      //       ease: "easeInOut",
      //     },
      //   });
      await typoControl.start({
        x: "-200%",
        opacity: 0,
        transition: {
          duration: 1.5,
          ease: "easeIn",
        },
      });
      //   await typoControl.start({
      //     opacity: 1,
      //     transition: {
      //       duration: 1,
      //       ease: "easeIn",
      //     },
      //   });
      //   await typoControl.start({
      //     opacity: 0,
      //     transition: {
      //       duration: 1.5,
      //       ease: "easeIn",
      //     },
      //   });
    };

    sequence();
  }, [containerControl, typoControl]);
  return (
    <LoaderWrapper id="preloader" aria-hidden="true">
      <TypoContainer animate={containerControl} variants={containerVariant}>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
        <Typo animate={typoControl}>bonjour bonjour bonjour</Typo>
      </TypoContainer>
    </LoaderWrapper>
  );
};

export default Loader;
