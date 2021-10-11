import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  MailSentContainer,
  MailSentContentBox,
  MailSentContentHeading,
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
  const tickRef = useRef();
  const [tickWidth, setTickWidth] = useState(null);
  useEffect(() => {
    setTickWidth(tickRef.current.offsetHeight);
    //console.log(`width: ${tickWidth}`);
    //console.log(tickRef.current.offsetHeight);
  }, [tickWidth]);

  return (
    <MailSentContainer
      ref={tickRef}
      variants={mailSentVariant}
      initial="initial"
      animate="animate"
    >
      <TickBox variants={tickBoxVariant} />
      <MailSentContentBox
        variants={mailSentContentBoxVariant}
        tickWidth={tickWidth}
      >
        <MailSentContentHeading>
          You are added to our premium waiting list.
        </MailSentContentHeading>
      </MailSentContentBox>
    </MailSentContainer>
  );
};

export default MailSent;
