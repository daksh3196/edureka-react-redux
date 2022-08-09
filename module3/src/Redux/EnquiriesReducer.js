import { GET_ENQUIRIES } from "./Type";
import { combineReducers } from "redux";

const enquiries = (state = null, action) => {
  switch (action.type) {
    case GET_ENQUIRIES:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  enquiries,
});
