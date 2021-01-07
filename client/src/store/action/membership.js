import {
  ADDMEMBERSHIP,
  EDITMEMBERSHIP,
  DELETEMEMBERSHIP,
  COPYMEMBERSHIP,
  ERROR,
} from "./types";
import axios from "axios";
export function AddMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membership/addMembership`, {
        Name: payload.membershipName,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDMEMBERSHIP,
            payload: res.data.data,
          });
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
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYMEMBERSHIP,
            payload: res.data.data,
          });
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
      .post(`http://localhost:5000/api/membershop/deleteMembership`, {
        membership_id: payload.membership_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETEMEMBERSHIP,
            payload,
          });
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
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITMEMBERSHIP,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
