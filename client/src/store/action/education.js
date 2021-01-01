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
        DegreeFrom100: payload.rate100,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Degree: payload.estimate,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDEDUCATION,
          payload,
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
        education_id: payload.id,
        _id: payload.cvId,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEEDUCATION,
          payload,
        });
      });
  };
}
export function EditEducationAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITEDUCATION,
      payload,
    });
  };
}
