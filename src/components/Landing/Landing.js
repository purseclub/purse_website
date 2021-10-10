import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {
  LandingContainer,
  LandingWrapper,
  SideNote,
  Title,
  TitleContainer,
  TitleWrapper,
} from "../../styles/landing";
import MinimalButton from "../button";

const parentMotion = {
  animate: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.1,
    },
  },
};

const buttonMotion = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 4,
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const textMotion = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const Splitting = ({ copy, role, variants, hollow, y1, y2 }) => {
  return (
    <Title
      aria-label={copy}
      hollow={hollow}
      style={{ y: role === "heading-1" ? y1 : y2 }}
    >
      {copy.split("").map(function (char, index) {
        return (
          <div
            aria-hidden="true"
            key={index}
            className="char"
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.span
              variants={variants}
              style={{
                display: "inline-block",
                willChange: "transform",
              }}
            >
              {char}
            </motion.span>
          </div>
        );
      })}
    </Title>
  );
};

const datas = [
  {
    id: 0,
    text: "modern",
    role: "heading-1",
    hollow: true,
  },
  {
    id: 1,
    text: "container",
    role: "heading-2",
    hollow: false,
  },
];

const Landing = ({ onCursor }) => {
  const ref = useRef();
  const [divWidth, setDivWidth] = useState(null);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -30]);
  const y2 = useTransform(scrollY, [0, 600], [0, -50]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };

  const spring1 = useSpring(y1, physics);
  const spring2 = useSpring(y2, physics);

  //scrollY.onChange((x) => console.log(x));

  useEffect(() => {
    setDivWidth(ref.current.offsetWidth);
  }, []);
  return (
    <LandingWrapper>
      <LandingContainer>
        <TitleContainer>
          {datas.map((data, index) => {
            return (
              <TitleWrapper
                key={index}
                variants={parentMotion}
                initial="initial"
                animate="animate"
                idx={index}
              >
                <Splitting
                  y1={spring1}
                  y2={spring2}
                  variants={textMotion}
                  hollow={data.hollow}
                  copy={data.text}
                  role={data.role}
                />
              </TitleWrapper>
            );
          })}
        </TitleContainer>

        <MinimalButton
          variants={buttonMotion}
          buttonText="Experience the app"
          path="/experience/experienceHome"
          onCursor={onCursor}
        />

        <SideNote
          ref={ref}
          divWidth={divWidth}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 4.5,
              duration: 0.8,
              ease: "easeOut",
            },
          }}
        >
          there's more down below
        </SideNote>
      </LandingContainer>
    </LandingWrapper>
  );
};

export default Landing;
