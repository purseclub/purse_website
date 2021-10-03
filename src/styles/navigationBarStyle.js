import { motion } from "framer-motion";
import styled from "styled-components";

const MasternNav = styled(motion.header)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 2em 0;
  @media all and (min-width: 53em) {
    padding: 3em 0;
  }
`;

const NavContainer = styled.div`
  /* margin: 2rem auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled.a`
  /* width: 6.5rem;
  height: 3rem; */
  color: var(--black);
  cursor: pointer;
  border: 1px solid var(--black);
  border-radius: 50px;
  outline: none;
  padding: 1em 2em;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: -0.001em;
  text-align: center;

  @media all and (min-width: 991px) {
    font-size: 1.125rem;
  }
`;

export { MasternNav, NavContainer, NavButton };
