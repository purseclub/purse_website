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
      delay: 1.2,
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
      role={role}
      hollow={hollow}
      style={{ y: role === "heading-1" ? y1 : y2 }}
    >
      {copy.split("").map(function (char, index) {
        return (
          <span
            aria-hidden="true"
            key={index}
            className="char"
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
              paddingRight: "0.01em",
              margin: " 0 -0.015em",
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
          </span>
        );
      })}
    </Title>
  );
};

const datas = [
  {
    id: 0,
    text: "digital",
    role: "heading-1",
    hollow: true,
  },
  {
    id: 1,
    text: "storage",
    role: "heading-2",
    hollow: false,
  },
];

const Landing = ({ onCursor }) => {
  const ref = useRef();
  const [divWidth, setDivWidth] = useState(null);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -70]);
  const y2 = useTransform(scrollY, [0, 600], [0, -90]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };

  const spring1 = useSpring(y1, physics);
  const spring2 = useSpring(y2, physics);

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
        <motion.div
          style={{
            overflow: "hidden",
          }}
        >
          <MinimalButton
            variants={buttonMotion}
            buttonText="Experience the app"
            path="/experience/experienceHome"
            onCursor={onCursor}
          />
        </motion.div>
        <SideNote ref={ref} divWidth={divWidth}>
          there's more down below
        </SideNote>
      </LandingContainer>
    </LandingWrapper>
  );
};

export default Landing;
