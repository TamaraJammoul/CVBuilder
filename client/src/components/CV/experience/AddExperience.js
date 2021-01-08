import React, {useState} from "react";
import {Button, Paper, Grid, Container, TextField} from "@material-ui/core";

import {AddExperienceAction} from "./../../../store/action/experience";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function Experience(props) {
  const [experienceName, setExperienceName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [project, setProject] = useState("");
  const cvID = useSelector((state) => state.cvID);
  const data = {description, experienceName, startDate, endDate, project, cvID};
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  let history = useHistory();

  const handelCancel = () => {
    setExperienceName("");
    setStartDate("");
    setDescription("");
    setEndDate("");
    setProject("");
    history.push("/buildcv/experience");
  };
  return (
    <Paper elevation={3} className="buildcvbar">
      <Container>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={8}
          style={{textAlign: "center"}}
        >
          <Grid item xs={12}>
            <h3>{t("Experience")}</h3> <hr />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("ExperienceName")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setExperienceName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Description")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Project")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setProject(e.target.value)}
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
                dispatch(AddExperienceAction(data));
                history.push("/buildcv/experience");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>{" "}
      </Container>{" "}
    </Paper>
  );
}
