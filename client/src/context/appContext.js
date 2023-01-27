import React, { useReducer, useContext } from "react";
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
  SET_EDIT_CODE,
  DELETE_CODE_START,
  CODE_START_EDIT,
  CODE_SUCCESS_EDIT,
  CODE_ERROR_EDIT,
  CHANGE_PAGE,
  // GET_ALL_CODES,
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
  isEdit: false,
  editCodeId: "",
  title: "",
  description: "",
  code: "",
  languageOptions: ["JavaScript", "HTML", "css", "React", "Node", "Express", "MongoDB"],
  language: "JavaScript",
  codeStatusOptions: ["rejected", "approved", "pending"],
  codeStatus: "pending",
  codes: [],
  totalCodes: 0,
  numOfPages: 1,
  page: 1,
  search: "",
  searchQuery: "",
  sortBy: "createdAt:desc",
  sortQuery: "",
  codeStatusQuery: "",
  languageQuery: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Set up Axios
  const authAxios = axios.create({
    baseURL: "/api/v1",
    // headers: {
    //   Authorization: `Bearer ${state.token}`,
    // },
  });

  //Set up Axios Interceptors Request
  authAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //Set up Axios Interceptors Response
  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response); //
      if (error.response.status === 401) {
        logoutUser();
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

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

  //LOGUOT USER LOGOUT USER LOGOUT//
  const logoutUser = () => {
    dispatch({ type: USER_LOGOUT });
    removeUserLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: USER_START_UPDATE });
    try {
      const { data } = await authAxios.patch("/auth/updateUser", currentUser);
      //const {data} = await axios.get("/api/v1/auth/me");
      //console.log(data);
      const { token, user } = data;
      dispatch({
        type: USER_SUCCESS_UPDATE,
        payload: { token, user },
      });
      userLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: USER_ERROR_UPDATE,
          payload: { msg: error.response.data.msg },
        });
        console.log("AUTH ERROR");
      }
      //console.log(error.response); //
    }
    hideAlert();
  };

  const handleChange = ({ name, value }) => {
    //const { name, value } = e.target;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearFormValues = () => {
    dispatch({ type: CLEAR_FORM_VALUES });
  };

  const createCode = async () => {
    dispatch({ type: CODE_START_CREATE });
    try {
      const { title, description, code, language, codeStatus } = state;
      await authAxios.post("/codes", { title, description, code, language, codeStatus });
      dispatch({ type: CODE_SUCCESS_CREATE });
      dispatch({ type: CLEAR_FORM_VALUES });
      //console.log(data);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CODE_ERROR_CREATE,
        payload: { msg: error.response.data.msg },
      });
    }
    hideAlert();
  };

  const getCodes = async () => {
    let url = `/codes`;
    dispatch({ type: GET_CODES_START });

    try {
      const { data } = await authAxios(url);
      const { codes, totalCodes, numOfPages } = data;
      dispatch({ type: GET_CODES_SUCCESS, payload: { codes, totalCodes, numOfPages } });
    } catch (error) {
      console.log(error.response);
      //logoutUser();
    }
    hideAlert();
  };

  // get all codes from all users
  const getAllCodes = async () => {
    const { page } = state;
    let url = `/codes/all?page=${page}`;
    dispatch({ type: GET_CODES_START });

    try {
      const { data } = await authAxios(url);
      const { codes, totalCodes, numOfPages } = data;
      dispatch({ type: GET_CODES_SUCCESS, payload: { codes, totalCodes, numOfPages } });
    } catch (error) {
      console.log(error.response);
      //logoutUser();
    }
    hideAlert();
  };

  const setEditCode = (id) => {
    dispatch({ type: SET_EDIT_CODE, payload: { id } });
  };

  const editCode = async () => {
    dispatch({ type: CODE_START_EDIT });
    try {
      const { title, description, code, language, codeStatus } = state;
      await authAxios.patch(`/codes/${state.editCodeId}`, {
        title,
        description,
        code,
        language,
        codeStatus,
      });
      dispatch({ type: CODE_SUCCESS_EDIT });
      dispatch({ type: CLEAR_FORM_VALUES });

      //console.log(data);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CODE_ERROR_EDIT,
        payload: { msg: error.response.data.msg },
      });
    }
    hideAlert();
  };
  //DELETE CODE DELETE CODE DELETE CODE//
  const deleteCode = async (codeId) => {
    console.log("Delete function is called");
    dispatch({ type: DELETE_CODE_START });
    console.log(codeId + " from app context");
    try {
      await authAxios.delete(`/codes/${codeId}`);
      getCodes();
    } catch (error) {
      console.log(error.response);
      //logoutUser();
    }
  };

  //PAGE CHANGE PAGE CHANGE PAGE CHANGE//
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        updateUser,
        logoutUser,
        handleChange,
        clearFormValues,
        createCode,
        getCodes,
        deleteCode,
        setEditCode,
        editCode,
        getAllCodes,
        changePage,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
