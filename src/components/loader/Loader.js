import React from "react";
import {
  LoaderWrapper,
  Percentage,
  PercentageIndicator,
} from "./styles/StyledLoader";

const Loader = () => {
  return (
    <LoaderWrapper id="preloader">
      <PercentageIndicator>
        <Percentage>80</Percentage>
      </PercentageIndicator>
    </LoaderWrapper>
  );
};

export default Loader;
