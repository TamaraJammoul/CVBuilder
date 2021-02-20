import {LOGIN, SIGNUP, ERROR} from "./types";
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
        if (res.status == 200 && res.data.status != 0) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("FirstName", res.data.user.FirstName);
          localStorage.setItem("LastName", res.data.user.LastName);
          localStorage.setItem("Email", res.data.user.Email);

          dispatch({
            type: LOGIN,
            payload: res.data,
          });
        } else
          dispatch({
            type: ERROR,
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
        if (res.status == 200 && res.data.status != 0) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("FirstName", res.data.user.FirstName);
          localStorage.setItem("LastName", res.data.user.LastName);
          localStorage.setItem("Email", res.data.user.Email);
          dispatch({
            type: SIGNUP,
            payload: res.data,
          });
        } else
          dispatch({
            type: ERROR,
          });
      });
  };
}
