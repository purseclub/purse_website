import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerLink,
} from "../styles/banner_style";

const bannerContainerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Banner = ({ onCursor, click }) => {
  return (
    <>
      <BannerContainer
        variants={bannerContainerVariant}
        initial="initial"
        animate="animate"
      >
        <BannerContent>
          <p>
            This holiday season get a chance to win iphone 13 and Macbook pro
            <span
              role="img"
              aria-label="star-struck"
              style={{ paddingLeft: "0.25rem" }}
            >
              🤩.
            </span>
            <BannerLink
              onMouseEnter={() => {
                onCursor("hovered");
              }}
              onMouseLeave={() => {
                onCursor();
              }}
            >
              <button onClick={click}>Register Here</button>
              <svg
                width="5"
                height="9"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.00002 4.8787L1.01013 0.950195L0 1.96033L2.95032 4.95658L0.00146387 7.98975L1.0116 8.99988L5.00103 5.0207L4.92952 4.94919L5.00002 4.8787Z"
                  fill="white"
                />
              </svg>
            </BannerLink>
          </p>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner;
