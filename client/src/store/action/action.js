import {
  CONTACTUS,
  CHANGELANGUAGE,
  GETALLCV,
  AUTH,
  ERROR,
  PERSONALINFO,
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
        if (res.status == 200)
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
      .post(`http://localhost:5000/api/CV/getAllCV`, {Email: payload})
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: GETALLCV,
            payload: res,
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
    console.log(payload);
    await axios
      .post(
        `http://localhost:5000/api/PersonalInformation/updatePersonalInformation`,
        payload
      )
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: PERSONALINFO,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
