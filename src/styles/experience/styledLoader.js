import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  background-color: red;
  margin: 0 5rem;
`;

export const LoaderContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: ${(props) => (props.small ? "1.4rem" : "3rem")};
  height: ${(props) => (props.small ? "1.4rem" : "3rem")};
  display: flex;
  justify-content: space-around;

  & > span {
    display: block;
    width: ${(props) => (props.small ? "0.37rem" : "0.8rem")};
    height: ${(props) => (props.small ? "0.37rem" : "0.8rem")};
    background-color: var(--white100);
    border-radius: 0.5rem;
  }
`;
