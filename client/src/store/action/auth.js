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
        console.log(res);
        dispatch({
          type: LOGIN,
          payload,
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
        console.log(res);
        dispatch({
          type: SIGNUP,
          payload,
        });
      });
  };
}
