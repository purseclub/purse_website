import React from "react";
import Logo from "../components/Logo";
import {
  LegalHeaderWrapper,
  LegalHeaderContainer,
  LegalHeaderButton,
} from "../styles/legal_layout_style";

const LegalHeader = () => {
  return (
    <LegalHeaderWrapper>
      <LegalHeaderContainer>
        <Logo color="black" />
        <LegalHeaderButton href="/">Back to Website</LegalHeaderButton>
      </LegalHeaderContainer>
    </LegalHeaderWrapper>
  );
};

export default LegalHeader;
