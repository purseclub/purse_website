import React from "react";
import {
  DiscordContainer,
  DiscordTitle,
  DiscordWrapper,
} from "../../styles/discord";
import { Strong } from "../../styles/landing";
import OutlineButton from "../OutlineButton/OutlineButton";

const transiton = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const arrowMotion = {
  initial: {
    fill: "none",
    transform: "rotate(15deg)",
  },
  animate: {
    fill: "var(--black)",
    transform: "rotate(60deg)",
    transition: {
      ...transiton,
    },
  },
};

const Discord = () => {
  return (
    <DiscordWrapper>
      <DiscordContainer>
        <DiscordTitle>
          You have reached the end, but this should not be the end of our
          <Strong> relation.</Strong>
        </DiscordTitle>
        <OutlineButton
          arrowStrokeColor={"var(--black)"}
          buttonText={"Join Discord Community"}
          bgColor={"var(--white)"}
          lineColor={"var(--black)"}
          textColor={"var(--black)"}
          variants={arrowMotion}
          left={0}
          right={"auto"}
          widthPercentage={"50%"}
        />
      </DiscordContainer>
    </DiscordWrapper>
  );
};

export default Discord;
