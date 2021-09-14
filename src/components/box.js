import { useViewportScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import BoxStyle from "../styles/boxStyle";

const Box = (props) => {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: [0.1, 0.5, 1],
  });

  const initialValue = props.data.transformInitialValue;
  const finalValue = props.data.transformFinalValue;
  const yOffSet = props.data.yOffSet;

  const easing = [0.42, 0, 1, 1];

  const yRange = [initialValue, finalValue];
  const posY = useTransform(scrollY, yRange, [0, -yOffSet], easing);

  const shadowOffset = props.data.shadowOffset;
  const shadowY = useTransform(
    scrollY,
    [0, yOffSet],
    [0, -shadowOffset],
    easing
  );

  const [idx, setIdx] = useState(10);
  const [topPosition, setTopPosition] = useState(null);
  console.log(idx);

  scrollY.onChange((x) => {
    if (topPosition === 0) {
      setIdx(10);
    } else if (topPosition < 0) {
      setIdx(9);
    } else if (topPosition > 0 && topPosition < 288) {
      setIdx(11);
    } else {
      setIdx(-1);
    }
  });

  const boxVariants = {
    visible: {
      zIndex: 10,
    },
    hidden: {
      zIndex: -1,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    function getPosition() {
      //get the element
      var elem = document.querySelector(".box");
      //get the distance scrolled on body (by default can be changed)
      var distanceScrolled = document.body.scrollTop;
      //create viewport offset object
      var elemRect = elem.getBoundingClientRect();
      //get the offset from the element to the viewport
      var elemViewportOffset = elemRect.top;
      //add them together
      var totalOffset = distanceScrolled + elemViewportOffset;
      //log it, (look at the top of this example snippet)
      setTopPosition(totalOffset);
    }
    window.addEventListener("scroll", getPosition);

    return () => window.removeEventListener("scroll", getPosition);
  }, []);

  return (
    <BoxStyle.MasterBox
      className="box"
      ref={ref}
      bgColor={props.data.bgColor}
      borderColor={props.data.borderColor}
      initial={{ y: 0 }}
      style={{
        y: posY,
      }}
    >
      <BoxStyle.MasterContent>
        <BoxStyle.Title textColor={props.data.textColor}>
          {props.data.title}
        </BoxStyle.Title>
        <BoxStyle.Bar textColor={props.data.textColor} />
        <BoxStyle.Body textColor={props.data.textColor}>
          <strong>Modern</strong> way of <strong>storing</strong> and{" "}
          <strong>managing</strong> your cards.
        </BoxStyle.Body>
      </BoxStyle.MasterContent>
      <BoxStyle.Shadow
        initial={{
          y: 0,
        }}
        style={{
          y: shadowY,
        }}
      />
    </BoxStyle.MasterBox>
  );
};

export default Box;
