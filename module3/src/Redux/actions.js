import { GET_COURSES, GET_ENQUIRIES, GET_FOODS } from "./Type";

export const getCoursesByApi = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getCourses(data));
    });
};

export const getFoodsByApi = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/foods", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getFoods(data));
    });
};

export const getEnquiriesByApi = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/enquiries", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(getEnquiries(data));
    });
};

export const getCourses = (data) => async (dispatch) => {
  dispatch({
    type: GET_COURSES,
    payload: data ?? null,
  });
};

export const getFoods = (data) => async (dispatch) => {
  dispatch({
    type: GET_FOODS,
    payload: data ?? null,
  });
};

export const getEnquiries = (data) => async (dispatch) => {
  dispatch({
    type: GET_ENQUIRIES,
    payload: data ?? null,
  });
};
