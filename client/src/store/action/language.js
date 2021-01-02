import {ADDLANGUAGE, DELETELANGUAGE, EDITLANGUAGE, COPYLANGUAGE} from "./types";
import axios from "axios";

export function AddLanguageAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/language/addLanguage`, {
        Name: payload.language,
        Order: payload.order,
        Rate: payload.rate,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADDLANGUAGE,
          payload: res.data,
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
        dispatch({
          type: DELETELANGUAGE,
          payload: res.data,
        });
      });
  };
}
export function EditLanguageAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/language/updateLanguage`, {
        Name: payload.language,
        Order: payload.order,
        Rate: payload.rate,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITLANGUAGE,
          payload,
        });
      });
  };
}
