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
import { useInView } from "react-intersection-observer";

const Footer = ({ onCursor }) => {
  const [containerRef, InViewContainer] = useInView({
    threshold: 0.3,
  });
  const boxRef = useRef();
  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const STATIC_DENSITY = 15;

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    if (InViewContainer) {
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
        element: boxRef.current,
        engine: engine,
        options: {
          background: "var(--black)",
          hasBounds: true,
          wireframes: false,
        },
      });

      Render.run(render);
      let runner = Runner.create();
      Runner.run(runner, engine);

      setScene(render);

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

          default:
            return null;
        }
      });

      Composite.add(world, stack);

      Composite.add(world, [
        // walls
        //Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
        Bodies.rectangle(
          boxRef.current.offsetWidth / 2,
          boxRef.current.offsetHeight,
          boxRef.current.offsetWidth,
          1 + STATIC_DENSITY,
          {
            isStatic: true,
          }
        ),
        Bodies.rectangle(
          boxRef.current.offsetWidth,
          boxRef.current.offsetHeight / 2,
          1,
          boxRef.current.offsetHeight,
          {
            isStatic: true,
          }
        ),
        Bodies.rectangle(
          0,
          boxRef.current.offsetHeight / 2,
          1,
          boxRef.current.offsetHeight,
          {
            isStatic: true,
          }
        ),
      ]);

      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });

      Composite.add(world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      setContraints(boxRef.current.getBoundingClientRect());
      window.addEventListener("resize", handleResize);

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
    }
  }, [containerRef, InViewContainer]);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;
    }
  }, [scene, constraints]);

  return (
    <FooterWrapper ref={containerRef}>
      <FallingLetter>
        <Playground ref={boxRef}></Playground>
      </FallingLetter>
      <ActionContainer>
        <div>
          <FooterTagLine>Our work is serious.</FooterTagLine>
          <FooterTagLine line={true}>we are not.</FooterTagLine>
        </div>
        <Legals>
          <LegalTextBox
            onMouseEnter={() => {
              onCursor("hovered");
            }}
            onMouseLeave={() => {
              onCursor();
            }}
          >
            <a href="/terms_and_condition" target="_blank" rel="noopener">
              terms and condition
            </a>
            <div>
              <ArrowSvg fill="none" stroke="var(--white)" />
            </div>
          </LegalTextBox>
          <LegalTextBox
            onMouseEnter={() => {
              onCursor("hovered");
            }}
            onMouseLeave={() => {
              onCursor();
            }}
          >
            <a href="/privacy_policy" target="_blank" rel="noopener">
              privacy policy
            </a>
            <div>
              <ArrowSvg fill="none" stroke="var(--white)" />
            </div>
          </LegalTextBox>
          <LegalTextBox
            onMouseEnter={() => {
              onCursor("hovered");
            }}
            onMouseLeave={() => {
              onCursor();
            }}
          >
            <a
              href="https://github.com/Abhishekucs/gatsby-purse-website"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <div>
              <ArrowSvg fill="none" stroke="var(--white)" />
            </div>
          </LegalTextBox>
        </Legals>
      </ActionContainer>
      <Links>
        <div>
          <a
            href="mailto:support@thepurse.club"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              onCursor("hovered");
            }}
            onMouseLeave={() => {
              onCursor();
            }}
          >
            Report Bug
          </a>
        </div>
        <div>
          <a
            href="mailto:support@thepurse.club"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              onCursor("hovered");
            }}
            onMouseLeave={() => {
              onCursor();
            }}
          >
            contact us
          </a>
        </div>
      </Links>
      <Trademark>© Purse Club, LLP. 2021. We love our users!</Trademark>
    </FooterWrapper>
  );
};

export default Footer;
