import { AnimatePresence } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  Answer,
  AnswerContainer,
  Arrow,
  FContainer,
  FHeading,
  FWrapper,
  QcHead,
  Question,
  QuestionContainer,
} from "../../styles/faq";
import { Divider } from "../../styles/whatWeOffer";
import ArrowSvg from "../arrow";

const questionAnswers = [
  {
    question: "What is Purse Club ?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    question: "How can I become a member of Purse Club ?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const transiton = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const textVariant = {
  initial: {
    fontFamily: "var(--font-family-main-Regular)",
    fontWeight: 400,
  },
  animate: {
    fontFamily: "var(--font-family-main-Bold)",
    fontWeight: 700,
    transiton: {
      ...transiton,
    },
  },
};

const variants = {
  hidden: {
    height: "0",
    display: "block",
  },
  animate: {
    height: "auto",
    display: "block",
    transition: {
      ...transiton,
    },
  },
  exit: {
    height: "0",
    display: "block",
    transition: {
      ...transiton,
    },
  },
};

const arrowVariant = {
  initial: {
    fill: "none",
    transform: "rotate(0deg)",
    originX: 0.2,
    originY: 0.2,
  },
  animate: {
    originX: 0.2,
    originY: 0.2,
    fill: "var(--white)",
    transform: "rotate(195deg)",

    transition: {
      ...transiton,
    },
  },
};

const Faq = () => {
  const [selectedNo, setSelectedNo] = useState(0);

  const refs = useRef([useRef(), useRef()]);

  const getTappedIndex = (index) => {
    setSelectedNo(index);
  };

  return (
    <FWrapper>
      <FContainer>
        <FHeading>FAQ</FHeading>
        <Divider width="70%" color={"var(--white)"} />
        <AnimatePresence>
          {questionAnswers.map((qa, index) => {
            return (
              <QuestionContainer
                onTap={() => getTappedIndex(index)}
                key={index}
              >
                <QcHead>
                  <Question
                    key="question"
                    variants={textVariant}
                    initial={selectedNo === index ? "initial" : "animate"}
                    animate={selectedNo === index ? "animate" : "initial"}
                  >
                    {qa.question}
                  </Question>
                  <Arrow>
                    <ArrowSvg
                      variants={arrowVariant}
                      selectedNo={selectedNo}
                      index={index}
                    />
                  </Arrow>
                </QcHead>
                {selectedNo === index ? (
                  <AnswerContainer
                    key="answer"
                    variants={variants}
                    initial="hidden"
                    animate="animate"
                    exit="exit"
                  >
                    <Answer>{qa.answer}</Answer>
                  </AnswerContainer>
                ) : (
                  <></>
                )}
              </QuestionContainer>
            );
          })}
        </AnimatePresence>
      </FContainer>
    </FWrapper>
  );
};

export default Faq;
