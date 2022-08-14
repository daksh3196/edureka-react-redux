import { GET_COURSES, GET_FOODS } from "./Type";
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

const foods = (state = null, action) => {
  switch (action.type) {
    case GET_FOODS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  courses,
  foods,
});
