import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducers";

import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  USER_START_REGISTER,
  USER_SUCCESS_REGISTER,
  USER_ERROR_REGISTER,
  USER_START_LOGIN,
  USER_SUCCESS_LOGIN,
  USER_ERROR_LOGIN,
  USER_LOGOUT,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
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

  //Store user and token in local storage
  const userLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const registerUser = async (currentUser) => {
    dispatch({ type: USER_START_REGISTER });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      //console.log(response);
      const { token, user } = response.data;
      dispatch({ type: USER_SUCCESS_REGISTER, payload: { token, user } });
      //need to set token in local storage
      userLocalStorage({ user, token });
    } catch (error) {
      //console.log(error.response);
      dispatch({ type: USER_ERROR_REGISTER, payload: { msg: error.response.data.msg } });
    }
    hideAlert();
  };

  /* USER LOGIN USER LOGIN USER LOGIN*/
  const loginUser = async (currentUser) => {
    //dispatch({ type: USER_START_LOGIN });
    dispatch({ type: USER_START_LOGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      //console.log(response);
      const { token, user } = data;
      dispatch({
        type: USER_SUCCESS_LOGIN,
        payload: { token, user },
      });
      //need to set token in local storage to persist user login
      userLocalStorage({ user, token });
    } catch (error) {
      //console.log(error.response);
      dispatch({
        type: USER_ERROR_LOGIN,
        payload: { msg: error.response.data.msg },
      });
    }
    hideAlert();
  };

  const logoutUser = () => {
    dispatch({ type: USER_LOGOUT });
    removeUserLocalStorage();
  };

  const updateUser = async (currentUser) => {
    console.log(currentUser);
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser, updateUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
