import React, { useState } from "react";
import { Wrapper, ImageContainer } from "../../styles/experience/styledHome";
import { createUser, signInUser } from "../../utils/auth";
import Email from "./Email";
import Password from "./Password";
import { navigate } from "gatsby-link";

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

  //submit form
  const handleForm = async (event) => {
    event.preventDefault();
    if (isPasswordValid) {
      const res = await createUser({
        ...data,
      });

      if (res.userCredential === null) {
        // setErrorMessage(res.message);
        if (res.code === "auth/email-already-in-use") {
          const result = await signInUser({ ...data });
          if (result.userCredential === null) {
            setErrorMessage(result.message);
            console.log(`signINcode: ${result.code}`);
          } else {
            console.log("signed in");
            console.log(result.userCredential);
            navigate("/experience/dashboard", { state: {} });
          }
        }
      } else {
        console.log("user created");
        //console.log(res.userCredential);
        const User = res.userCredential.user;
        const Uid = User.uid;
        const RefreshToken = User.refreshToken;
        navigate("/experience/details", {
          state: {
            user: {
              uid: Uid,
              refreshToken: RefreshToken,
            },
          },
        });
      }
    } else {
      setError(true);
      setErrorMessage(
        "password should be 8 character long and must contain atleast 1 uppercase letter, one lowercase letter, one number and one special character"
      );
    }
  };

  return (
    <>
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
          />
        )}
        <ImageContainer />
      </Wrapper>
    </>
  );
};

export default Home;
