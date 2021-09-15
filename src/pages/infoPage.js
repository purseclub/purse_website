import React from "react";
import Banner from "../components/banner";
import {
  InfoContainer,
  InfoWrapper,
  Timer,
  Navigation,
  Text,
  TimerText,
  BodyTitle,
  BodyP,
} from "../styles/infoPageStyle";
import { ButtonContainer, PremiumButton } from "../styles/landingPageStyle";
import Nav from "../styles/navigationBarStyle";

const InfoPage = ({ reference, opacity }) => {
  return (
    <>
      <InfoWrapper ref={reference}>
        <Navigation>
          <Text>HOME</Text>
        </Navigation>
        <InfoContainer style={{ opacity: opacity }}>
          <Timer>
            <TimerText>01/04</TimerText>
          </Timer>
          <BodyTitle>
            Management comes <br />
            with new style
          </BodyTitle>
          <BodyP>
            PURSE CLUB focused on storing your important cards at one place
            which can be accessed anytime, anywhere. Get rewards for managing
            your important cards.
          </BodyP>
          <ButtonContainer>
            <PremiumButton>Explore Now</PremiumButton>
          </ButtonContainer>
        </InfoContainer>
      </InfoWrapper>
    </>
  );
};

export default InfoPage;
