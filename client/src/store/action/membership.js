import {
  ADDMEMBERSHIP,
  EDITMEMBERSHIP,
  DELETEMEMBERSHIP,
  COPYMEMBERSHIP,
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
        dispatch({
          type: ADDMEMBERSHIP,
          payload: res.data,
        });
      });
  };
}
export function CopyMembershipAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYMEMBERSHIP,
      payload,
    });
  };
}
export function DeleteMembershipAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membershop/deleteMembership`, {
        membership_id: payload.membership_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETEMEMBERSHIP,
          payload: res.data,
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
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDITMEMBERSHIP,
          payload: res.data,
        });
      });
  };
}
