import React from "react";
import {
  ContentBody,
  ContentBox,
  ContentButton,
  ContentButtonContainer,
  ContentHead,
  ContentHeadTitle,
  ContentPara,
  Divider,
  WwoContainer,
  WwoHeading,
  WwoWrapper,
} from "../../styles/whatWeOffer";
import NonAnimatedArrow from "../NonAnimatedArrow";

const datas = [
  {
    title: "Reward Overloaded",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore the rewards",
  },
  {
    title: "Conni - Your Personal Card",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore the rewards",
  },
  {
    title: "Buttery Smooth Share",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore the rewards",
  },
  {
    title: "Shepherd Security",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore the rewards",
  },
];

const WhatWeOffer = ({ showModal }) => {
  return (
    <WwoWrapper>
      <WwoContainer>
        <WwoHeading>What we offer ?</WwoHeading>
        <Divider color={"var(--black)"} />
        {datas.map((data, index) => {
          return (
            <ContentBox key={index}>
              <ContentHead>
                <ContentHeadTitle>{data.title}</ContentHeadTitle>
                <NonAnimatedArrow
                  fill={"var(--blue)"}
                  rotate={"rotate(195deg)"}
                />
              </ContentHead>
              <ContentBody>
                <ContentPara>{data.body}</ContentPara>
              </ContentBody>
              <ContentButtonContainer>
                <ContentButton onClick={showModal}>
                  {data.buttonText}
                </ContentButton>
              </ContentButtonContainer>
            </ContentBox>
          );
        })}
      </WwoContainer>
    </WwoWrapper>
  );
};

export default WhatWeOffer;
