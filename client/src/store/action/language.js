import {ADDLANGUAGE, DELETELANGUAGE, EDITLANGUAGE, COPYLANGUAGE} from "./types";
import axios from "axios";
export function AddLanguageAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/language/addLanguage`, {
        Name: payload.name,
        Order: 1,
        Rate: 7,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDLANGUAGE,
          payload,
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
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETELANGUAGE,
          payload,
        });
      });
  };
}
export function EditLanguageAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITLANGUAGE,
      payload,
    });
  };
}
