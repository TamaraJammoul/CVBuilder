import {EDITCAREEROBJECTIVE, HIDECAREEROBJECTIVE, ERROR,SUCCESS} from "./types";
import axios from "axios";

export function EditCareerObjectiveAction(payload) {
  console.log(payload, "kjl");
  return (dispatch) => {
    axios
      .post(`http://we4cv.com/api/career/updateCareer`, {
        Text: payload.text,
        TextAr: payload.textAr,
        _id: payload.careerObjectives_id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: EDITCAREEROBJECTIVE,
            payload,
          });
          dispatch({
            type: SUCCESS,
          });}
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://we4cv.com/api/career/hideCareer`, {
        hide: payload.hide,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: HIDECAREEROBJECTIVE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
