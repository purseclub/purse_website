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

const transiton = { duration: 0.6, ease: [0.25, 1, 0.5, 1] };

const ButtonVariant = {
  initial: {
    backgroundColor: "var(--black)",
    transform: "rotate(-30deg)",
  },
  animate: {
    backgroundColor: "var(--orange)",
    transform: "rotate(0deg)",
    transition: {
      ...transiton,
    },
  },
};

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
        <CircleButton
          textColor={"var(--white)"}
          arrowStrokeColor={"var(--white)"}
          buttonText={"Experience the app"}
          variants={ButtonVariant}
          size={"13rem"}
          path={"/experience/experienceHome"}
        />
      </LandingContainer>
    </LandingWrapper>
  );
};
