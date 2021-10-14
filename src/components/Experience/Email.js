import React, { useEffect, useState } from "react";
import {
  BlackButton,
  Bottom,
  CheckBoxContainer,
  Consent,
  Form,
  Left,
  SubTitle,
  Title,
} from "../../styles/experience/styledHome";
import { checkEmailValid } from "../../utils/home";
import Check from "./Check";
import Logo from "./Logo";

const Email = ({ setData, setForward, isChecked, data, setIsChecked }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //submit email
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid && isChecked) {
      //alert("A name was submitted: " + data.email);
      setForward(true);
    }
  };

  //update email input by user
  const handleEmailChange = (event) => {
    setData({ ...data, email: event.target.value.trim() });
    if (checkEmailValid(event.target.value.trim())) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  //handle checkbox
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const handleActive = () => {
      if (isChecked && isEmailValid) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    handleActive();
  }, [isEmailValid, isChecked]);
  return (
    <Left>
      <div>
        <Logo />
        <Title>
          <h1>enter your email id</h1>
        </Title>
        <SubTitle>
          <h2>used for creating your account</h2>
        </SubTitle>
        <Form id="form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="cool@thepurse.club"
            value={data.email}
            onChange={handleEmailChange}
          />
        </Form>
      </div>
      <Bottom>
        <CheckBoxContainer onClick={handleCheckBox}>
          <div>{isChecked && <Check />}</div>
        </CheckBoxContainer>
        <Consent>
          <span>
            upon agreeing, you are indicating that you have read and agree to
            our{" "}
            <a href="/terms_and_condition" target="_blank">
              terms &amp; conditons
            </a>{" "}
            and{" "}
            <a href="/privacy_policy" target="_blank">
              privacy policy
            </a>
          </span>
        </Consent>
        <BlackButton type="submit" form="form" valid={isActive}>
          <span>Agree &amp; Continue</span>
        </BlackButton>
      </Bottom>
    </Left>
  );
};

export default Email;
