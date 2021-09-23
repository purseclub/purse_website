import React from "react";
import Logo from "../Logo";
import { MasternNav, NavContainer } from "../../styles/navigationBarStyle";
import { DownloadButton } from "../DownloadButtonCircle/DownloadButton";

const NavigationBar = ({ click }) => {
  return (
    <MasternNav>
      <NavContainer>
        <Logo color="black" />
        <DownloadButton click={click} />
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
