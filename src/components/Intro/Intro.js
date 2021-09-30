import React from "react";
import { IntroHeading, IntroWrapper } from "../../styles/intro";
import { Para, ParaContainer } from "../../styles/landing";
import { Divider } from "../../styles/whatWeOffer";
import MinimalButton from "../button";

const Intro = ({ showModal, onCursor }) => {
  return (
    <IntroWrapper>
      <IntroHeading>Step into the future.</IntroHeading>
      <Divider color={"var(--black)"} />
      <ParaContainer>
        <Para align="center" top={true}>
          trust as a virtue has consistently played an essential role in every
          great human achievement. and consistently, its importance has been
          overlooked. not just by individuals, but by entire societies. we felt
          it was time someone gave it the spotlight it deserves. especially for
          the ones who live by this virtue: the trustworthy. <br /> <br /> so we
          thought of creating a system that rewards its members for doing good
          and being trustworthy. this way, trust as a virtue becomes something
          to aspire to, just the way it should be. then we went one step ahead:
          we built it. we know we are on the right track because here you are.{" "}
          <br /> <br />
          if you make it to CRED, congratulations and welcome. we have a lot of
          things planned for you.
        </Para>
      </ParaContainer>
      <MinimalButton
        buttonText="Download the app"
        click={showModal}
        onCursor={onCursor}
      />
    </IntroWrapper>
  );
};

export default Intro;
