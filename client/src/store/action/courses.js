import {
  ADDCOURSES,
  EDITCOURSES,
  DELETECOURSES,
  COPYCOURSES,
  ERROR,
} from "./types";
import axios from "axios";
export function AddCoursesAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/courses/addCourses`, {
        Name: payload.coursesName,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDCOURSES,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyCoursesAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/courses/copyCourses`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYCOURSES,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function DeleteCoursesAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/courses/deleteCourses`, {
        course_id: payload.courses_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETECOURSES,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditCoursesAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/courses/updateCourses`, {
        Name: payload.coursesName,
        Order: payload.order,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITCOURSES,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
