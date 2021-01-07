import {
  ADDLANGUAGE,
  DELETELANGUAGE,
  EDITLANGUAGE,
  COPYLANGUAGE,
  ERROR,
} from "./types";
import axios from "axios";

export function AddLanguageAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/language/addLanguage`, {
        Name: payload.language,
        Order: payload.order,
        Rate: payload.rate,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDLANGUAGE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyLanguageAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYLANGUAGE,
      payload,
    });
  };
}
export function DeleteLanguageAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/language/deleteLanguage`, {
        language_id: payload.language_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETELANGUAGE,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditLanguageAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/language/updateLanguage`, {
        Name: payload.language,
        Order: payload.order,
        Rate: payload.rate,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITLANGUAGE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
