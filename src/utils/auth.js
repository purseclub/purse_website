import { auth } from "./firebase";

export const createUser = ({ email, password }) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => console.log(userCredential))
    .catch((error) => console.log(error));
};

export const signInUser = ({ email, password }) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => console.log(userCredential))
    .catch((error) => console.log(error));
};
