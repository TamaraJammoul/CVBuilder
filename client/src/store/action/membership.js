import {
  ADDMEMBERSHIP,
  EDITMEMBERSHIP,
  DELETEMEMBERSHIP,
  COPYMEMBERSHIP,
  HIDEMEMBERSHIP,
  ORDERMEMBERSHIP,
  ERROR,SUCCESS
} from "./types";
import axios from "axios";
export function AddMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/addMembership`, {
        Name: payload.membershipName,
        Order: payload.order,
        _id: payload.cvID,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ADDMEMBERSHIP,
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
export function CopyMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/copyMembership`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: COPYMEMBERSHIP,
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
export function DeleteMembershipAction(payload) {
  console.log(payload);
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/membership/deleteMembership`, {
        membership_id: payload.membership_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
        {  dispatch({
            type: DELETEMEMBERSHIP,
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
export function EditMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/updateMembership`, {
        Name: payload.membershipName,
        Order: payload.order,
        _id: payload.id,
        NameAr: payload.nameAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: EDITMEMBERSHIP,
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
export function HideMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/hideMemberships`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: HIDEMEMBERSHIP,
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
export function OrderMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/orderMemberships`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ORDERMEMBERSHIP,
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
