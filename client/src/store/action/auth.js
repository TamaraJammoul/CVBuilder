import {LOGIN, SIGNUP} from "./types";
import axios from "axios";

export function LoginAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/auth/logIn`, {
        Email: payload.email,
        Password: payload.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
      });
  };
}
export function SignupAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/auth/signUp`, {
        Email: payload.email,
        FirstName: payload.firstName,
        LastName: payload.lastName,
        Password: payload.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SIGNUP,
          payload: res.data,
        });
      });
  };
}
