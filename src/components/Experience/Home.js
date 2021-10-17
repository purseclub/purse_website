import React, { useEffect, useState } from "react";
import { Wrapper, ImageContainer } from "../../styles/experience/styledHome";
import { createUser, signInUser } from "../../utils/auth";
import Email from "./Email";
import Password from "./Password";
import { navigate } from "gatsby-link";
import { AnimatePresence } from "framer-motion";
import { CustomError } from "../../utils/error";
import {
  useUserDataDispatchContext,
  useUserDataStateContext,
} from "../../context/userDataContext";
import { updatePreviousUserData } from "../../utils/database";

const Home = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [forward, setForward] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordResetSend, setpasswordResetSend] = useState(false);

  const dispatch = useUserDataDispatchContext();
  const state = useUserDataStateContext();

  const [resultFromAuth, setResultFromAuth] = useState({});

  useEffect(() => {
    const len = Object.keys(resultFromAuth).length;

    if (len !== 0) {
      if (resultFromAuth.userCredential === null) {
        // setErrorMessage(res.message);
        if (resultFromAuth.code === "auth/email-already-in-use") {
          signInUser({ ...data })
            .then((result) => {
              if (result.userCredential === null) {
                setIsLoading(false);
                setError(true);
                setpasswordResetSend(false);

                const errmsg = CustomError(result.code);
                setErrorMessage(errmsg);
              } else {
                const User = result.userCredential.user;
                const Uid = User.uid;
                const RefreshToken = User.refreshToken;
                const userEmail = User.email;

                dispatch({
                  type: "USER_CREATED",
                  uid: Uid,
                  refreshToken: RefreshToken,
                  email: userEmail,
                });
                //console.log(state);
                updatePreviousUserData(state);

                setTimeout(() => {
                  navigate("/experience/dashboard", {
                    state: { uid: result.userCredential.user.uid },
                  });
                }, 2000);
              }
            })
            .catch((e) => {
              setError(true);
              const errormsg = CustomError(e);
              setErrorMessage(errormsg);
            });
        }
      } else {
        //console.log("user created");
        //console.log(res.userCredential);
        const User = resultFromAuth.userCredential.user;
        const Uid = User.uid;
        const RefreshToken = User.refreshToken;
        const userEmail = User.email;
        dispatch({
          type: "USER_CREATED",
          uid: Uid,
          refreshToken: RefreshToken,
          email: userEmail,
        });
        navigate("/experience/details");
        setIsLoading(false);
      }
    }
  }, [resultFromAuth, state]);

  //submit form
  const handleForm = async (event) => {
    event.preventDefault();
    if (isPasswordValid) {
      setIsLoading(true);
      await createUser({
        ...data,
      }).then((res) => setResultFromAuth({ ...resultFromAuth, ...res }));
    } else {
      setIsLoading(false);
      setError(true);
      setErrorMessage(
        "password should be 8 character long and must contain atleast 1 uppercase letter, one lowercase letter, one number and one special character"
      );
    }
  };

  return (
    <AnimatePresence>
      <Wrapper>
        {!forward ? (
          <Email
            setData={setData}
            setForward={setForward}
            data={data}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        ) : (
          <Password
            data={data}
            setData={setData}
            handleForm={handleForm}
            forward={forward}
            setForward={setForward}
            setIsChecked={setIsChecked}
            setIsPasswordValid={setIsPasswordValid}
            errorMessage={errorMessage}
            error={error}
            isPasswordValid={isPasswordValid}
            setErrorMessage={setErrorMessage}
            setResultFromAuth={setResultFromAuth}
            isLoading={isLoading}
            setError={setError}
            passwordResetSend={passwordResetSend}
            setpasswordResetSend={setpasswordResetSend}
          />
        )}
        <ImageContainer />
      </Wrapper>
    </AnimatePresence>
  );
};

export default Home;
