import React from "react";
import Lottie from "react-lottie";
import { AnimationContainer } from "../../styles/modal/circularLoadingStyle";
import circularLoadingAnimation from "../../Animation/circularLoading.json";

const CircularLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circularLoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <AnimationContainer>
      <Lottie options={defaultOptions} />
    </AnimationContainer>
  );
};

export default CircularLoading;
