import {ADDCV, DELETECV} from "./types";
import axios from "axios";

export function AddCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADDCV,
          payload: res.data,
        });
      });
  };
}
export function DeleteCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.cvID,
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
