import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import {
  useUserDataDispatchContext,
  useUserDataStateContext,
} from "../../context/userDataContext";
import { Wrapper } from "../../styles/experience/styledHome";
import { createNewUser } from "../../utils/database";
import FirstName from "./FirstName";
import LastName from "./LastName";

const Detail = () => {
  const state = useUserDataStateContext();
  const dispatch = useUserDataDispatchContext();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const [forward, setForward] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addToDatabase = async (userDetails) => {
    await createNewUser(userDetails);
  };

  useEffect(() => {
    dispatch({
      type: "USER_NAME_CREATED",
      ...userDetails,
    });
  }, [userDetails]);

  //submit last name form
  const handleLastNameSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    addToDatabase(state);
    //setIsLoading(false);
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
            isLoading={isLoading}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Detail;
