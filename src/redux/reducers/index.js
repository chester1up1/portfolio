import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";
import nav from "./nav";
import secret from "./secret";

export default combineReducers({ i18n: i18nReducer, nav, secret });
