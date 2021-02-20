import {
  CONTACTUS,
  CHANGELANGUAGE,
  GETALLCV,
  AUTH,
  ERROR,
  PERSONALINFO,SUCCESS,RESETPASSWORD,RESETPASSWORDLINK
} from "./types";
import axios from "axios";

export function ContactusAction(payload) {
  return async (dispatch) => {
    await axios
      .post(` http://localhost:5000/api/contactUs`, {
        Email: payload.email,
        Number: payload.number,
        Message: payload.message,
        Name: payload.name,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: CONTACTUS,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function ChangeLanguge(payload) {
  return (dispatch) => {
    dispatch({
      type: CHANGELANGUAGE,
      payload,
    });
  };
}
export function GetAllCVAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/getAllCV`, {Email: payload.email})
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: GETALLCV,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function Auth(payload) {
  return async (dispatch) => {
    dispatch({
      type: AUTH,
    });
  };
}
export function PeraonalInfoAction(payload) {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: `http://localhost:5000/api/personalInformation/updatePersonalInformation`,
      data: payload,
      headers: {
        "Content-Type": "multipart/form-data",
       // Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: PERSONALINFO,
            payload: res.data,
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
export function ResetPasswordLink(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/auth/resetPasswordLink`, {Email: payload.email})
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: RESETPASSWORDLINK,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function ResetPassword(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/auth/resetPassword`, {Email: payload.email,Password:payload.password})
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: RESETPASSWORD,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}