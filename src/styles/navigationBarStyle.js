import { motion } from "framer-motion";
import styled from "styled-components";

const MasternNav = styled(motion.header)`
  width: 100vw;
  height: 5rem;
  z-index: 100;
`;

const NavContainer = styled.div`
  padding: var(--mobile-margin);
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: var(--tablet-margin);
  }
`;

const Logo = styled.img`
  width: 64px;

  @media only screen and (min-width: 768px) {
    width: 96px;
  }
`;

export { MasternNav, NavContainer, Logo };
