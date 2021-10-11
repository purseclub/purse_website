import React from "react";
import { useState } from "react";
import {
  CrossContainer,
  CrossContainerSvg,
  ErrorMsg,
  MobileInput,
  MobileInputContainer,
  ModalContainer,
  ModalSubtitle,
  ModalTitle,
  ModalWrapper,
  SubmitButtonContainer,
  SubmitSvg,
} from "../../styles/modal/modalStyle";
import CircularLoading from "./circularLoading";
import MailSent from "./mailSent";
import { setWaitlistedUser } from "../../utils/waitlisted";
import { AnimatePresence } from "framer-motion";

const Modal = ({ hide }) => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const checkEmailValid = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const getInputValue = (e) => {
    const email = e.target.value;
    setInputValue(email);

    if (checkEmailValid(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleSubmit = () => {
    const trimedEmail = inputValue.trim();
    const result = checkEmailValid(trimedEmail);

    if (result) {
      setIsLoading(true);
      setIsEmailValid(true);

      //   sendMail(trimedEmail);

      setWaitlistedUser({
        userEmail: inputValue,
      }).then(
        setTimeout(() => {
          setIsMailSent(true);
        }, 3000)
      );
    }
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <CrossContainer onClick={hide}>
          <CrossSvg />
        </CrossContainer>
        <ModalTitle>
          Thank you for showing interest in us. We are currently open to few
          customers only.
        </ModalTitle>
        <ModalSubtitle>
          Join our premium waiting list and get a chance to win latest iphone 13
          and macbook pro.
        </ModalSubtitle>
        <AnimatePresence>
          {inputValue.length > 0 ? (
            !isEmailValid ? (
              <ErrorMsg
                key="errorMsg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Email Id is not valid
              </ErrorMsg>
            ) : null
          ) : null}
        </AnimatePresence>

        {isMailSent ? (
          <MailSent />
        ) : (
          <MobileInputContainer>
            <MobileInput
              placeholder="enter your email id here"
              type="email"
              value={inputValue}
              onChange={getInputValue}
              required
            />
            {isLoading ? (
              <SubmitButtonContainer>
                <CircularLoading />
              </SubmitButtonContainer>
            ) : (
              <SubmitButtonContainer onClick={handleSubmit}>
                <SubmitButton />
              </SubmitButtonContainer>
            )}
          </MobileInputContainer>
        )}
      </ModalContainer>
    </ModalWrapper>
  );
};

const CrossSvg = () => {
  return (
    <CrossContainerSvg
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
        fill="var(--black)"
      />
      <rect
        x="11"
        y="26.9998"
        width="24"
        height="2"
        transform="rotate(-45 11 26.9998)"
        fill="var(--black)"
      />
    </CrossContainerSvg>
  );
};

const SubmitButton = () => {
  return (
    <SubmitSvg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.5748" cy="17.5748" r="17.5748" fill="var(--black)" />
      <path
        d="M14.5 11.7109L20.0807 17.2917L14.5 22.8724"
        stroke="var(--white)"
        strokeWidth="1.44817"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SubmitSvg>
  );
};

export default Modal;
