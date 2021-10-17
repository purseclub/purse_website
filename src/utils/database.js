import { navigate } from "gatsby-link";
import { user } from "../model/user";
import { firestore } from "./firebase";
import { firebase } from "./firebase";

export const createNewUser = async (user) => {
  //console.log(user);

  await firestore
    .collection("userData")
    .doc(user.uid)
    .set({
      ...user,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(navigate("/experience/dashboard", { state: { uid: user.uid } }))
    .catch((e) => console.log(e));
};

export const getUserDetails = async (userId) => {
  let res = {};
  //console.log(userId);
  try {
    const snapshot = await firestore.collection("userData").doc(userId).get();
    res = { ...res, ...snapshot.data() };
  } catch (e) {
    console.log(e.code);
  }
  return res;
};

//update previous user data
export const updatePreviousUserData = async (state) => {
  try {
    await firestore
      .collection("userData")
      .doc(state.uid)
      .get()
      .then((snapshot) => {
        const { uid } = snapshot.data();
        if (uid !== undefined) {
          return null;
        } else {
          const { userName } = snapshot.data();
          const userNameArray = userName.split(" ");
          const length = userNameArray.length;
          let userDetails = {};

          if (length > 1) {
            const firstName = userNameArray[0];
            const lastName = userNameArray[1];
            userDetails = {
              ...userDetails,
              ...state,
              userName: {
                ...user.userName,
                firstName: firstName,
                lastName: lastName,
              },
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            };
          } else {
            const firstName = userNameArray[0];
            userDetails = {
              ...userDetails,
              ...state,
              userName: {
                ...user.userName,
                firstName: firstName,
                lastName: "",
              },
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            };
          }

          firestore
            .collection("userData")
            .doc(userDetails.uid)
            .update({
              ...userDetails,
            })
            .then(console.log("updation completed"))
            .catch((e) => console.log(e));
        }
      });
  } catch (error) {
    console.log(error);
  }
};
