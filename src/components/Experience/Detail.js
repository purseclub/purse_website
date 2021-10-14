import React, { useState } from "react";
import {
  BlackButton,
  Bottom,
  Form,
  Left,
  SubTitle,
  Title,
  Wrapper,
} from "../../styles/experience/styledHome";
import { createNewUser } from "../../utils/database";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Logo from "./Logo";
import Pencil from "./Pencil";

const Detail = ({ state }) => {
  //whole user
  const [wholeUser, setWholeUser] = useState({});

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const [forward, setForward] = useState(false);

  //submit last name form
  const handleLastNameSubmit = async (event) => {
    event.preventDefault();
    setWholeUser({
      ...state.user,
      ...userDetails,
    });

    console.log(wholeUser);

    await createNewUser(wholeUser).then(() => console.log("done"));
  };

  return (
    <>
      <Wrapper>
        {!forward ? (
          <FirstName
            forward={forward}
            setForward={setForward}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        ) : (
          <LastName
            forward={forward}
            setForward={setForward}
            userDetails={userDetails}
            handleLastNameSubmit={handleLastNameSubmit}
            setUserDetails={setUserDetails}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Detail;
