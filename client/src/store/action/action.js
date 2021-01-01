import {CONTACTUS, CHANGELANGUAGE} from "./types";
import axios from "axios";

export function ContactusAction(payload) {
  return (dispatch) => {
    dispatch({
      type: CONTACTUS,
      payload,
    });
  };
}

export function ChangeLanguge(payload) {
  return (dispatch) => {
    dispatch({
      type: CHANGELANGUAGE,
      payload,
    });
  };
}
