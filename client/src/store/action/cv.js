import {
  ADDCV,
  DELETECV,
  ERROR,
  CVNAME,
  CVLANGIAGE,
  CVTEMPLATE,
  EDITCV,
  CVCOLOR,
} from "./types";
import axios from "axios";

export function AddCVAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload.email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
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
        if (res.status == 200 && res.data.status != 0)
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
export function EditCVAction(payload) {
  return (dispatch) => {
    dispatch({
      type: EDITCV,
      payload,
    });
  };
}
export function CVLanguage1(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/updateLanguage`, {
        Language: payload.Language,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: CVLANGIAGE,
            payload,
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
      .post(`http://localhost:5000/api/cv/updateName`, {
        Name: payload.name,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data, payload);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: CVNAME,
            payload,
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
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/cv/updateTemplate`, {
        Template: payload.template,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data, payload);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: CVTEMPLATE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}

export function cvColor(payload) {
  return async (dispatch) => {
    dispatch({
      type: CVCOLOR,
      payload,
    });
  };
}
