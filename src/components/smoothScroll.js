import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";

//scroll-container style
const ScrollContainer = styled(motion.div)`
  opacity: ${(props) => (props.status ? "0.2" : "1")};
  pointer-events: ${(props) => (props.status ? "none" : "all")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  //max-width: 90%;
  margin: 0 auto;
  z-index: 999;
  /* width: 100%; */
  overflow: hidden;
  will-change: transform;
`;

const SmoothScroll = ({ children, status }) => {
  // scroll container
  const scrollRef = useRef(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <ScrollContainer style={{ y: spring }} ref={scrollRef} status={status}>
        {children}
      </ScrollContainer>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
