import {ADDCV, DELETECV, ERROR, CVNAME, CVLANGIAGE, CVTEMPLATE} from "./types";
import axios from "axios";

export function AddCVAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDCV,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function DeleteCVAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status == 200)
          dispatch({
            type: DELETECV,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CVLanguage1(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status == 200)
          dispatch({
            type: CVLANGIAGE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CVName1(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status == 200)
          dispatch({
            type: CVNAME,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}

export function CVTemplate1(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status == 200)
          dispatch({
            type: CVTEMPLATE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
