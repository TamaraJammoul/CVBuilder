import {
  ADDCERTIFICATE,
  EDITCERTIFICATE,
  DELETECERTIFICATE,
  COPYCERTIFICATE,
  HIDECERTIFICATE,
  ORDERCERTIFICATE,
  ERROR,SUCCESS
} from "./types";
import axios from "axios";
export function AddCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/certificate/addCertificate`, {
        Name: payload.name,
        Year: payload.date,
        Description: payload.description,
        Order: 1,
        _id: payload.cvID,
        NameAr: payload.nameAr,
        DescriptionAr: payload.descriptionAr,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: ADDCERTIFICATE,
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
export function CopyCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/certificate/copyCertificate`, {
        _id: payload.id,
        cvID: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: COPYCERTIFICATE,
            payload: res.data.data,
          });
          dispatch({
            type: SUCCESS,
          });}
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
      .post(`http://we4cv.com/api/certificate/deleteCertificate`, {
        certificate_id: payload.certificate_id,
        _id: payload.cvID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: DELETECERTIFICATE,
            payload: {
              certificate_id: payload.certificate_id,
              cvID: payload.cvID,
            },
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
export function EditCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/certificate/updateCertificate`, {
        Name: payload.name,
        Year: payload.date,
        Description: payload.description,
        Order: 1,
        _id: payload.id,
        cvID: payload.cvID,
        NameAr: payload.nameAr,
        DescriptionAr: payload.descriptionAr,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: EDITCERTIFICATE,
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

export function HideCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/certificate/hideCertificates`, {
        _id: payload.cvID,
        hide: payload.hide,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
         { dispatch({
            type: HIDECERTIFICATE,
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
export function OrderCertificateAction(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post(`http://we4cv.com/api/certificate/orderCertifcates`, {
        _id: payload.cvID,
        oldID: payload.source.index,
        newID: payload.destination.index,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200 && res.data.status != 0)
          {dispatch({
            type: ORDERCERTIFICATE,
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
