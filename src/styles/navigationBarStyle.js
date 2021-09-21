import { motion } from "framer-motion";
import styled from "styled-components";

const MasternNav = styled(motion.header)`
  width: 100%;
  /* position: absolute;
  top: 0;
  left: 0;
  z-index: 10; */
`;

const NavContainer = styled.div`
  max-width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { MasternNav, NavContainer };
