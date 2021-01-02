import {
  ADDPERSONALSKILL,
  EDITPERSONALSKILL,
  DELETEPERSONALSKILL,
  COPYPERSONALSKILL,
} from "./types";
import axios from "axios";
export function AddPersonalSkillsAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/personalSkills/addPersonalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.cvID,
        Rate: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADDPERSONALSKILL,
          payload: res.data,
        });
      });
  };
}
export function CopyPersonalSkillsAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYPERSONALSKILL,
      payload,
    });
  };
}
export function DeletePersonalSkillAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/personalSkills/deletePersonalSkills`, {
        personalSkill_id: payload.personalSkill_id,
        Order: 1,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEPERSONALSKILL,
          payload,
        });
      });
  };
}
export function EditPersonalSkillAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/personalSkills/addPersonalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.cvID,
        Rate: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITPERSONALSKILL,
          payload: res.data,
        });
      });
  };
}
