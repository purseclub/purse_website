import React, { useEffect } from "react";
import { isLoggedIn } from "../../utils/auth";

const App = () => {
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
