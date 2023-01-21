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
  USER_START_UPDATE,
  USER_SUCCESS_UPDATE,
  USER_ERROR_UPDATE,
  HANDLE_CHANGE,
  CLEAR_FORM_VALUES,
  CODE_START_CREATE,
  CODE_SUCCESS_CREATE,
  CODE_ERROR_CREATE,
  GET_CODES_START,
  GET_CODES_SUCCESS,
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
  // USER UPDATE ACTIONS //
  if (action.type === USER_START_UPDATE) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === USER_SUCCESS_UPDATE) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: "User Profile updated successfully! Redirecting...",
      alertType: "success",
    };
  }
  if (action.type === USER_ERROR_UPDATE) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_FORM_VALUES) {
    const initialState = {
      isisEdit: false,
      editCodeId: "",
      title: "",
      description: "",
      code: "",
      codeStatus: "pending",
    };

    // create code actions
    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === CODE_START_CREATE) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === CODE_SUCCESS_CREATE) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "Code added successfully! Redirecting...",
      alertType: "success",
    };
  }

  if (action.type === CODE_ERROR_CREATE) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }

  if (action.type === GET_CODES_START) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_CODES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      codes: action.payload.codes,
      totalCodes: action.payload.totalCodes,
      numOfPages: action.payload.numOfPages,
    };
  }

  throw new Error(`No action Matching "${action.type}" - action type`);
};

export default reducer;
