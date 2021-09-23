import React from "react";
import {
  CrossContainer,
  Left,
  MobileInput,
  MobileInputContainer,
  ModalContainer,
  ModalSubtitle,
  ModalSubtitleStrong,
  ModalTitle,
  ModalWrapper,
  PreNum,
  Right,
} from "../../styles/modal/modalStyle";

const Modal = ({ hide }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <CrossContainer onClick={hide}>
          <CrossSvg />
        </CrossContainer>
        <Left>
          <ModalTitle>
            enter your phone number to get the link via SMS.
          </ModalTitle>
          <ModalSubtitle>
            alternatively,
            <ModalSubtitleStrong> scan QR code</ModalSubtitleStrong>
          </ModalSubtitle>
          <MobileInputContainer>
            <PreNum>+91</PreNum>
            <MobileInput placeholder="9876543210" />
          </MobileInputContainer>
        </Left>
        <Right></Right>
      </ModalContainer>
    </ModalWrapper>
  );
};

const CrossSvg = () => {
  return (
    <svg
      width="40"
      height="38"
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="10"
        width="24"
        height="2"
        transform="rotate(45 12 10)"
        fill="#E0DFDB"
      />
      <rect
        x="11"
        y="26.9998"
        width="24"
        height="2"
        transform="rotate(-45 11 26.9998)"
        fill="#E0DFDB"
      />
      <path
        d="M0 0V-1H-1V0H0ZM40 0H41V-1H40V0ZM40 38V39H41V38H40ZM0 38H-1V39H0V38ZM0 1H40V-1H0V1ZM39 0V38H41V0H39ZM40 37H0V39H40V37ZM1 38V0H-1V38H1Z"
        fill="#292A2B"
      />
    </svg>
  );
};

export default Modal;
