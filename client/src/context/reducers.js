import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  USER_START_REGISTER,
  USER_SUCCESS_REGISTER,
  USER_ERROR_REGISTER,
} from "./actions";

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
  throw new Error(`No action Matching "${action.type}" - action type`);
};

export default reducer;
