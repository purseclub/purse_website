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

const AppBackground = styled.div`
position: absolute;
top: 8vh;
    z-index: 10;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export { App, AppSection,AppBackground,AppContainer };
