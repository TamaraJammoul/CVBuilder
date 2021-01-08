import {
  ADDEDUCATION,
  EDITEDUCATION,
  DELETEEDUCATION,
  COPYEDUCATION,
  HIDEEDUCATION,
  ERROR,
} from "./types";
import axios from "axios";
export function AddEducationAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/education/addEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startYear,
        YearEnd: payload.endYear,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Grade: payload.grade,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDEDUCATION,
            payload: res.data.data,
          });
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
      .post(`http://localhost:5000/api/education/copyEducation`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYEDUCATION,
            payload: res.data.data,
          });
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
      .post(`http://localhost:5000/api/education/deleteEducation`, {
        education_id: payload.education_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETEEDUCATION,
            payload,
          });
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
      .post(`http://localhost:5000/api/education/updateEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startDate,
        YearEnd: payload.endDate,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Grade: payload.grade,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITEDUCATION,
            payload: res.data.data,
          });
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
      .post(`http://localhost:5000/api/education/hideEducations `, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDEEDUCATION,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
