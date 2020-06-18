import React, { useReducer } from "react";
import UserContext from "../../contexts/user-context";

const userActions = { USER_INIT: "USER_INIT" };

const userReducer = (state, action) => {
  switch (action.type) {
    case userActions.USER_INIT:
      return action.payload;
    default:
      return state;
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, null);
  const initUser = (payload) => {
    dispatch({ type: userActions.USER_INIT, payload });
  };
  return (
    <UserContext.Provider value={{ user: state, initUser }}>
      {children}
    </UserContext.Provider>
  );
}
