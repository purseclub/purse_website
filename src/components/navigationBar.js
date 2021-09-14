import React from "react";
import PurseWhiteLogo from "../images/purse_white_logo.svg";
import Nav from "../styles/navigationBarStyle";

const NavigationBar = () => {
  return (
    <Nav.MasternNav
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
      <Nav.NavContainer>
        <img
          style={{ width: 72 }}
          src={PurseWhiteLogo}
          alt="white-purse-logo"
        />
      </Nav.NavContainer>
    </Nav.MasternNav>
  );
};

export default NavigationBar;
