import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditCertificateAction} from "./../../../store/action/certificate";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import YearPicker from "react-year-picker";

export default function EditCertificate(props) {
  const dispatch = useDispatch();
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("certificateID");
  const certificates = useSelector((state) => state.template.certificates);
  const old = certificates.filter((e) => e.id == id);
  const [name, setName] = useState(old.Name);
  const [description, setDescription] = useState(old.Description);
  const [nameAr, setNameAr] = useState(old.NameAr);
  const [descriptionAr, setDescriptionAr] = useState(old.DescriptionAr);
  const [date, setDate] = useState(old.Year);
  const cvID = useSelector((state) => state.cvID);
  let history = useHistory();
  const {t, i18n} = useTranslation();

  const lan = useSelector((state) => state.sections.twolan);

  const data = {
    name,
    description,
    date,
    nameAr,
    descriptionAr,
    id,
    order: "1",
    cvID,
  };
  const handelCancel = () => {
    setName("");
    setDate(0);
    setNameAr("");
    setDescription("");
    setDescriptionAr("");
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
            <h2>{t("Edit Certificate")}</h2>
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
          <Grid item xs={12} sm={6} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Certificate Name")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setNameAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={lan == 0 ? "arhide" : ""}>
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
            <h5>{t("Date")}</h5>
            <YearPicker onChange={(e) => setDate(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
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
                dispatch(EditCertificateAction(data));
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
