import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddCertificateAction} from "./../../../store/action/certificate";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import YearPicker from "react-year-picker";

export default function AddCertificate(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [descriptionAr, setDescriptionAr] = useState("");
  const [date, setDate] = useState(0);
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
  const {t} = useTranslation();
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
    <Paper
      className="buildcvbar"
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
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
          <Grid item xs={12} sm={6} className={lan === 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Certificate NameAr")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setNameAr(e.target.value)}
            />
          </Grid> 
          <Grid item xs={12} sm={6} className={lan === 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("DescriptionAr")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setDescriptionAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <Grid container direction="row" style={{width:"100%"}}>
              <Grid item xs={6}>
                {" "}
                <h5>{t("Date")}</h5>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <YearPicker onChange={(e) => setDate(e)} />
              </Grid>
            </Grid>
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
