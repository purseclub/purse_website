import { navigate } from "gatsby-link";
import { firestore } from "./firebase";

export const createNewUser = async (user) => {
  console.log(user);

  await firestore
    .collection("userData")
    .doc(user.uid)
    .set({ ...user })
    .then(
      navigate("/experience/dashboard", {
        state: { uid: user.uid, email: user.email },
      })
    )
    .catch((e) => console.log(e));
};

export const getUserDetails = async (userId) => {
  let res = {};
  await firestore
    .collection("userData")
    .doc(userId)
    .get()
    .then((snapshot) => {
      res = snapshot.data();
    })
    .catch((e) => console.log(e));

  return res;
};
