import {
  ADDEDUCATION,
  EDITEDUCATION,
  DELETEEDUCATION,
  COPYEDUCATION,
  HIDEEDUCATION,
  ORDEREDUCATION,
  ERROR,SUCCESS
} from "./types";
import axios from "axios";
export function AddEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/education/addEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startDate,
        YearEnd: payload.endDate,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Grade: payload.grade,
        Degree: payload.degree,
        _id: payload.cvID,
        UniversityNameAr: payload.universityNameAr,
        FacultyAr: payload.facultyAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: ADDEDUCATION,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/education/copyEducation`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: COPYEDUCATION,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function DeleteEducationAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://we4cv.com/api/education/deleteEducation`, {
        education_id: payload.education_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: DELETEEDUCATION,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/education/updateEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startDate,
        YearEnd: payload.endDate,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Grade: payload.grade,
        _id: payload.id,
        UniversityNameAr: payload.universityNameAr,
        FacultyAr: payload.facultyAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
      {    dispatch({
            type: EDITEDUCATION,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/education/hideEducations`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: HIDEEDUCATION,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/education/orderEducations`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ORDEREDUCATION,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
