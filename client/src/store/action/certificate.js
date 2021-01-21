import {
  ADDCERTIFICATE,
  EDITCERTIFICATE,
  DELETECERTIFICATE,
  COPYCERTIFICATE,
  HIDECERTIFICATE,
  ORDERCERTIFICATE,
  ERROR,
} from "./types";
import axios from "axios";
export function AddCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/certificate/addCertificate`, {
        Name: payload.name,
        Year: payload.date,
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
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/certificate/copyCertificate`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: COPYCERTIFICATE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
            payload,
          });
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
        Year: payload.date,
        Description: payload.description,
        Order: payload.order,
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res);
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

export function HideCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/certificate/hideCertificates`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: HIDECERTIFICATE,
            payload: res.data.data,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
export function OrderCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://localhost:5000/api/certificate/orderCertificates`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200)
          dispatch({
            type: ORDERCERTIFICATE,
            payload,
          });
        else
          dispatch({
            type: ERROR,
          });
      });
  };
}
