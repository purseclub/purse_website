import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
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

const transiton = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

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
    opacity: 0,
    // display: "none",
    originX: 0,
    originY: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    // display: "block",
    originX: 0,
    originY: 0,
    transition: {
      ...transiton,
      duration: 0.6,
    },
  },
  exit: {
    height: "0",
    opacity: 0,
    // display: "none",
    originX: 0,
    originY: 0,
    transition: {
      ...transiton,
      duration: 0.6,
    },
  },
};

const arrowVariant = {
  initial: {
    fill: "none",
    transform: "rotate(15deg)",
    originX: 0.2,
    originY: 0.2,
    transition: {
      ...transiton,
    },
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

  const getTappedIndex = (index) => {
    setSelectedNo(index);
  };

  return (
    <AnimateSharedLayout>
      <FWrapper>
        <FContainer>
          <FHeading>FAQ</FHeading>
          <Divider width="70%" color={"var(--white)"} />

          {questionAnswers.map((qa, index) => {
            return (
              <QuestionContainer
                onClick={() => getTappedIndex(index)}
                key={index}
                layout
              >
                <QcHead>
                  <Question
                    key="question"
                    variants={textVariant}
                    initial={selectedNo === index ? "initial" : "animate"}
                    animate={selectedNo === index ? "animate" : "initial"}
                    layout
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
                <AnimatePresence>
                  {selectedNo === index ? (
                    <AnswerContainer
                      layout
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
                </AnimatePresence>
              </QuestionContainer>
            );
          })}
        </FContainer>
      </FWrapper>
    </AnimateSharedLayout>
  );
};

export default Faq;
