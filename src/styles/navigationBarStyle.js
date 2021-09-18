import { motion } from "framer-motion";
import styled from "styled-components";

const MasternNav = styled(motion.header)`
  width: 100%;
  height: 5rem;
  z-index: 100;
  padding: var(--mobile-margin);

  @media only screen and (min-width: 768px) {
    padding: var(--tablet-margin);
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export { MasternNav, NavContainer };
