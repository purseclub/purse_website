import React from "react";
import { DiscordWrapper } from "../../styles/discord";
import { IntroHeading } from "../../styles/intro";
import { TitleTop, TitleTopWrapper } from "../../styles/landing";
import MinimalButton from "../button";

const socialMedias = [
  {
    id: 0,
    buttonText: "Join Discord",
    link: "#",
  },
  {
    id: 1,
    buttonText: "Join Instagram",
    link: "#",
  },
  {
    id: 2,
    buttonText: "Join Twitter",
    link: "#",
  },
  {
    id: 3,
    buttonText: "Join Linkdeln",
    link: "#",
  },
];

const Discord = ({ onCursor }) => {
  return (
    <DiscordWrapper>
      <IntroHeading>Let's make something big together.</IntroHeading>
      <TitleTopWrapper>
        <TitleTop>Join our community</TitleTop>
      </TitleTopWrapper>
      {socialMedias.map((socialMedia, index) => {
        return (
          <MinimalButton
            key={index}
            buttonText={socialMedia.buttonText}
            path={socialMedia.link}
            onCursor={onCursor}
          />
        );
      })}
    </DiscordWrapper>
  );
};

export default Discord;
