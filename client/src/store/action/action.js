import {LOGIN} from "./types";

export function createLoginAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function LoginAction(payload) {
  return (dispatch) => {
    dispatch(createLoginAction(payload));
  };
}
