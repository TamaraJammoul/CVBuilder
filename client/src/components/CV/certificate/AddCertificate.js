import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddCertificateAction} from "./../../../store/action/certificate";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {DatePicker} from "@material-ui/pickers";

export default function AddCertificate(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [descriptionAr, setDescriptionAr] = useState("");
  const [date, setDate] = useState(new Date());
  const cvID = useSelector((state) => state.cvID);
  const lan = useSelector((state) => state.sections.twolan);

  const data = {
    name,
    description,
    nameAr,
    descriptionAr,
    date,
    cvID,
    order: "1",
  };
  const {t, i18n} = useTranslation();
  let history = useHistory();

  const handelCancel = () => {
    setName("");
    setDate(0);
    setDescription("");
    setName("");
    setNameAr("");
    setDescription("");
    setDescriptionAr("");
    console.log(data, "kj");
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
          <Grid item xs={12} sm={12}>
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
          <Grid item xs={12} sm={6} className={lan == 1 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Certificate Name")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setNameAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={lan == 1 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Description")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setDescriptionAr(e.target.value)}
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
