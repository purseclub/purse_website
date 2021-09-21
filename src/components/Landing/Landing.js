import React from "react";
import {
  LandingContainer,
  LandingWrapper,
  Para,
  ParaContainer,
  Strong,
  Title,
  TitleContainer,
} from "../../styles/landing";
import CircleButton from "../CircleButton/CircleButton";

export const Landing = () => {
  return (
    <LandingWrapper>
      <LandingContainer>
        <TitleContainer>
          <Title>
            Modern way of <Strong>storing and managing</Strong> your cards that
            matter to you.
          </Title>
        </TitleContainer>
        <ParaContainer>
          <Para>
            Experience the app right in the browser. Download when you feel like
            <Strong> Downloading the app.</Strong>
          </Para>
        </ParaContainer>
        <CircleButton />
      </LandingContainer>
    </LandingWrapper>
  );
};
