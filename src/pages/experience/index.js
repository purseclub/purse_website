import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import Loader from "../../components/Experience/Loader";
import { isLoggedIn } from "../../utils/auth";

const App = () => {
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AnimatePresence>
      <ExperienceLayout>
        <Loader />
      </ExperienceLayout>
    </AnimatePresence>
  );
};

export default App;
