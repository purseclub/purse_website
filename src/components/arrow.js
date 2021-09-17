import React from "react";
import styled from "styled-components";

const ArrowSvg = () => {
  const Svg = styled.svg`
    width: 16px;
    height: 18px;
    margin-bottom: -4px;

    @media screen and (min-width: 375px) {
      width: 18px;
      height: 19px;
    }
    @media screen and (min-width: 768px) {
      width: 72px;
      height: 72px;
    }
  `;

  return (
    <Svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.4961 36.2039L36.4563 11.8676C36.241 11.682 35.9664 11.5781 35.677 11.5781H29.1086C28.5594 11.5781 28.307 12.2609 28.7227 12.6172L54.7141 35.1797H11.2812C10.9547 35.1797 10.6875 35.4469 10.6875 35.7734V40.2266C10.6875 40.5531 10.9547 40.8203 11.2812 40.8203H54.7066L28.7152 63.3828C28.2996 63.7465 28.552 64.4219 29.1012 64.4219H35.8922C36.0332 64.4219 36.1742 64.3699 36.2781 64.2734L64.4961 39.7961C64.753 39.5727 64.959 39.2967 65.1002 38.9869C65.2414 38.677 65.3144 38.3405 65.3144 38C65.3144 37.6595 65.2414 37.323 65.1002 37.0131C64.959 36.7033 64.753 36.4273 64.4961 36.2039V36.2039Z"
        fill="#fbfbfb"
      />
    </Svg>
  );
};

export default ArrowSvg;
