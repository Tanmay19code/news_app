import { combineReducers } from "redux";
import authReducer from "./authReducers/authReducer";
import activityReducer from "./activityReducers/activityReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  item: activityReducer,
});

export default rootReducer;
