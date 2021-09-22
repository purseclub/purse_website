import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";
import useWindowSize from "../components/useWindowSize";

//scroll-container style
const ScrollContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  will-change: transform;
`;

const SmoothScroll = ({ children }) => {
  // //Hook to grab window size
  // const size = useWindowSize();

  // // scroll container
  // const scrollContainer = useRef(null);

  // const body = document.body;

  // // Configs
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // // Run scrollrender once page is loaded.
  // useEffect(() => {
  //   requestAnimationFrame(() => Scrolling());
  // });

  // //set the height of the body.
  // useEffect(() => {
  //   setBodyHeight();
  // }, [size.height]);

  // //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // };

  // // Scrolling
  // const Scrolling = () => {
  //   //Set Current to the scroll position amount
  //   data.current = window.scrollY;
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease;
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   //Assign skew and smooth scrolling to the scroll container
  //   scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

  //   //loop vai raf
  //   requestAnimationFrame(() => Scrolling());
  // };

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
      <ScrollContainer style={{ y: spring }} ref={scrollRef}>
        {children}
      </ScrollContainer>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
