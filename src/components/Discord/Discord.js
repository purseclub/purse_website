import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
  const [headref, headInView] = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (headInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });

      //   return controls.stop();
    }

    // return controls.stop();
  }, [headInView, controls]);
  return (
    <DiscordWrapper>
      <IntroHeading ref={headref} animate={controls}>
        Let's make something big together.
      </IntroHeading>
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
