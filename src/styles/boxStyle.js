import { motion } from "framer-motion";
import styled from "styled-components";

const MasterBox = styled(motion.div)`
  min-width: 100vw;
  height: 20rem;
  position: relative;
  top: 5rem;
  left: 0;
  background-color: ${(props) => props.bgColor};
  z-index: 10;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 2px solid ${(props) => props.borderColor};
  }

  @media only screen and (max-width: 320px) {
    height: 18rem;
  }
`;

const MasterContent = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--mobile-margin);
  padding-top: 16px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h3`
  display: block;
  font-family: var(--font-family-main);
  font-weight: 500;
  letter-spacing: 0rem;
  font-size: 1rem;
  color: ${(props) => props.textColor};
`;

const Bar = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.textColor};
  margin: 12px 0;
`;

const Body = styled.p`
  display: block;
  width: 100%;
  font-family: var(--font-family-main);
  font-weight: 400;
  letter-spacing: -0.1rem;
  font-size: 3rem;
  line-height: 2.65rem;
  color: ${(props) => props.textColor};

  @media only screen and (max-width: 320px) {
    font-size: 2.65rem;
    line-height: 2.5rem;
  }
`;

const Shadow = styled(motion.div)`
  min-height: 18rem;
  min-width: 100%;
  position: absolute;
  background: linear-gradient(
    0deg,
    #555 0,
    #999 25%,
    #bbb 55%,
    #eaeaea 85%,
    #fff 100%
  );
  left: 0;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 11;
  top: 35vh;
`;

const BoxStyle = {
  MasterBox,
  MasterContent,
  Title,
  Bar,
  Body,
  Shadow,
};

export default BoxStyle;
