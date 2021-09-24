import React from "react";
import {
  MailSentContainer,
  MailSentContentBox,
  MailSentContentHeading,
  MailSentContentSubtitle,
} from "../../styles/modal/mailSentStyle";
import TickBox from "./TickBox";

const transition = { duration: 1.6, ease: [0.25, 1, 0.5, 1] };

const mailSentVariant = {
  initial: {},
  animate: {
    transition: {
      //   delayChildren: 1,
      staggerChildren: 0.6,
    },
  },
};

const mailSentContentBoxVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transition,
    },
  },
};

const tickBoxVariant = {
  initial: {
    x: "68%",
    opacity: 0.8,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      ...transition,
    },
  },
};

const MailSent = () => {
  return (
    <MailSentContainer
      variants={mailSentVariant}
      initial="initial"
      animate="animate"
    >
      <TickBox variants={tickBoxVariant} />
      <MailSentContentBox variants={mailSentContentBoxVariant}>
        <MailSentContentHeading>
          You are added to our premium waiting list.
        </MailSentContentHeading>
        <MailSentContentSubtitle>check your inbox</MailSentContentSubtitle>
      </MailSentContentBox>
    </MailSentContainer>
  );
};

export default MailSent;
