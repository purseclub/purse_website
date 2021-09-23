import React from "react";
import Logo from "../Logo";
import { MasternNav, NavContainer } from "../../styles/navigationBarStyle";
import { DownloadButton } from "../DownloadButtonCircle/DownloadButton";

const NavigationBar = () => {
  return (
    <MasternNav>
      <NavContainer>
        <Logo color="black" />
        <DownloadButton />
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
