import {
  ADDCOURSES,
  EDITCOURSES,
  DELETECOURSES,
  COPYCOURSES,
  HIDECOURSES,
  ORDERCOURSES,
  ERROR,
} from "./types";
import axios from "axios";
export function AddCoursesAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/course/addCourse`, {
        Name: payload.courses,
        Order: payload.order,
        Description: payload.description,
        Year: payload.year,
        _id: payload.cvID,
        DescriptionAr: payload.descriptionAr,
        NameAr: payload.coursesAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
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
    console.log(payload, "oo");
    axios
      .post(`http://localhost:5000/api/course/copyCourse`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0) {
          console.log("tamara");
          dispatch({
            type: COPYCOURSES,
            payload: res.data.data,
          });
        } else
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
      .post(`http://localhost:5000/api/course/deleteCourse`, {
        course_id: payload.courses_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
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
      .post(`http://localhost:5000/api/course/updateCourse`, {
        Name: payload.coursesName,
        Order: payload.order,
        Description: payload.description,
        Year: payload.year,
        _id: payload.id,
        NameAr: payload.coursesNameAr,
        DescriptionAr: payload.descriptionAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
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
export function HideCoursesAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/course/hideCourses`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: HIDECOURSES,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderCoursesAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/course/orderCourses`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: ORDERCOURSES,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
