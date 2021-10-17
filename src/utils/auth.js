import { navigate } from "gatsby-link";
import { auth } from "./firebase";
export const isBrowser = () => typeof window !== "undefined";

// create user
export const createUser = async ({ email, password }) => {
  const returnValue = {
    userCredential: null,
    message: "",
    code: "",
  };
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    //console.log(userCredential);
    return { ...returnValue, userCredential: userCredential };
  } catch (error) {
    //console.log(error.code);
    return { ...returnValue, message: error.message, code: error.code };
  }
};

//sign in user
export const signInUser = async ({ email, password }) => {
  const returnValue = {
    userCredential: null,
    message: "",
    code: "",
  };
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    //console.log(userCredential);
    return { ...returnValue, userCredential: userCredential };
  } catch (error) {
    //console.log(error.code);
    return { ...returnValue, message: error.message, code: error.code };
  }
};

//password reset
export const setPasswordReset = async (email) => {
  let result = "";

  try {
    await auth.sendPasswordResetEmail(email);
    result = "done";
  } catch (e) {
    console.log(e.code);
  }

  return result;
};

export const isLoggedIn = () => {
  auth.onAuthStateChanged((user) => {
    if (user && isBrowser()) {
      navigate("/experience/dashboard", { state: { uid: user.uid } });
    } else {
      navigate("/experience/experienceHome");
    }
  });
};
