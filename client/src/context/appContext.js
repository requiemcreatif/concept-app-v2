import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducers";

import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  USER_START_REGISTER,
  USER_SUCCESS_REGISTER,
  USER_ERROR_REGISTER,
} from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
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

  const registerUser = async (currentUser) => {
    dispatch({ type: USER_START_REGISTER });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { token, user } = response.data;
      dispatch({ type: USER_SUCCESS_REGISTER, payload: { token, user } });
      //need to set token in local storage
    } catch (error) {
      console.log(error.response);
      dispatch({ type: USER_ERROR_REGISTER, payload: { msg: error.response.data.msg } });
    }
    hideAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
