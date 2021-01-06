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
            payload: res.data,
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
    dispatch({
      type: COPYCOURSES,
      payload,
    });
  };
}
export function DeleteCoursesAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/courses/deleteCourses`, {
        membership_id: payload.courses_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETECOURSES,
            payload: res.data,
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
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
