import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer/HomeReducer";
import NavLinksReducer from "./NavLinksReducer/NavLinksReducer";
import SearchReducer from "./SearchReducer/SearchReducer";

export const reducer = combineReducers({
  home: HomeReducer,
  navLinks: NavLinksReducer,
  searchQuery: SearchReducer,
});
