import React from "react";
import {
  BlackButton,
  Bottom,
  Form,
  Left,
  Title,
} from "../../styles/experience/styledHome";
import Logo from "./Logo";

const leftContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FirstName = ({ forward, setUserDetails, setForward, userDetails }) => {
  //get first name
  const handleFirstNameChange = (event) => {
    setUserDetails({ ...userDetails, firstName: event.target.value.trim() });
  };

  //submit first name form
  const handleFirstNameSubmit = (event) => {
    event.preventDefault();
    setForward(true);
  };

  return (
    <>
      <Left
        forward
        variants={leftContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div>
          <Logo />
          <Title>
            <h1>enter your first name</h1>
          </Title>
          <Form id="form" onSubmit={handleFirstNameSubmit}>
            <input
              type="text"
              required
              placeholder="first name"
              value={userDetails.firstName}
              onChange={handleFirstNameChange}
            />
          </Form>
        </div>
        <Bottom forward>
          <BlackButton
            type="submit"
            form="form"
            valid={userDetails.firstName.length > 1}
          >
            <span>Continue</span>
          </BlackButton>
        </Bottom>
      </Left>
    </>
  );
};

export default FirstName;
