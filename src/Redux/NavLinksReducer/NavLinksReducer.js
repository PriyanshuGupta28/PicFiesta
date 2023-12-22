import { NAVLINKCURRENT } from "../../Utility/ReduxConstants/NavLinksConstants/NavLinksConstants";

const initState = {
  currentLink: "Home",
};

export default (state = initState, action) => {
  switch (action.type) {
    case NAVLINKCURRENT:
      return {
        ...state,
        currentLink: action.payload ?? "",
      };
    default:
      return state;
  }
};
