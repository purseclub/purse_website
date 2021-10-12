import { useAnimation } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { questionAnswers } from "../../data/data";
import {
  AccordianContainer,
  AnswerContainer,
  Arrow,
  FWrapper,
  QcHead,
  Question,
  QuestionContainer,
} from "../../styles/faq";
import { IntroHeading } from "../../styles/intro";
import { Para } from "../../styles/landing";
import ArrowSvg from "../arrow";

const transiton = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const arrowVariant = {
  initial: {
    fill: "none",
    stroke: "var(--white)",
    transform: "rotate(0deg)",
    transformOrigin: "center",
    transition: {
      ...transiton,
    },
  },
  animate: {
    fill: "var(--white)",
    transformOrigin: "center",
    transform: "rotate(270deg)",
    transition: {
      ...transiton,
    },
  },
};

const Faq = ({ onCursor }) => {
  const [selectedNo, setSelectedNo] = useState(0);
  const [headref, headInView] = useInView({
    threshold: 0,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (headInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });

      //   return controls.stop();
    }

    // return controls.stop();
  }, [headInView, controls]);

  return (
    <>
      <FWrapper>
        <IntroHeading ref={headref} animate={controls}>
          QUESTION ANSWERRR.
        </IntroHeading>
        <AccordianContainer>
          {questionAnswers.map((qa, index) => {
            return (
              <Accordian
                key={index}
                data={qa}
                selectedNo={selectedNo}
                setSelectedNo={setSelectedNo}
                onCursor={onCursor}
              />
            );
          })}
        </AccordianContainer>
      </FWrapper>
    </>
  );
};

const Accordian = ({ data, selectedNo, setSelectedNo, onCursor }) => {
  const isOpen = data.id === selectedNo;
  const [questionRef, questionInView] = useInView({
    threshold: 0,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (questionInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });
    }
  });
  return (
    <QuestionContainer ref={questionRef} animate={controls}>
      <QcHead
        onClick={() => setSelectedNo(isOpen ? false : data.id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <Question>
          0{data.id + 1}. {data.question}
        </Question>
        <Arrow>
          <ArrowSvg
            variants={arrowVariant}
            selectedNo={selectedNo}
            index={data.id}
          />
        </Arrow>
      </QcHead>
      <AnswerContainer
        onMouseEnter={() => onCursor("bar")}
        onMouseLeave={onCursor}
        key="answer"
        animate={{
          height: isOpen ? "100%" : "0",
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {data.id !== 2 ? (
          <Para add={true}>{data.answer}</Para>
        ) : (
          <ul>
            <li
              style={{
                marginBottom: "1em",
              }}
            >
              <Para add={false}>{data.answer.description}</Para>
            </li>
            <li
              style={{
                marginBottom: "0.5em",
              }}
            >
              <Para add={false}>{data.answer.headingOne.heading}</Para>
            </li>
            <li
              style={{
                marginBottom: "1em",
              }}
            >
              <Para add={false}>- {data.answer.headingOne.description}</Para>
            </li>
            <li
              style={{
                marginBottom: "0.5em",
              }}
            >
              <Para add={false}>{data.answer.headingTwo.heading}</Para>
            </li>
            <li>
              <Para add={true}>- {data.answer.headingTwo.description}</Para>
            </li>
          </ul>
        )}
      </AnswerContainer>
    </QuestionContainer>
  );
};

export default Faq;
