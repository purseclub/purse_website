import React, { createContext, useContext, useReducer } from "react";
import { user } from "../model/user";

//context
export const UserDataStateContext = createContext({});
export const UserDataDispatchContext = createContext();

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "USER_CREATED": {
      return {
        ...state,
        uid: action.uid,
        refreshToken: action.refreshToken,
        email: action.email,
      };
    }
    case "USER_NAME_CREATED": {
      return {
        ...state,
        userName: {
          ...state.userName,
          firstName: action.firstName,
          lastName: action.lastName,
        },
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

//provider
export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, user);

  return (
    <UserDataDispatchContext.Provider value={dispatch}>
      <UserDataStateContext.Provider value={state}>
        {children}
      </UserDataStateContext.Provider>
    </UserDataDispatchContext.Provider>
  );
};

export const useUserDataStateContext = () => useContext(UserDataStateContext);
export const useUserDataDispatchContext = () =>
  useContext(UserDataDispatchContext);
