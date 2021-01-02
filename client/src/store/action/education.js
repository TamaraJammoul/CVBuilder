import {
  ADDEDUCATION,
  EDITEDUCATION,
  DELETEEDUCATION,
  COPYEDUCATION,
} from "./types";
import axios from "axios";
export function AddEducationAction(payload) {
  return (dispatch) => {
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
        dispatch({
          type: ADDEDUCATION,
          payload: res.data,
        });
      });
  };
}
export function CopyEducationAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYEDUCATION,
      payload,
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
        dispatch({
          type: DELETEEDUCATION,
          payload: res.data,
        });
      });
  };
}
export function EditEducationAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/education/updateEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startDate,
        YearEnd: payload.endDate,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Grade: payload.grade,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITEDUCATION,
          payload: res.data,
        });
      });
  };
}
