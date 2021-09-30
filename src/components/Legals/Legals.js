import React from "react";
import {
  ActionContainer,
  LegalWrapper,
  SocialLink,
  Trademark,
} from "../../styles/legals";

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

const Legals = ({ onCursor }) => {
  return (
    <LegalWrapper>
      <ActionContainer>
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
      <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark>
    </LegalWrapper>
  );
};

export default Legals;
