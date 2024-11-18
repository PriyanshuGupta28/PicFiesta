import { SEARCHQUERY } from "../../Utility/ReduxConstants/SearchConstants/SearchConstants";

const initState = {
  searchQuery: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCHQUERY:
      console.log(action.payload, "GETCURRENTLOCATION");
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
