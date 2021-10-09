import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  ActionContainer,
  FallingLetter,
  FooterTagLine,
  FooterWrapper,
  Legals,
  LegalTextBox,
  Links,
  Playground,
  Trademark,
} from "../../styles/footer";
import ArrowSvg from "../arrow";

//matter.js
import Matter from "matter-js";

const socialLinks = [
  {
    id: 0,

    link: "Terms & Conditions",
    path: "/terms_and_condition",
  },
  {
    id: 1,

    link: "Privacy Policy",
    path: "/privacy_policy",
  },
  {
    id: 2,

    link: "Report Bug",
    path: "#",
  },
  {
    id: 3,
    link: "Contact us",
    path: "mailto:support@thepurse.club",
  },
];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
];

const Footer = ({ onCursor }) => {
  const ref = useRef();

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Common = Matter.Common,
      Composites = Matter.Composites,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({});
    var world = engine.world;

    let render = Render.create({
      element: ref.current,
      engine: engine,
      options: {
        background: "var(--black)",
        hasBounds: true,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
        wireframes: false,
      },
    });

    Render.run(render);
    let runner = Runner.create();
    Runner.run(runner, engine);

    var stack = Composites.stack(5, 5, 4, 10, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));

      // triangles can be a little unstable, so avoid until fixed
      sides = sides === 3 ? 4 : sides;

      // round the edges of some bodies
      var chamfer = null;
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        };
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              { chamfer: chamfer }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              { chamfer: chamfer }
            );
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
          });
      }
    });

    Composite.add(world, stack);

    Composite.add(engine.world, [
      // walls
      //Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(
        ref.current.offsetWidth / 2,
        ref.current.offsetHeight,
        ref.current.offsetWidth,
        1,
        {
          isStatic: true,
        }
      ),
      Bodies.rectangle(
        ref.current.offsetWidth,
        ref.current.offsetHeight / 2,
        1,
        ref.current.offsetHeight,
        {
          isStatic: true,
        }
      ),
      Bodies.rectangle(
        0,
        ref.current.offsetHeight / 2,
        1,
        ref.current.offsetHeight,
        {
          isStatic: true,
        }
      ),
    ]);

    // var mouse = Mouse.create(render.canvas),
    //   mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false,
    //       },
    //     },
    //   });

    // Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    //render.mouse = mouse;

    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, []);

  return (
    <FooterWrapper>
      <FallingLetter>
        <Playground ref={ref}></Playground>
      </FallingLetter>
      <ActionContainer>
        <div>
          <FooterTagLine>Our work is serious.</FooterTagLine>
          <FooterTagLine line={true}>we are not.</FooterTagLine>
        </div>
        <Legals>
          <LegalTextBox>
            <a href="/terms_and_condition" target="_blank" rel="noopener">
              terms and condition
            </a>
            <div>
              <ArrowSvg />
            </div>
          </LegalTextBox>
          <LegalTextBox>
            <a href="/privacy_policy" target="_blank" rel="noopener">
              privacy policy
            </a>
            <div>
              <ArrowSvg />
            </div>
          </LegalTextBox>
          <LegalTextBox>
            <a href="#" target="_blank" rel="noopener">
              github
            </a>
            <div>
              <ArrowSvg />
            </div>
          </LegalTextBox>
        </Legals>
      </ActionContainer>
      <Links>
        <div>
          <a href="#" target="_blank" rel="noopener">
            Report Bug
          </a>
        </div>
        <div>
          <a href="mailto:support@thepurse.club" target="_blank" rel="noopener">
            contact us
          </a>
        </div>
      </Links>
      <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark>
    </FooterWrapper>
  );
};

export default Footer;
