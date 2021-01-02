import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddReferenceAction} from "./../../../store/action/reference";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function Reference(props) {
  const [reference, setReference] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const handelCancel = () => {
    setReference("");
    setPhone("");
    history.push("/buildcv/reference");
  };
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  return (
    <Paper>
      <Container>
        <Grid
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>{t("Reference")}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("AddReference")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setReference(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Phone")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save"
              style={{float: "right"}}
              onClick={() => {
                dispatch(
                  AddReferenceAction({reference, phone, cvID, order: "1"})
                );
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
