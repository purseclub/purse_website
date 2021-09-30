import React from "react";
import { useState } from "react";
import {
  AnswerContainer,
  Arrow,
  FWrapper,
  QcHead,
  Question,
  QuestionContainer,
} from "../../styles/faq";
import { IntroHeading } from "../../styles/intro";
import { Para } from "../../styles/landing";
import { Divider } from "../../styles/whatWeOffer";
import ArrowSvg from "../arrow";

const questionAnswers = [
  {
    id: 0,
    question: "What is Purse Club ?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 1,
    question: "How can I become a member of Purse Club ?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 2,
    question: "How can I become a member of Purse Club ?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const transiton = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

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
    fill: "var(--black)",
    transform: "rotate(195deg)",
    transition: {
      ...transiton,
    },
  },
};

const Faq = ({ onCursor }) => {
  const [selectedNo, setSelectedNo] = useState(0);

  return (
    <>
      <FWrapper>
        <IntroHeading>Your Majesty</IntroHeading>
        <Divider color={"var(--black)"} />
        <div
          style={{
            marginTop: "10vh",
          }}
        >
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
        </div>
      </FWrapper>
    </>
  );
};

const Accordian = ({ data, selectedNo, setSelectedNo, onCursor }) => {
  const isOpen = data.id === selectedNo;
  return (
    <QuestionContainer>
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
        key="answer"
        animate={{
          height: isOpen ? "100%" : "0",
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Para add={true}>{data.answer}</Para>
      </AnswerContainer>
    </QuestionContainer>
  );
};

export default Faq;
