import {ADDCV, DELETECV} from "./types";
import axios from "axios";

export function AddCVAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADDCV,
          payload: res.data.data,
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
        dispatch({
          type: DELETECV,
          payload: res.data.data,
        });
      });
  };
}
