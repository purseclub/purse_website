import React, { createContext, useReducer, useContext } from "react";

//context
const GlobalStateContext = createContext({});
const GlobalDispatchContext = createContext();

//reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//GlobalProvider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    cursorType: false,
    cursorStyles: ["experience", "hovered", "cool", "ring"],
  });
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
