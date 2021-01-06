import React, {useState} from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
export default function Toast() {
  const [tyrtyr, setToast] = useState(true);
  //handel me
  const toast = useSelector((state) => state.toast);
  const toastMessageEN = useSelector((state) => state.toastMessageEN);
  const toastMessageAR = useSelector((state) => state.toastMessageAR);

  const toastType = useSelector((state) => state.toastType);
  const {t, i18n} = useTranslation();

  return (
    <Snackbar
      open={toast}
      autoHideDuration={3000}
      onClose={() => setToast(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      TransitionComponent="SlideTransition"
    >
      <Alert onClose={() => setToast(false)} severity={toastType}>
        {i18n.language == "en" ? toastMessageEN : toastMessageAR}
      </Alert>
    </Snackbar>
  );
}
