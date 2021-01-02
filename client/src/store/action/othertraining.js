import {
  ADDOTHERTRAINING,
  DELETEOTHERTRAINING,
  EDITOTHERTRAINING,
  COPYOTHERTRAINING,
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
        dispatch({
          type: ADDOTHERTRAINING,
          payload: res.data,
        });
      });
  };
}
export function CopyOtherTrainingAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYOTHERTRAINING,
      payload,
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
        dispatch({
          type: DELETEOTHERTRAINING,
          payload: res.data,
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
        dispatch({
          type: EDITOTHERTRAINING,
          payload: res.data,
        });
      });
  };
}
