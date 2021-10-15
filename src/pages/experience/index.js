import React, { useEffect } from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import Loader from "../../components/Experience/Loader";
import { isLoggedIn } from "../../utils/auth";

const App = () => {
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <ExperienceLayout>
        <Loader />
      </ExperienceLayout>
    </>
  );
};

export default App;
