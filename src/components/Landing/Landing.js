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
    backgroundColor: "var(--blue)",
    transform: "rotate(-30deg)",
  },
  animate: {
    backgroundColor: "var(--darkGreen)",
    transform: "rotate(0deg)",
    transition: {
      ...transiton,
    },
  },
};

export const Landing = ({ onCursor, showModal }) => {
  return (
    <LandingWrapper>
      <LandingContainer>
        <TitleContainer>
          <Title
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
          >
            Modern way of <Strong>storing and managing</Strong> your cards that
            matter to you.
          </Title>
        </TitleContainer>
        <ParaContainer>
          <Para>
            Experience the app right in the browser. Download when you feel like
            <Strong
              onClick={showModal}
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              {" "}
              Downloading the app.
            </Strong>
          </Para>
        </ParaContainer>
        <CircleButton
          onCursor={onCursor}
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
