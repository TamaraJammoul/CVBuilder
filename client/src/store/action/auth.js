import { LOGIN, SIGNUP, ERROR } from "./types";
import axios from "axios";

export function LoginAction(payload) {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: `https://we4cv.com/api/auth/logIn`,
      data: {
        Email: payload.email,
        Password: payload.password,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
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
    await axios({
      method: "post",
      url: `https://we4cv.com/api/auth/signUp`,
      data: {
        Email: payload.email,
        FirstName: payload.firstName,
        LastName: payload.lastName,
        Password: payload.password,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
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
