import React from "react";
import Logo from "./Logo";
import { MasternNav, NavContainer } from "../styles/navigationBarStyle";
import { useEffect } from "react";
import { useState } from "react";

const NavigationBar = () => {
  const [logoSize, setLogoSize] = useState("70.36");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 360) {
        setLogoSize("83");
      }
      if (width >= 768) {
        setLogoSize("85.43");
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Logo color="white" width={logoSize} />
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
