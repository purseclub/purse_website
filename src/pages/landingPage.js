import * as React from "react";
import LandingStyle from "../styles/landingPageStyle";
import NavigationBar from "../components/navigationBar";
import HeroImage from "../images/iphone-12--black-shadow.png";
import HeroText from "../images/hero-text.svg";

const LandingPage = () => {
  return (
    <>
    <NavigationBar />
    <LandingStyle.OverallStyle>
        <LandingStyle.LandingPageLeft>
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
        </LandingStyle.LandingPageLeft>
        <LandingStyle.LandingPageRight>
          <LandingStyle.RightSection>
              <img src={HeroImage} alt="iphone"/>
              <img src={HeroText} alt="text"/>
          </LandingStyle.RightSection>
        </LandingStyle.LandingPageRight>
    </LandingStyle.OverallStyle>
    </>
  );
};

export default LandingPage;
