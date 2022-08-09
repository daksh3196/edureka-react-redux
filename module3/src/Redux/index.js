import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CourseReducer from "./CourseReducer";
import EnquiriesReducer from "./EnquiriesReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  CourseReducer: CourseReducer,
  EnquiriesReducer: EnquiriesReducer,
  //   UserReducer: UserReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    /* ----  middlewares ----  */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
