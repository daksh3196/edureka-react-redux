import { GET_COURSES } from "./Type";
import { combineReducers } from "redux";

const courses = (state = null, action) => {
  switch (action.type) {
    case GET_COURSES:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  courses,
});
