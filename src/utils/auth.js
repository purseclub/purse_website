import { auth } from "./firebase";

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
