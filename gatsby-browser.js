import React from "react";
import { GlobalProvider } from "./src/context/globalContext";

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>;
};

export const onInitialClientRender = () => {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
};
