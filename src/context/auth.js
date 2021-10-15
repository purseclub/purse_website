import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

//context
export const AuthContext = createContext({});

//provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
