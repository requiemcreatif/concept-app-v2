import { DISPLAY_ALERT, HIDE_ALERT } from "./actions";

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
  throw new Error(`No action Matching "${action.type}" - action type`);
};

export default reducer;
