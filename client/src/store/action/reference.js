import {
  ADDREFERENCE,
  DELETEREFERENCE,
  EDITREFERENCE,
  COPYREFERENCE,
} from "./types";
import axios from "axios";
export function AddReferenceAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/reference/addReference`, {
        Name: payload.name,
        Number: payload.number,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDREFERENCE,
            payload: res.data,
          });
      });
  };
}
export function CopyReferenceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYREFERENCE,
      payload,
    });
  };
}
export function DeleteReferenceAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/referance/deleteReferance`, {
        referance_id: payload.reference_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEREFERENCE,
          payload,
        });
      });
  };
}
export function EditReferenceAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/referance/updateReferance`, {
        Name: payload.reference,
        Order: payload.order,
        _id: payload.cvID,
        Number: payload.phone,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITREFERENCE,
          payload: res.data,
        });
      });
  };
}
