import React from "react";
import {
  BlackButton,
  Bottom,
  Consent,
  Form,
  Left,
  SubTitle,
  Title,
} from "../../styles/experience/styledHome";
import { setPasswordReset } from "../../utils/auth";
import { checkPasswordValid } from "../../utils/home";
import Loader from "./Loader";
import Logo from "./Logo";
import Pencil from "./Pencil";

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

const consentVariants = {
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

const Password = ({
  data,
  setData,
  handleForm,
  setForward,
  setIsChecked,
  setIsPasswordValid,
  errorMessage,
  error,
  setErrorMessage,
  isPasswordValid,
  isLoading,
  setResultFromAuth,
  setError,
  setpasswordResetSend,
  passwordResetSend,
}) => {
  //update password input by user
  const handlePasswordChange = (event) => {
    setData({ ...data, password: event.target.value.trim() });
    if (checkPasswordValid(data.password)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  //handle password reset
  const handleReset = async () => {
    setError(false);
    const { email } = data;
    const res = await setPasswordReset(email);
    if (res === "done") {
      setpasswordResetSend(true);
    }
  };

  // handle pencil button
  const handleEdit = () => {
    setForward(false);
    setData({ ...data, email: "", password: "" });
    setIsChecked(false);
    setErrorMessage("");
    setResultFromAuth({});
  };

  return (
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
          <h1>enter your password</h1>
        </Title>
        <SubTitle>
          <h2>
            for <span>{data.email}</span> <Pencil handleEdit={handleEdit} />
          </h2>
        </SubTitle>
        <Form id="form-2" onSubmit={handleForm}>
          <input
            type="password"
            required
            placeholder="password"
            value={data.password}
            onChange={handlePasswordChange}
          />
        </Form>
      </div>
      <Bottom forward>
        {passwordResetSend && (
          <Consent
            reset
            variants={consentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span>password reset link is send to the above email address.</span>
          </Consent>
        )}
        {error && (
          <Consent
            error
            variants={consentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span>{errorMessage}</span>
          </Consent>
        )}
        {data.password.length > 1 && (
          <Consent
            variants={consentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span>
              forgot password ?{" "}
              <div
                onClick={handleReset}
                onKeyDown={handleReset}
                role="button"
                tabIndex={0}
              >
                Reset here
              </div>
            </span>
          </Consent>
        )}
        <BlackButton type="submit" form="form-2" valid={isPasswordValid}>
          {isLoading ? <Loader small /> : <span>Continue</span>}
        </BlackButton>
      </Bottom>
    </Left>
  );
};

export default Password;
