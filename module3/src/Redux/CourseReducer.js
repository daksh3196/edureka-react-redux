import { GET_COURSES } from "./Type";

const initialState = {
  courses: [],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return state;
    default:
      return state;
  }
};

export default CourseReducer;
