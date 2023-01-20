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

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide all the values!",
      alertType: "danger",
    };
  }
  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === USER_START_REGISTER) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === USER_SUCCESS_REGISTER) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: "User registered successfully! Redirecting...",
      alertType: "success",
    };
  }

  if (action.type === USER_ERROR_REGISTER) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  // USER LOGIN ACTIONS //
  if (action.type === USER_START_LOGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === USER_SUCCESS_LOGIN) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: " User logged in successfully! Redirecting..",
      alertType: "success",
    };
  }

  if (action.type === USER_ERROR_LOGIN) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  throw new Error(`No action Matching "${action.type}" - action type`);
};

export default reducer;
