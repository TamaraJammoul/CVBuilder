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
  const experience = useSelector((state) => state.template.experiences);
  const old = experience.find((e) => e._id == id);
  const [experienceName, setExperienceName] = useState(old ? old.Name : "");
  const [description, setDescription] = useState(old ? old.Description : "");
  const [startDate, setStartDate] = useState(old ? old.Start : 0);
  const [endDate, setEndDate] = useState(old ? old.End : 0);
  const [project, setProject] = useState(old ? old.Project : "");
  const [experienceNameAr, setExperienceNameAr] = useState(
    old ? old.NameAr : ""
  );
  const [descriptionAr, setDescriptionAr] = useState(
    old ? old.DescriptionAr : ""
  );
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
    <Paper
      elevation={3}
      className="buildcvbar"
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
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
              value={experienceName}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} className={lan == 0 ? "arhide" : ""}>
            <TextField
              id="filled-primary"
              label={t("ExperienceNameAr")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              value={experienceNameAr}
              onChange={(e) => setExperienceNameAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} className={lan == 0 ? "arhide" : ""}>
            <TextField
              id="filled-primary"
              label={t("DescriptionAr")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              value={descriptionAr}
              onChange={(e) => setDescriptionAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Grid container direction="row">
              <Grid item xs={6}>
                {" "}
                <h5>{t("StartDate")}</h5>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <YearPicker onChange={(e) => setStartDate(e)} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="row">
              <Grid item xs={6}>
                {" "}
                <h5>{t("EndDate")}</h5>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <YearPicker onChange={(e) => setEndDate(e)} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-primary"
              label={t("Project")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              value={project}
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
