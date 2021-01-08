import {
  ADDREFERENCE,
  DELETEREFERENCE,
  EDITREFERENCE,
  COPYREFERENCE,
  HIDEREFERENCE,
  ERROR,
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
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyReferenceAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/referance/copyReferance`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: COPYREFERENCE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
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
        if (res.status == 200)
          dispatch({
            type: DELETEREFERENCE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditReferenceAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/reference/updateReference`, {
        Name: payload.reference,
        Order: payload.order,
        _id: payload.id,
        Number: payload.phone,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITREFERENCE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideReferenceAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/reference/hideReferences`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDEREFERENCE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
