import React from "react";
import {
  BlackButton,
  Bottom,
  Form,
  Left,
  SubTitle,
  Title,
} from "../../styles/experience/styledHome";
import Loader from "./Loader";
import Logo from "./Logo";
import Pencil from "./Pencil";

const LastName = ({
  forward,
  userDetails,
  setForward,
  handleLastNameSubmit,
  setUserDetails,
  isLoading,
}) => {
  //get last name
  const handleLastNameChange = (event) => {
    setUserDetails({ ...userDetails, lastName: event.target.value.trim() });
  };

  //handle name edit
  const handleNameEdit = () => {
    setForward(false);
    setUserDetails({
      ...userDetails,
      firstName: "",
      lastName: "",
    });
  };
  return (
    <>
      <Left forward>
        <div>
          <Logo />
          <Title>
            <h1>last one, enter your last name</h1>
          </Title>
          <SubTitle>
            <h2>
              <span>
                {userDetails.firstName} {userDetails.lastName}
              </span>{" "}
              <Pencil handleEdit={handleNameEdit} />
            </h2>
          </SubTitle>
          <Form id="form-2" onSubmit={handleLastNameSubmit}>
            <input
              type="text"
              required
              placeholder="last name"
              value={userDetails.lastName}
              onChange={handleLastNameChange}
            />
          </Form>
        </div>
        <Bottom forward>
          <BlackButton
            type="submit"
            form="form-2"
            valid={userDetails.lastName.length > 1}
          >
            {isLoading ? <Loader small /> : <span>let's go</span>}
          </BlackButton>
        </Bottom>
      </Left>
    </>
  );
};

export default LastName;
