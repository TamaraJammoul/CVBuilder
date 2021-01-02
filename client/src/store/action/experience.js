import {
  ADDEXPERIENCE,
  DELETEEXPERIENCE,
  EDITEXPERIENCE,
  COPYEXPERIENCE,
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
        dispatch({
          type: ADDEXPERIENCE,
          payload: res.data,
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
        dispatch({
          type: DELETEEXPERIENCE,
          payload,
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
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITEXPERIENCE,
          payload: res.data,
        });
      });
  };
}
