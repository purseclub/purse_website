import React, { useEffect } from "react";
import { isLoggedIn } from "../../utils/auth";

const App = () => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       navigate("/experience/dashboard", { state: { uid: uid } });
  //     } else {
  //       navigate("/experience/experienceHome");
  //     }
  //   });

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <>
      <div>Loading...</div>
    </>
  );
};

export default App;
