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
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDPERSONALSKILL,
          payload,
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
        Name: payload.name,
        Order: 1,
        _id: payload.id,
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
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITPERSONALSKILL,
      payload,
    });
  };
}
