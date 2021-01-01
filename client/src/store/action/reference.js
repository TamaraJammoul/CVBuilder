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
      .post(`http://localhost:5000/api/referance/addReferance`, {
        Name: payload,
        Order: 1,
        _id: "5feb8f0d76236c09f83b7221",
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: ADDREFERENCE,
            payload,
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
        referance_id: payload.name,
        _id: "5feb8f0d76236c09f83b7221",
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
  console.log(payload);
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/referance/updateReferance`, {
        Name: payload.newName,
        Order: 1,
        _id: "5feb8f0d76236c09f83b7221",
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: EDITREFERENCE,
          payload,
        });
      });
  };
}
