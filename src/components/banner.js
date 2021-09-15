import React from "react";
import { Wrapper, H3, Container } from "../styles/bannerStyle";

const Banner = ({ position, rotate, y, x, title, setScrolled }) => {
  return (
    <>
      <Wrapper
        onAnimationComplete={() => setScrolled(true)}
        position={position}
        top={position}
        style={{
          rotate: rotate,

          x: x,
        }}
      >
        <Container>
          <H3>{title}</H3>
          <H3>{title}</H3>
        </Container>
      </Wrapper>
    </>
  );
};

export default Banner;
