import React from "react";
import lottie from "lottie-web";
import { AnimationContainer } from "../../styles/modal/circularLoadingStyle";
import circularLoadingAnimation from "../../Animation/loadingIndicator.json";
import { useRef } from "react";
import { useEffect } from "react";

const CircularLoading = () => {
  const animationRef = useRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: circularLoadingAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  return (
    <AnimationContainer>
      <div
        ref={animationRef}
        style={{
          height: "100%",
        }}
      />
    </AnimationContainer>
  );
};

export default CircularLoading;
