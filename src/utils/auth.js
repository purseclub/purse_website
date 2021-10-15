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

export const isLoggedIn = () => {
  auth.onAuthStateChanged((user) => {
    if (user && isBrowser()) {
      const uid = user.uid;
      navigate("/experience/dashboard", { state: { uid: uid } });
    } else {
      navigate("/experience/experienceHome");
    }
  });
};
