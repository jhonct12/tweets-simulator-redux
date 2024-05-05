import { combineReducers } from "redux";
import modalReducers from "./modalReducers";
import validationsReducers from "./validationsReducers";
import tweetsReducers from "./tweetsReducers";

export default combineReducers({
  modals: modalReducers,
  validations: validationsReducers,
  tweets: tweetsReducers,
});
