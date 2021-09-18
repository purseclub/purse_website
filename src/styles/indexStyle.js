import styled from "styled-components";
import { motion } from "framer-motion";

const App = styled(motion.main)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const AppSection = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MobileImgContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 50vh;
  z-index: 1;
`;

const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export { App, AppSection, MobileImgContainer, MobileImg, AppContainer };
