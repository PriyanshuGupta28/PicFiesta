import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer/HomeReducer";
import NavLinksReducer from "./NavLinksReducer/NavLinksReducer";

export const reducer = combineReducers({
  home: HomeReducer,
  navLinks: NavLinksReducer,
});
