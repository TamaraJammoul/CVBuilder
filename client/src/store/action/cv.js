import {ADDCV, DELETECV} from "./types";
import axios from "axios";

export function AddCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload.email,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDCV,
          payload,
        });
      });
  };
}
export function DeleteCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETECV,
          payload,
        });
      });
  };
}
