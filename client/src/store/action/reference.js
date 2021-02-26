import {
  ADDREFERENCE,
  DELETEREFERENCE,
  EDITREFERENCE,
  COPYREFERENCE,
  HIDEREFERENCE,
  ORDERREFERENCE,
  ERROR,SUCCESS
} from "./types";
import axios from "axios";
export function AddReferenceAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://we4cv.com/api/reference/addReference`, {
        Name: payload.name,
        NameAr: payload.nameAr,
        Number: payload.phone,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ADDREFERENCE,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
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
      .post(`http://we4cv.com/api/referance/copyReferance`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: COPYREFERENCE,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
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
      .post(`http://we4cv.com/api/reference/deleteReference`, {
        reference_id: payload.reference_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: DELETEREFERENCE,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
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
      .post(`http://we4cv.com/api/reference/updateReference`, {
        Name: payload.reference,
        Order: payload.order,
        _id: payload.id,
        Number: payload.phone,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: EDITREFERENCE,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
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
      .post(`http://we4cv.com/api/reference/hideReferences`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: HIDEREFERENCE,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderReferenceAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://we4cv.com/api/references/orderReferences`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ORDERREFERENCE,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
