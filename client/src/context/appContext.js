import React, { useState, useReducer, useContext } from "react";

import reducer from "./reducers";

import { DISPLAY_ALERT, HIDE_ALERT } from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (text, type) => {
    dispatch({ type: DISPLAY_ALERT, payload: { text, type } });
    hideAlert();
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  return <AppContext.Provider value={{ ...state, displayAlert }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
