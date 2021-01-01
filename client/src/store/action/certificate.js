import {
  ADDCERTIFICATE,
  EDITCERTIFICATE,
  DELETECERTIFICATE,
  COPYCERTIFICATE,
} from "./types";
import axios from "axios";
export function AddCertificateAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/certificate/addCertificate`, {
        Name: payload.name,
        year: payload.date,
        Description: payload.description,
        Order: payload.order,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDCERTIFICATE,
          payload,
        });
      });
  };
}
export function CopyCertificateAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYCERTIFICATE,
      payload,
    });
  };
}
export function DeleteCertificateAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/certificate/deleteCertificate`, {
        certificate_id: payload.id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETECERTIFICATE,
          payload,
        });
      });
  };
}
export function EditCertificateAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITCERTIFICATE,
      payload,
    });
  };
}
