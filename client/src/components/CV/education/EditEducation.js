import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditEducationAction} from "./../../../store/action/education";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function AddEducation(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const [field, setField] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rate100, setRate100] = useState(0);
  const [rate5, setRate5] = useState(0);
  const [estimate, setEstimate] = useState("");
  const {t, i18n} = useTranslation();

  const data = {
    field,
    universityName,
    city,
    startDate,
    endDate,
    rate100,
    rate5,
    estimate,
  };

  const handelCancel = () => {
    setField("");
    setStartDate("");
    setEndDate("");
    setRate5(0);
    setRate100(0);
    setEstimate("");
    setUniversityName("");
    history.push("/buildcv/education");
  };
  return (
    <Paper>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          style={{textAlign: "center"}}
        >
          <Grid item xs={12} sm={12}>
            {" "}
            <h2>{t("Edit Education")}</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Fieldofstudy")}
              variant="filled"
              placeholder={t("eg.Engineering")}
              style={{width: "100%"}}
              onChange={(e) => setField(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("SchoolNameorUniversity")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setUniversityName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("City,Country")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label={t("StartDate")}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label={t("EndDate")}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-basic"
              label={t("Ratefrom100")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setRate5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("Ratefrom5")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setRate100(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("estimate")}
              variant="filled"
              style={{width: "50%"}}
              onChange={(e) => setEstimate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
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
              onClick={() =>
                dispatch(
                  EditEducationAction({
                    newField: field,
                    oldField: "rr",
                    newUniversityName: universityName,
                    newCity: city,
                    newStartDate: startDate,
                    newEndDate: endDate,
                    newRate100: rate100,
                    newRate5: rate5,
                    newEstimate: estimate,
                  })
                )
              }
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
