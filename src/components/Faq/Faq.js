import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
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

const variants = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  animate: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 1.6,
      ease: "easeOut",
    },
  },
};

const Faq = () => {
  const [isActive, setIsActive] = useState(true);
  const [selectedNo, setSelectedNo] = useState(0);

  const refs = useRef([useRef(), useRef()]);

  const getTappedIndex = (index) => {
    setSelectedNo(index);
  };

  useEffect(() => {}, [selectedNo]);

  return (
    <FWrapper>
      <FContainer>
        <FHeading>FAQ</FHeading>
        <Divider />
        {questionAnswers.map((qa, index) => {
          return (
            <QuestionContainer onTap={() => getTappedIndex(index)} key={index}>
              <QcHead>
                <Question>{qa.question}</Question>
                <Arrow>
                  <ArrowSvg fill={"var(--black)"} rotate={"rotate(195deg)"} />
                </Arrow>
              </QcHead>
              {selectedNo === index ? (
                <AnswerContainer
                  variants={variants}
                  initial="hidden"
                  animate="animate"
                >
                  <Answer>{qa.answer}</Answer>
                </AnswerContainer>
              ) : (
                <></>
              )}
            </QuestionContainer>
          );
        })}
      </FContainer>
    </FWrapper>
  );
};

export default Faq;
