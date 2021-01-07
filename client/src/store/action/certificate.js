import {
  ADDCERTIFICATE,
  EDITCERTIFICATE,
  DELETECERTIFICATE,
  COPYCERTIFICATE,
  ERROR,
} from "./types";
import axios from "axios";
export function AddCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/certificate/addCertificate`, {
        Name: payload.name,
        year: payload.date,
        Description: payload.description,
        Order: payload.order,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ADDCERTIFICATE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
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
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/certificate/deleteCertificate`, {
        certificate_id: payload.certificate_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: DELETECERTIFICATE,
            payload: {
              certificate_id: payload.certificate_id,
              cvID: payload.cvID,
            },
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function EditCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://locahost:5000/api/certificate/updateCertificate`, {
        Name: payload.name,
        year: payload.date,
        Description: payload.description,
        Order: payload.order,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: EDITCERTIFICATE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
