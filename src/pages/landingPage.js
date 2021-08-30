import * as React from "react";
import LandingStyle from "../styles/landingPageStyle";
import HeroImage from "../images/hero-image.png";

const LandingPage = () => {
  return (
    <LandingStyle.OverallStyle>
      <LandingStyle.LandingPageStyle>
        <LandingStyle.ParagraphStyle>
          new ways of
          <br />
          storing cards,
          <br />
          that matter to
          <br />
          you
        </LandingStyle.ParagraphStyle>
        <LandingStyle.LandingButton>
          Download Purse Club
        </LandingStyle.LandingButton>
      </LandingStyle.LandingPageStyle>
      <LandingStyle.LandingImage>
        <img src={HeroImage} alt="mobile-preview" height="100%" width="100%" object-fit= "fill"/>
      </LandingStyle.LandingImage>
    </LandingStyle.OverallStyle>
  );
};

export default LandingPage;
