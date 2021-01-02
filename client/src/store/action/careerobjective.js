import {EDITCAREEROBJECTIVE} from "./types";
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
        dispatch({
          type: EDITCAREEROBJECTIVE,
          payload: res.data,
        });
      });
  };
}
