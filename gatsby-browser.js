import React from "react";

import { GlobalProvider } from "./src/context/globalContext";
import { UserDataProvider } from "./src/context/userDataContext";

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      <UserDataProvider>{element}</UserDataProvider>
    </GlobalProvider>
  );
};

export const onInitialClientRender = () => {
  const loader = document.getElementById("preloader");
  //console.log(loader);
  setTimeout(() => {
    if (loader != null) {
      loader.style.display = "none";
    }
  }, 2400);
};
