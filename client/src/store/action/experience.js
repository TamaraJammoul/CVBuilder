import {
  ADDEXPERIENCE,
  DELETEEXPERIENCE,
  EDITEXPERIENCE,
  COPYEXPERIENCE,
  HIDEEXPERIENCE,
  ORDEREXPERIENCE,
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
            payload: res.data.data,
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
    axios
      .post(`http://localhost:5000/api/experience/copyExperience`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYEXPERIENCE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
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
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideExperienceAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experience/hideExperiences `, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDEEXPERIENCE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderExperienceAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experiences/orderExperiences`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ORDEREXPERIENCE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
