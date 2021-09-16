import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import React from "react";
import { useRef, useState, Suspense } from "react";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import conniCard from "../images/card-mockups.png";

const WaveShaderMaterial = shaderMaterial(
  //uniform
  {
    uTime: 0.0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },

  //vertex shader
  glsl`
  precision mediump float;

  uniform float uTime;
  varying float vWave;

  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

  varying vec2 vUv;
    void main() {
        vUv = uv;

        vec3 pos = position;

        float noiseFreq = 1.5;
        float noiseAmp = 0.25;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);

        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    }
  `,

  //fragment shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    varying float vWave;

    varying vec2 vUv;

    uniform sampler2D uTexture;
    void main() {
        float wave = vWave * 0.1;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Conni = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [conniCard]);
  return (
    <mesh>
      <planeGeometry args={[0.6, 0.6, 16, 16]} />
      <waveShaderMaterial uColor={"lightblue"} ref={ref} uTexture={image} />
    </mesh>
  );
};

const Light = () => {
  return (
    <>
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

const Card = () => {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", zIndex: 10 }}>
        <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Conni />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Card;
