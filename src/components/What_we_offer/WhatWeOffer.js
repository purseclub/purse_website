import React, { useEffect } from "react";
import { IntroHeading } from "../../styles/intro";
import {
  ContentBody,
  ContentBox,
  ContentButton,
  ContentButtonContainer,
  ContentHead,
  ContentHeadTitle,
  ContentPara,
  Divider,
  Heading,
  HeadingSpan,
  ImgWrp,
  Item,
  ItemEnter,
  ItemEnterCircle,
  ItemExcerpt,
  ItemExcerptLink,
  ItemImg,
  ItemMeta,
  ItemMetaRow,
  WwoContainer,
  WwoWrapper,
} from "../../styles/whatWeOffer";

import { Para } from "../../styles/landing";
import NonAnimatedArrow from "../NonAnimatedArrow";
import texture from "../../images/texture.png";
import MinimalButton from "../button";

const datas = [
  {
    subtitle: "Reward",
    title: "Overloaded",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore rewards",
  },
  {
    subtitle: "Conni",
    title: "Personal Card",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Experience the upgrade",
  },
  {
    subtitle: "Share",
    title: "Smooth",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Start sharing",
  },
  {
    subtitle: "Security",
    title: "Shepherd",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Become a member",
  },
];

const Splitting = ({ copy, role }) => {
  return (
    <HeadingSpan aria-label={copy} role={role}>
      {copy.split("").map(function (char, index) {
        return (
          <span aria-hidden="true" key={index}>
            {char}
          </span>
        );
      })}
    </HeadingSpan>
  );
};

const WhatWeOffer = ({ showModal, onCursor }) => {
  return (
    <WwoWrapper>
      <>
        <IntroHeading>Flavour of love</IntroHeading>
        <Divider color={"var(--black)"} />
        {datas.map((data, index) => {
          return (
            <ContentBox key={index}>
              <Item className={(index + 1) % 2 == 0 ? "invert" : ""}>
                <ImgWrp>
                  <ItemImg texture={texture} />
                </ImgWrp>
                <ItemEnter className="unbutton">
                  <ItemEnterCircle
                    vectorEffect="non-scaling-stroke"
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                  >
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="400"
                      cy="400"
                      r="150"
                    />
                  </ItemEnterCircle>
                </ItemEnter>
                <Heading>
                  <Splitting copy={data.title} role="title" />
                  <Splitting copy={data.subtitle} role="subtitle" />
                </Heading>
                <ItemMeta className={(index + 1) % 2 == 0 ? "invert-meta" : ""}>
                  <ItemMetaRow>
                    <span>Purse Club Rewards</span>
                  </ItemMetaRow>
                </ItemMeta>
                <ItemExcerpt>
                  <Para align="left">{data.body}</Para>
                  <ItemExcerptLink>
                    <span>{data.buttonText}</span>
                  </ItemExcerptLink>
                </ItemExcerpt>

                {/* <ContentHead>
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
                  <ContentButton
                    onClick={showModal}
                    onMouseEnter={() => onCursor("cool")}
                    onMouseLeave={onCursor}
                  >
                    {data.buttonText}
                  </ContentButton>
                </ContentButtonContainer> */}
              </Item>
            </ContentBox>
          );
        })}
      </>
    </WwoWrapper>
  );
};

export default WhatWeOffer;
