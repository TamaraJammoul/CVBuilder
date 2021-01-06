import {EDITCAREEROBJECTIVE, ERROR} from "./types";
import axios from "axios";

export function EditCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/career/updateCareer`, {
        Text: payload.text,
        _id: payload.careerObjectives_id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITCAREEROBJECTIVE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
