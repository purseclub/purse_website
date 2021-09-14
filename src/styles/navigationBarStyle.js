import { motion } from "framer-motion";
import styled from "styled-components";

const MasternNav = styled(motion.header)`
  min-width: 100vw;
  min-height: 5rem;
  z-index: 100;
`;

const NavContainer = styled.div`
padding: var(--mobile-margin);
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  width: 40px;
  height: 38px;
  border: none;
  background: none;
  z-index: 101;
`;

const Nav = {
  MasternNav,
  NavContainer,
  Button,
};

export default Nav;
