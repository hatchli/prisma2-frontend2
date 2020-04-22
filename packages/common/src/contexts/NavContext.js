import React, { useReducer } from "react";

const initialState = {
  isSticky: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isSticky: !state.isSticky,
      };
    default:
      return state;
  }
}
export const NavContext = React.createContext({});

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};
