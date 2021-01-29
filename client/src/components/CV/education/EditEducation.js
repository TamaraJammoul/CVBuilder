import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditEducationAction} from "./../../../store/action/education";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import YearPicker from "react-year-picker";

export default function AddEducation(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("educationID");
  const education = useSelector((state) => state.template.education);
  const old = education.filter((e) => e.id == id);
  const [faculty, setFaculty] = useState(old.Faculty);
  const [universityName, setUniversityName] = useState(old.UniversityName);
  const [startDate, setStartDate] = useState(old.YearStart);
  const [endDate, setEndDate] = useState(old.YearEnd);
  const [rate5, setRate5] = useState(old.DegreeFrom5);
  const [grade, setGrade] = useState(old.Grade);
  const [degree, setDegree] = useState(old.Degree);
  const [facultyAr, setFacultyAr] = useState(old.FacultyAr);
  const [universityNameAr, setUniversityNameAr] = useState(
    old.UniversityNameAr
  );
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  const data = {
    faculty,
    universityName,
    startDate,
    endDate,
    rate5,
    grade,
    id,
    degree,
    universityNameAr,
    facultyAr,
  };
  const lan = useSelector((state) => state.sections.twolan);

  const handelCancel = () => {
    setFaculty("");
    setStartDate(0);
    setEndDate(0);
    setRate5(0);
    setGrade("");
    setUniversityName("");
    setDegree(0);
    setUniversityNameAr("");
    setFacultyAr("");
    history.push("/buildcv/education");
  };
  return (
    <Paper className="buildcvbar">
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
              label={t("faculty")}
              variant="filled"
              placeholder={t("eg.Engineering")}
              style={{width: "100%"}}
              onChange={(e) => setFaculty(e.target.value)}
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
          <Grid item xs={12} sm={6} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("faculty")}
              variant="filled"
              placeholder={t("eg.Engineering")}
              style={{width: "100%"}}
              onChange={(e) => setFacultyAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("SchoolNameorUniversity")}
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setUniversityNameAr(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            {" "}
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
          <Grid item xs={12} sm={6}>
            <FormControl style={{width: "100%"}}>
              <InputLabel id="demo-simple-select-label">
                {t("Ratefrom5")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rate5}
                onChange={(e) => setRate5(e.target.value)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={2}>3</MenuItem>
                <MenuItem value={2}>4</MenuItem>
                <MenuItem value={2}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            {" "}
            <FormControl style={{width: "100%"}}>
              <InputLabel id="demo-simple-select-label">
                {t("grade")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <MenuItem value={1}>{"good"}</MenuItem>
                <MenuItem value={2}>{"very good"}</MenuItem>
                <MenuItem value={3}>{t("excellent")}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <FormControl style={{width: "100%"}}>
              <InputLabel id="demo-simple-select-label">
                {t("Degree")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <MenuItem value={1}>{t("Bachelor")}</MenuItem>
                <MenuItem value={2}>{t("Master")}</MenuItem>
                <MenuItem value={2}>{t("PhD")}</MenuItem>
                <MenuItem value={2}>{t("High school")}</MenuItem>
              </Select>
            </FormControl>
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
                dispatch(EditEducationAction(data));
                history.push("/buildcv/education");
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
