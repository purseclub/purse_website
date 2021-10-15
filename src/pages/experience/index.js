import React, { useEffect, useState } from "react";
import PrivateRoute from "../../components/Experience/PrivateRoute";
import ExperienceHome from "./experienceHome";
import { auth } from "../../utils/firebase";
import { navigate } from "gatsby-link";
import { Router } from "@reach/router";
import { isLoggedIn } from "../../utils/auth";

const App = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      navigate("/experience/dashboard", { state: { uid: uid } });
    } else {
      navigate("/experience/experienceHome");
    }
  });
  return (
    <>
      <div>Loading...</div>
    </>
  );
};

export default App;
