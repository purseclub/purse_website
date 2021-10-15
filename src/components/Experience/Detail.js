import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../../styles/experience/styledHome";
import { createNewUser } from "../../utils/database";
import FirstName from "./FirstName";
import LastName from "./LastName";

const Detail = ({ state }) => {
  //whole user
  const [wholeUser, setWholeUser] = useState({});

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const [forward, setForward] = useState(false);

  const addToDatabase = (userDetails) => {
    createNewUser(userDetails);
  };

  useEffect(() => {
    //add to database
    const length = Object.keys(wholeUser).length;
    if (length !== 0) {
      addToDatabase(wholeUser);
    }
  }, [wholeUser]);

  //submit last name form
  const handleLastNameSubmit = (event) => {
    event.preventDefault();
    setWholeUser({
      ...state.user,
      ...userDetails,
    });
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
