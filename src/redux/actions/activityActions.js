import axios from "axios";
import {
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../constants/activityTypes.js";

// Create a new item
export const createItem = (formData) => async (dispatch) => {
  const { urlLink, imgLink, title, description, badge, author, date } =
    formData;
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
    },
  };
  const body = { urlLink, imgLink, title, description, badge, author, date };
  console.log(config, body);
  try {
    const res = await axios.post(
      `http://localhost:5000/api/activity/createitem/`,
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: CREATE_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_ITEM_FAILURE,
      payload: error,
    });
  }
};

// Get all items
export const getAllItems = () => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
    },
  };
  const body = {};
  try {
    const res = await axios.post(
      "http://localhost:5000/api/activity/getitems/",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: FETCH_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ITEMS_FAILURE,
      payload: error,
    });
  }
};

// Delete an item
export const deleteItem = (id) => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
    },
  };
  const body = {
    linkId: id,
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/activity/deleteitem/`,
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_ITEM_FAILURE,
      payload: error,
    });
  }
};
