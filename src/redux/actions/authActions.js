import axios from "axios";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from "../constants/authTypes";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.token;
  // console.log(authtoken);
  const body = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/getuser",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const { name, email, password } = formData;
  const body = {
    name,
    email,
    password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  console.log("SIGN_RES=>", body);
  try {
    console.log("CHECK1");
    const res = await axios.post(
      "http://localhost:5000/api/auth/createuser",
      body,
      config
    );
    console.log("CHECK2");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (error) {
    // const { errors } = err.response.data;
    console.log("SIGN_ERR=>", error);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
      
    },
  };

  const body = JSON.stringify({ email, password });

  // try {
  const res = await axios.post(
    "http://localhost:5000/api/auth/login",
    body,
    config
  );

  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data,
  });

  // localStorage.setItem('token', res.data.token);

  // dispatch(loadUser());
  // }
  // catch (error) {
  //   const { errors } = error.response.data;

  //   // if (errors) {
  //   //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
  //   // }

  //   dispatch({
  //     type: LOGIN_FAIL,
  //   });
  // }
};

// Logout / Clear Profile

export const logout = () => (dispatch) => {
  // localStorage.setItem("state", null);
  console.log("logged out");
  dispatch({ type: LOGOUT });
};

export const setLoadingTrue = () => (dispatch) => {
    // console.log("Loading action true");
    dispatch({
      type: SET_LOADING_TRUE,
      payload: "Loading set to TRUE",
    });
  
};

export const setLoadingFalse = () => (dispatch) => {
    // console.log("Loading action false");
    dispatch({
      type: SET_LOADING_FALSE,
      payload: "Loading set to FALSE",
    });
  
};
