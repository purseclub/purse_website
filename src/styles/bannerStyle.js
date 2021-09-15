import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  border: 1px solid black;
  width: 200vw;
  height: 4.5rem;
  background-color: #f2c14e;
  position: absolute;
  top: ${(props) => (props.top === "upwards" ? "43vh" : "23vh")};
  left: ${(props) => (props.top === "upwards" ? "-60px" : "-60px")};
  right: 0;
  transform: ${(props) =>
    props.position === "upwards" ? "rotate(75deg)" : "rotate(-15deg)"};
  overflow: hidden;
  z-index: 10;
`;

const bannerAnimation = keyframes`
    0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Container = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: ${bannerAnimation} 10s linear infinite;
`;

const H3 = styled.h2`
  padding-left: 10px;
  display: inline-block;
  text-align: center;
  flex: 1;
  font-family: var(--font-family-main);
  color: #121212;
  letter-spacing: -4%;
  font-weight: 700;
  overflow: hidden;
  line-height: 4.5rem;
`;

export { Wrapper, H3, Container };
