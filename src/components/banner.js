import React from "react";
import { Wrapper, H3, Container } from "../styles/bannerStyle";

const Banner = ({ position, rotate, y, x }) => {
  return (
    <>
      <Wrapper
        position={position}
        top={position}
        style={{
          rotate: rotate,
          y: y,
          x: x,
        }}
      >
        <Container>
          <H3>Throw your purse away Throw your purse away</H3>
          <H3>Throw your purse away Throw your purse away </H3>
        </Container>
      </Wrapper>
    </>
  );
};

export default Banner;
