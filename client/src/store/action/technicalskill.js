import {
  ADDTECHNICALSKILL,
  EDITTECHNICALSKILL,
  DELETETECHNICALSKILL,
  COPYTECHNICALSKILL,
  HIDETECHNICALSKILL,
  ERROR,
} from "./types";
import axios from "axios";
export function AddTechnicalSkillsAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(` http://localhost:5000/api/technicalSkills/addTechnicalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.cvID,
        RateFrom5: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDTECHNICALSKILL,
            payload: res.data.data,
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
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/copyTechnicalSkills`, {
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: COPYTECHNICALSKILL,
          payload: res.data.data,
        });
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
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/editTechnicalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.id,
        RateFrom5: payload.rate,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITTECHNICALSKILL,
          payload: res.data.data,
        });
      });
  };
}
export function HideTechnicalSkillAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/hideTechnicalSkills`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: HIDETECHNICALSKILL,
          payload: res.data.data,
        });
      });
  };
}
