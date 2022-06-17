import {
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../../constants/activityTypes.js";

const initialState = {
  itemsDetail: {},
  fetchedItems: [],
  loading: false,
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        itemsDetail: payload,
        message: "",
      };
    case CREATE_ITEM_FAILURE:
      return {
        ...state,
        message: payload,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetchedItems: payload,
        message: "",
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        fetchedItems: [],
        message: payload,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        fetchedItems: payload,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        fetchedTasks: [],
        message: payload,
      };
    default:
      return state;
  }
}
