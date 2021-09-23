import React from "react";
import styled from "styled-components";
import { isMobileOnly, isDesktop, is } from "react-device-detect";

const DownloadButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  width: min(25%, 5.375rem);
  border-radius: 50%;
  cursor: pointer;
`;

const Svg = styled.svg`
  padding: 0.75rem;
  /* width: min(25%, 5.375rem); */
`;

export const DownloadButton = ({ click }) => {
  const onButtonClick = () => {
    if (isMobileOnly) {
      alert("Hello");
    }
    if (isDesktop) {
      alert("you are on desktop version");
    }
  };

  return (
    <>
      <DownloadButtonContainer onClick={onButtonClick}>
        <Svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.2498 37.5001H35.7478C35.9378 37.5004 36.1205 37.5728 36.2592 37.7026C36.3978 37.8324 36.4821 38.01 36.4949 38.1995C36.5077 38.389 36.4481 38.5763 36.3282 38.7236C36.2083 38.8709 36.037 38.9672 35.8488 38.9931L35.7478 39.0001H22.2498C22.0584 39.0021 21.8736 38.9308 21.733 38.8008C21.5925 38.6709 21.507 38.4922 21.4939 38.3012C21.4809 38.1103 21.5413 37.9216 21.6629 37.7738C21.7845 37.626 21.958 37.5302 22.1478 37.5061L22.2498 37.5001H35.7478H22.2498ZM28.8828 19.0021L28.9998 18.9951C29.2447 18.9951 29.4812 19.0851 29.6642 19.2478C29.8472 19.4106 29.9642 19.6349 29.9928 19.8781L29.9998 19.9951V32.5851L33.2938 29.2921C33.466 29.1199 33.6951 29.0165 33.9381 29.0012C34.1812 28.9859 34.4214 29.0599 34.6138 29.2091L34.7078 29.2931C34.88 29.4653 34.9834 29.6944 34.9987 29.9374C35.014 30.1805 34.9401 30.4207 34.7908 30.6131L34.7078 30.7071L29.7108 35.7031C29.5388 35.8754 29.3097 35.9791 29.0667 35.9945C28.8237 36.01 28.5833 35.9362 28.3908 35.7871L28.2968 35.7041L23.2928 30.7071C23.1116 30.5276 23.0058 30.2855 22.9971 30.0306C22.9885 29.7756 23.0776 29.527 23.2463 29.3355C23.415 29.1441 23.6504 29.0244 23.9044 29.0009C24.1585 28.9774 24.4119 29.0519 24.6128 29.2091L24.7068 29.2921L27.9998 32.5801V19.9951C27.9998 19.7502 28.0898 19.5138 28.2525 19.3307C28.4153 19.1477 28.6396 19.0308 28.8828 19.0021L28.9998 18.9951L28.8828 19.0021Z"
            fill="#292A2B"
          />
          <circle cx="29" cy="29" r="28" stroke="#292A2B" strokeWidth="2" />
        </Svg>
      </DownloadButtonContainer>
    </>
  );
};
