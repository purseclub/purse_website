import React, { useEffect, useState } from "react";
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
                setErrorMessage(result.message);
                console.log(`signINcode: ${result.code}`);
              } else {
                console.log("signed in");
                const uid = result.userCredential.user.uid;
                const userEmail = result.userCredential.user.email;
                navigate("/experience/dashboard", {
                  state: { uid: uid, email: userEmail },
                });
              }
            })
            .catch((e) => console.log(e));
        }
      } else {
        console.log("user created");
        //console.log(res.userCredential);
        const User = resultFromAuth.userCredential.user;
        const Uid = User.uid;
        const RefreshToken = User.refreshToken;
        const userEmail = User.email;
        navigate("/experience/details", {
          state: {
            user: {
              uid: Uid,
              refreshToken: RefreshToken,
              email: userEmail,
            },
          },
        });
      }
    }
  }, [resultFromAuth]);

  //submit form
  const handleForm = async (event) => {
    event.preventDefault();
    if (isPasswordValid) {
      await createUser({
        ...data,
      }).then((res) => setResultFromAuth({ ...res }));
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
