import {DELETECAREEROBJECTIVE, EDITCAREEROBJECTIVE} from "./types";
import axios from "axios";
export function DeleteCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETECAREEROBJECTIVE,
      payload,
    });
  };
}
export function EditCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITCAREEROBJECTIVE,
      payload,
    });
  };
}
