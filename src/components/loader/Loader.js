import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { LoaderWrapper, Typo, TypoContainer } from "./styles/StyledLoader";

const containerVariant = {
  animate: {
    scale: 2.7,
    rotate: "-90deg",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const typoVariant = {
  animate: (i) => ({
    x: ["0%", "20%", "-200%"],
    opacity: [0.1, 1, 0],
    transition: {
      delay: i * 0.04,
      duration: 1.4,
      ease: "easeInOut",
    },
  }),
};

const Loader = () => {
  const containerControl = useAnimation();
  const typoControl = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await containerControl.start("animate");
      typoControl.start("animate");
    };

    sequence();
  }, [containerControl, typoControl]);
  return (
    <LoaderWrapper id="preloader" aria-hidden="true">
      <TypoContainer animate={containerControl} variants={containerVariant}>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <Typo
              key={i}
              animate={typoControl}
              variants={typoVariant}
              custom={i}
            >
              loading purse club
            </Typo>
          );
        })}
      </TypoContainer>
    </LoaderWrapper>
  );
};

export default Loader;
