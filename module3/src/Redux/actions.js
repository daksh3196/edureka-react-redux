import { GET_COURSES } from "./Type";

export const getCoursesByApi = () => {
  console.log("called");
  const res = fetch("http://localhost:6700/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      getCourses(data);
    });
};

export const getCourses = (data) => {
  console.log("ye bhi");
  return {
    type: GET_COURSES,
    payload: data,
  };
};

// export default actions;
