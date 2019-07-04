import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer";

export default combineReducers({
  crypto: cryptosReducer
});
