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
      .post(`http://localhost:5000/api/otherTraining/addOtherTraining`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDOTHERTRAINING,
          payload,
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
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEOTHERTRAINING,
          payload,
        });
      });
  };
}
export function EditOtherTrainingAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITOTHERTRAINING,
      payload,
    });
  };
}
