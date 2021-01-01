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
      .post(`http://localhost:5000/api/membershop/addMembership`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDMEMBERSHIP,
          payload,
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
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEMEMBERSHIP,
          payload,
        });
      });
  };
}
export function EditMembershipAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITMEMBERSHIP,
      payload,
    });
  };
}
