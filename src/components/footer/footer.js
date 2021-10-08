import React from "react";
import {
  ActionContainer,
  FallingLetter,
  FooterTagLine,
  FooterWrapper,
  Legals,
  LegalTextBox,
  Links,
  Trademark,
} from "../../styles/footer";
import ArrowSvg from "../arrow";
import MinimalButton from "../button";

const socialLinks = [
  {
    id: 0,

    link: "Terms & Conditions",
    path: "/terms_and_condition",
  },
  {
    id: 1,

    link: "Privacy Policy",
    path: "/privacy_policy",
  },
  {
    id: 2,

    link: "Report Bug",
    path: "#",
  },
  {
    id: 3,
    link: "Contact us",
    path: "mailto:support@thepurse.club",
  },
];

const Footer = ({ onCursor }) => {
  return (
    <FooterWrapper>
      {/* <ActionContainer>
        {socialLinks.map((socialLink, index) => {
          return (
            <SocialLink
              href={socialLink.path}
              key={index}
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              {socialLink.link}
            </SocialLink>
          );
        })}
      </ActionContainer>
      <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark> */}

      <FallingLetter>
        <span>P</span>
      </FallingLetter>
      <ActionContainer>
        <div>
          <FooterTagLine>Our work is serious.</FooterTagLine>
          <FooterTagLine line={true}>we are not.</FooterTagLine>
        </div>
        <Legals>
          <LegalTextBox>
            <a>terms and condition</a>
            <div>
              <ArrowSvg />
            </div>
          </LegalTextBox>
          <LegalTextBox>
            <a>privacy policy</a>
            <div>
              <ArrowSvg />
            </div>
          </LegalTextBox>
        </Legals>
      </ActionContainer>
      <Links>
        <div>
          <a href="#">Report Bug</a>
        </div>
        <div>
          <a href="#">contact us</a>
        </div>
      </Links>
      <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark>
    </FooterWrapper>
  );
};

export default Footer;
