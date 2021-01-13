import {
  ADDOTHERTRAINING,
  DELETEOTHERTRAINING,
  EDITOTHERTRAINING,
  COPYOTHERTRAINING,
  HIDEOTHERTRAINING,
  ORDEROTHERTRAINING,
  ERROR,
} from "./types";
import axios from "axios";
export function AddOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/othertraining/addOtherTraining`, {
        Name: payload.otherTraining,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDOTHERTRAINING,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTrining/copyOtherTraining`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYOTHERTRAINING,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function DeleteOtherTrainingAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTrining/deleteOtherTraining`, {
        otherTraining_id: payload.otherTraining_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETEOTHERTRAINING,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTraining/updateOtherTraining`, {
        Name: payload.otherTraining,
        Order: payload.order,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITOTHERTRAINING,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTraining/hideOtherTrainings`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDEOTHERTRAINING,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTraining/hideOtherTrainings`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ORDEROTHERTRAINING,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
