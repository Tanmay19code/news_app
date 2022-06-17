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
} from "../../constants/authTypes.js";
import jwtDecode from "jwt-decode";

const initialState = {
  userDetail: {},
  authtoken: null,
  isAuthenticated: null,
  loading: true,
  auth: null,
  _id: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  let user;

  switch (type) {
    case USER_LOADED:
      // user = jwtDecode(payload?.authtoken);
      console.log("USER_LOADED=>", payload);
      return {
        ...state,
        userDetail: payload,
        isAuthenticated: true,
        loading: false,
        _id: user !== null && user?._id,
        error: "",
      };

    case REGISTER_SUCCESS:
      // user = jwtDecode(payload?.authtoken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        auth: payload,
        token: payload?.authtoken,
        _id: user !== null && user?._id,
      };
    // return { ...state, ...payload };
    case LOGIN_SUCCESS:
      user = jwtDecode(payload?.authtoken);
      return {
        ...state,
        // ...payload,
        isAuthenticated: true,
        loading: false,
        auth: payload,
        token: payload?.authtoken,
        _id: user !== null && user?._id,
      };
    case REGISTER_FAIL:
      return { ...state, loading: false };
    case AUTH_ERROR:
      return { ...state, loading: false };
    case LOGIN_FAIL:
      return { ...state, loading: false };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        auth: null,
        token: null,
        _id: null,
        userDetail: null,
      };
    case SET_LOADING_TRUE: {
      return {
        loading: true,
      };
    }
    case SET_LOADING_FALSE: {
      return {
        loading: false,
      };
    }
    default:
      return { ...state };
  }
}
