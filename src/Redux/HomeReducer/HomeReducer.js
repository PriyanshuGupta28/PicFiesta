import { HOMEALLDATA } from "../../Utility/ReduxConstants/HomeConstants/HomeConstants";

const initState = {
  data: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case HOMEALLDATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
