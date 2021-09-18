import React from "react";
import Logo from "./Logo";
import { MasternNav, NavContainer } from "../styles/navigationBarStyle";

const NavigationBar = () => {
  return (
    <MasternNav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        },
      }}
    >
      <NavContainer>
        <Logo color="white" />
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
