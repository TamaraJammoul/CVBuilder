import {
  ADDEXPERIENCE,
  DELETEEXPERIENCE,
  EDITEXPERIENCE,
  COPYEXPERIENCE,
  ERROR,
} from "./types";
import axios from "axios";
export function AddExperienceAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experience/addExperience`, {
        Start: payload.startDate,
        End: payload.endDate,
        Name: payload.experienceName,
        Project: payload.project,
        Description: payload.description,
        Order: 1,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDEXPERIENCE,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyExperienceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYEXPERIENCE,
      payload,
    });
  };
}
export function DeleteExperienceAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experience/deleteExperience`, {
        experience_id: payload.experience_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: DELETEEXPERIENCE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditExperienceAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experience/updateExperience`, {
        Start: payload.startDate,
        End: payload.endDate,
        Name: payload.experienceName,
        Project: payload.project,
        Description: payload.description,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITEXPERIENCE,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
