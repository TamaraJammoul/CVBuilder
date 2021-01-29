import {
  ADDACHIEVEMENT,
  EDITACHIEVEMENT,
  DELETEACHIEVEMENT,
  COPYACHIEVEMENT,
  HIDEACHIEVEMENT,
  ORDERACHIEVEMENT,
  ERROR,
} from "./types";
import axios from "axios";
export function AddAchievementAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/achievement/addAchievement`, {
        Name: payload.achievementName,
        Order: payload.order,
        _id: payload.cvID,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDACHIEVEMENT,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function CopyAchievementAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/achievement/copyAchievement`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYACHIEVEMENT,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function DeleteAchievementAction(payload) {
  console.log(payload);
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/achievement/deleteAchievement`, {
        achievement_id: payload.achievement_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETEACHIEVEMENT,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditAchievementAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/achievement/updateAchievement`, {
        Name: payload.achievementName,
        Order: payload.order,
        _id: payload.id,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITACHIEVEMENT,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function HideAchievementAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/achievement/hideAchievements`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDEACHIEVEMENT,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderAchievementAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/achievents/orderAchievements`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ORDERACHIEVEMENT,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
