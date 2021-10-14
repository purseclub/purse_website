import { firestore } from "./firebase";

export const createNewUser = async (user) => {
  console.log(user);
  try {
    await firestore
      .collection("userData")
      .doc(user.uid)
      .set({ ...user })
      .then((value) => console.log(value));
  } catch (e) {
    console.log(e);
  }
};
