import React, { useReducer } from "react";

const initialState = {
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    case "INAUTH":
      return {
        ...state,
        isAuth: false,
      };
    case "AUTH":
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
}
export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
