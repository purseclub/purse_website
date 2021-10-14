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
import { checkPasswordValid } from "../../utils/home";
import Logo from "./Logo";
import Pencil from "./Pencil";

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
}) => {
  //const [errorCode, setErrorCode] = useState("");

  //update password input by user
  const handlePasswordChange = (event) => {
    setData({ ...data, password: event.target.value.trim() });
    if (checkPasswordValid(data.password)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  // handle pencil button
  const handleEdit = () => {
    setForward(false);
    setData({ ...data, email: "", password: "" });
    setIsChecked(false);
    setErrorMessage("");
  };

  return (
    <Left forward>
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
        {error && (
          <Consent error>
            <span>{errorMessage}</span>
          </Consent>
        )}
        {data.password.length > 1 && (
          <Consent>
            <span>
              forgot password ? <a href="#">Reset here</a>
            </span>
          </Consent>
        )}
        <BlackButton type="submit" form="form-2" valid={isPasswordValid}>
          <span>Continue</span>
        </BlackButton>
      </Bottom>
    </Left>
  );
};

export default Password;
