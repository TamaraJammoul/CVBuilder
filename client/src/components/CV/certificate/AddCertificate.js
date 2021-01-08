import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddCertificateAction} from "./../../../store/action/certificate";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function AddCertificate(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(0);
  const cvID = useSelector((state) => state.cvID);
  const data = {name, description, date, cvID, order: "1"};
  const {t, i18n} = useTranslation();
  let history = useHistory();

  const handelCancel = () => {
    setName("");
    setDate(0);
    setDescription("");
    history.push("/buildcv/certificates");
  };
  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <h2>{t("AddCertificate")}</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Certificate Name")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Description")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label={t("Date")}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
                dispatch(AddCertificateAction(data));
                history.push("/buildcv/certificates");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>{" "}
      </Container>
    </Paper>
  );
}
