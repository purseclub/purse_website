import { firestore, firebase } from "./firebase";

const setWaitlistedUser = async ({ userEmail }) => {
  await firestore.collection("/waitlisted").add({
    email: userEmail,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export { setWaitlistedUser };
