import { createStore, combineReducers } from "redux";
import CourseReducer from "./CourseReducer";
import EnquiriesReducer from "./EnquiriesReducer";
import UserReducer from "./UserReducer";

// const rootReducer = () =>
//   combineReducers({
//     CourseReducer: CourseReducer,
//     EnquiriesReducer: EnquiriesReducer,
//     UserReducer: UserReducer,
//   });

const rootReducer = combineReducers({
  CourseReducer: CourseReducer,
  //   EnquiriesReducer: EnquiriesReducer,
  //   UserReducer: UserReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
