import {ADDSKILL, HIDESKILL, ERROR,SUCCESS} from "./types";
import axios from "axios";
export function AddSkillAction(payload) {
  return (dispatch) => {
    console.log(payload)
    axios
      .post(`http://localhost:5000/api/skills/addSkill`, {
        skills: payload.skills,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ADDSKILL,
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
export function HideSkillAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/skills/hideSkills`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          dispatch({
            type: HIDESKILL,
            payload,
          });

        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
