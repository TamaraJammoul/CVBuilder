import React, {useState} from "react";
import {Button, Paper, Grid, Container, TextField} from "@material-ui/core";

import {EditExperienceAction} from "./../../../store/action/experience";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Experience(props) {
  const [experienceName, setExperienceName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [project, setProject] = useState("");
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("experienceID");
  const data = {description, experienceName, startDate, endDate, project, id};
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();

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
            <h3>{t("Edit Experience")}</h3> <hr />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Experience Name")}
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
                dispatch(EditExperienceAction(data));
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
