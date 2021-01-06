import {
  ADDTECHNICALSKILL,
  EDITTECHNICALSKILL,
  DELETETECHNICALSKILL,
  COPYTECHNICALSKILL,
  ERROR,
} from "./types";
import axios from "axios";
export function AddTechnicalSkillsAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/technicalSkills/addTechnicalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.cvID,
        Rate: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDTECHNICALSKILL,
            payload: res.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyTechnicalSkillsAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYTECHNICALSKILL,
      payload,
    });
  };
}
export function DeleteTechnicalSkillAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/technicalSkills/deleteTechnicalSkills`, {
        technicalSkill_id: payload.technicalSkill_id,
        Order: 1,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: DELETETECHNICALSKILL,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditTechnicalSkillAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/technicalSkills/editTechnicalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.id,
        Rate: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITTECHNICALSKILL,
          payload: res.data,
        });
      });
  };
}
