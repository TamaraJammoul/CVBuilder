import React, {useState} from "react";
import {Button, Paper, Grid, Container, TextField} from "@material-ui/core";

import {EditExperienceAction} from "./../../../store/action/experience";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import YearPicker from "react-year-picker";

export default function Experience(props) {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("experienceID");
  const experience = useSelector((state) => state.template.experience);
  const old = experience.filter((e) => e.id == id);
  const [experienceName, setExperienceName] = useState(old.Name);
  const [description, setDescription] = useState(old.Description);
  const [startDate, setStartDate] = useState(old.Start);
  const [endDate, setEndDate] = useState(old.End);
  const [project, setProject] = useState(old.Project);
  const [experienceNameAr, setExperienceNameAr] = useState(old.NameAr);
  const [descriptionAr, setDescriptionAr] = useState(old.DescriptionAr);
  const cvID = useSelector((state) => state.cvID);

  const data = {description, experienceName, startDate, endDate, project, id};
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const lan = useSelector((state) => state.sections.twolan);

  const handelCancel = () => {
    setExperienceName("");
    setStartDate(0);
    setDescription("");
    setEndDate(0);
    setProject("");
    setExperienceNameAr("");
    setDescriptionAr("");
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
            <TextField
              id="filled-primary"
              label={t("ExperienceName")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setExperienceNameAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Description")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setDescriptionAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <h5>{t("StartDate")}</h5>
            <YearPicker onChange={(e) => setStartDate(e)} />
          </Grid>
          <Grid item xs={6}>
            <h5>{t("EndDate")}</h5>
            <YearPicker onChange={(e) => setEndDate(e)} />
          </Grid>
          <Grid item xs={12}>
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
