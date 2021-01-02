import {CONTACTUS, CHANGELANGUAGE, GETALLCV, AUTH} from "./types";
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
        dispatch({
          type: CONTACTUS,
          payload: res.data,
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
        dispatch({
          type: GETALLCV,
          payload: res,
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
