import React from "react";
import {
  ActionContainer,
  LegalContainer,
  LegalHeading,
  LegalWrapper,
  SmallLinkContainer,
  SocialLink,
  SocialMedia,
  Trademark,
} from "../../styles/legals";
import CircleButton from "../CircleButton/CircleButton";
import OutlineButton from "../OutlineButton/OutlineButton";

const transiton = { duration: 0.6, ease: [0.25, 1, 0.5, 1] };
const transitionTwo = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const buttonMotion = {
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

const arrowMotion = {
  initial: {
    fill: "none",
    transform: "rotate(15deg)",
  },
  animate: {
    fill: "var(--black)",
    transform: "rotate(60deg)",
    transition: {
      ...transitionTwo,
    },
  },
};

const buttonTexts = ["Terms & Conditions", "Privacy Policy", "Report Bug"];

const Legals = () => {
  return (
    <LegalWrapper>
      <LegalContainer>
        <LegalHeading>Legals</LegalHeading>
        <ActionContainer>
          <CircleButton
            variants={buttonMotion}
            textColor={"var(--white)"}
            arrowStrokeColor={"var(--white)"}
            buttonText={"Contact Us"}
            left={"30%"}
            size={"18.25rem"}
          />
          <SmallLinkContainer>
            {buttonTexts.map((buttonText, index) => {
              return (
                <OutlineButton
                  key={index}
                  arrowStrokeColor={"var(--black)"}
                  bgColor={"var(--white)"}
                  buttonText={buttonText}
                  lineColor={"var(--black)"}
                  textColor={"var(--black)"}
                  variants={arrowMotion}
                  left={0}
                  right={"auto"}
                />
              );
            })}
            <SocialMedia>
              <SocialLink>INSTAGRAM</SocialLink>
              <SocialLink>TWITTER</SocialLink>
              <SocialLink>LINKDLEN</SocialLink>
            </SocialMedia>
          </SmallLinkContainer>
        </ActionContainer>
        <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark>
      </LegalContainer>
    </LegalWrapper>
  );
};

export default Legals;
