import React from "react";
import Logo from "../Logo";
import {
  MasternNav,
  NavButton,
  NavContainer,
} from "../../styles/navigationBarStyle";

const NavigationBar = ({ click, onCursor }) => {
  return (
    <MasternNav>
      <NavContainer>
        <Logo color="black" />
        <NavButton
          click={click}
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          {" "}
          Download the app
        </NavButton>
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
