import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useWindowSize from "../components/useWindowSize";

//scroll-container style
const ScrollContainer = styled.div`
  width: 100%;
  will-change: transform;
`;

const SmoothScroll = ({ children }) => {
  //Hook to grab window size
  const size = useWindowSize();

  // scroll container
  const scrollContainer = useRef(null);

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => Scrolling());
  });

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const Scrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

    //loop vai raf
    requestAnimationFrame(() => Scrolling());
  };

  return (
    <>
      <ScrollContainer ref={scrollContainer}>{children}</ScrollContainer>
    </>
  );
};

export default SmoothScroll;
