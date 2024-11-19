import {
  FILTERQUERY,
  SEARCHQUERY,
} from "../../Utility/ReduxConstants/SearchConstants/SearchConstants";

const initState = {
  searchQuery: "",
  filterQuery: {
    orientation: "all",
    imageType: "all",
    category: "",
    order: "popular",
    editorsChoice: false,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCHQUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case FILTERQUERY:
      console.log(action.payload, "filterQuery");
      return {
        ...state,
        filterQuery: { ...state.filterQuery, ...action.payload },
      };
    default:
      return state;
  }
};
