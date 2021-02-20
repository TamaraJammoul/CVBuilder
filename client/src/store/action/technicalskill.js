import {
  ADDTECHNICALSKILL,
  EDITTECHNICALSKILL,
  DELETETECHNICALSKILL,
  COPYTECHNICALSKILL,
  HIDETECHNICALSKILL,
  ORDERTECHNICALSKILL,
  ERROR,SUCCESS
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
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ADDTECHNICALSKILL,
            payload: res.data.data,
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
export function CopyTechnicalSkillsAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/copyTechnicalSkill`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: COPYTECHNICALSKILL,
            payload: res.data.data,
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
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: DELETETECHNICALSKILL,
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
export function EditTechnicalSkillAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/updateTechnicalSkills`, {
        Name: payload.skill,
        Order: payload.order,
        _id: payload.id,
        RateFrom5: payload.rate,
        cvID: payload.cvID,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: EDITTECHNICALSKILL,
            payload: res.data.data,
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
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: HIDETECHNICALSKILL,
            payload: res.data.data,
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
export function OrderTechnicalSkillAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/technicalSkills/orderTechnicalSkills`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ORDERTECHNICALSKILL,
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
