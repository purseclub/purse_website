import React from "react";
import Logo from "../Logo";
import { MasternNav, NavContainer } from "../../styles/navigationBarStyle";
import { DownloadButton } from "../DownloadButtonCircle/DownloadButton";

const NavigationBar = ({ click, onCursor }) => {
  return (
    <MasternNav>
      <NavContainer>
        <Logo color="white" />
        <DownloadButton click={click} onCursor={onCursor} />
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
