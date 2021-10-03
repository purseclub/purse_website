import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import {
  LandingContainer,
  LandingWrapper,
  Para,
  ParaContainer,
  Title,
  TitleContainer,
  TitleTop,
  TitleTopWrapper,
  TitleWrapper,
} from "../../styles/landing";
import MinimalButton from "../button";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const transiton = { duration: 0.8, ease: "easeIn" };

const textMotionVariant = {
  animate: {
    transition: {
      //   delayChildren: 0.8,
      //   staggerChildren: 0.8,
    },
  },
};

const textTopMotion = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    opacity: 1,
    scale: 0.85,
    transition: {
      delay: 0.6,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const textMotion = {
  initial: {
    opacity: 0,
    // scale: 0.85,
  },
  animate: {
    opacity: 1,
    // scale: 1,
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: "easeIn",
    },
  },
};

const paraMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transiton,
      delay: 3.5,
      // duration: 2,
    },
  },
};
const AnimatedMaterial = a(MeshDistortMaterial);

const Box = () => {
  const sphere = useRef();
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [{ wobble }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <ambientLight intensity={0.5} />
        <pointLight position-z={-15} intensity={0.4} color="#F8C069" />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale="0.75"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
          }}
        >
          <sphereBufferGeometry args={[1.3, 64, 64]} />
          <AnimatedMaterial
            color={"#ffffff"}
            envMapIntensity={0.4}
            clearcoat={0.3}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
};

const Landing = ({ onCursor, showModal }) => {
  return (
    <LandingWrapper
      variants={textMotionVariant}
      initial="initial"
      animate="animate"
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "-1",
          width: "100%",
          height: "100vh",
        }}
      >
        <Canvas dpr={[1, 2]}>
          <Box />
        </Canvas>
      </div>
      <LandingContainer>
        <TitleContainer>
          {/* <TitleTopWrapper>
            <TitleTop variants={textTopMotion}> welcome to </TitleTop>
          </TitleTopWrapper> */}
          <TitleWrapper>
            <Title variants={textMotion}>a digital</Title>
          </TitleWrapper>
          <TitleWrapper>
            <Title variants={textMotion}>storage.</Title>
          </TitleWrapper>
          {/* <TitleWrapper>
            <Title variants={textMotion}>your f***ing cards.</Title>
          </TitleWrapper> */}
        </TitleContainer>
        {/* <ParaContainer>
          <Para variants={paraMotion} align="center">
            Experience the app right in the browser. Download when you feel like
            downloading the app.
          </Para>
        </ParaContainer> */}
        <MinimalButton
          variants={paraMotion}
          buttonText="Experience Now"
          path="/experience/experienceHome"
          variants={paraMotion}
          onCursor={onCursor}
        />
      </LandingContainer>
    </LandingWrapper>
  );
};

export default Landing;
