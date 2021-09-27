import React from "react";
import {
  IntroButton,
  IntroButtonContainer,
  IntroContainer,
  IntroHeading,
  IntroPara,
  IntroParaContainer,
  IntroWrapper,
} from "../../styles/intro";
import { Strong } from "../../styles/landing";

const Intro = ({ showModal, onCursor }) => {
  return (
    <IntroWrapper>
      <IntroContainer>
        <IntroHeading>
          Why are you still carrying your wallet ? Time is flying and you are
          still <Strong>stuck in the past.</Strong>
        </IntroHeading>
        <IntroParaContainer>
          <IntroPara>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </IntroPara>
        </IntroParaContainer>
        <IntroButtonContainer>
          <IntroButton
            onClick={showModal}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            Download the app
          </IntroButton>
        </IntroButtonContainer>
      </IntroContainer>
    </IntroWrapper>
  );
};

export default Intro;
