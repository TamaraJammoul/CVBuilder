import {ADDSKILL, ERROR} from "./types";
import axios from "axios";
export function AddSkillAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/skills/addSkill`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: ADDSKILL,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
