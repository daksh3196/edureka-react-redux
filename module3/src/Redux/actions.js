import { GET_COURSES, GET_ENQUIRIES } from "./Type";

export const getCoursesByApi = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getCourses(data));
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

export const getEnquiries = (data) => async (dispatch) => {
  dispatch({
    type: GET_ENQUIRIES,
    payload: data ?? null,
  });
};
