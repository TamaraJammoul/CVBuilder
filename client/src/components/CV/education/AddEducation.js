import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddEducationAction} from "./../../../store/action/education";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import YearPicker from "react-year-picker";

export default function AddEducation(props) {
  const dispatch = useDispatch();

  const [faculty, setFaculty] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [rate5, setRate5] = useState(0);
  const [grade, setGrade] = useState(1);
  const [degree, setDegree] = useState(1);
  const [facultyAr, setFacultyAr] = useState("");
  const [universityNameAr, setUniversityNameAr] = useState("");
  const [cityAr, setCityAr] = useState("");
  const {t, i18n} = useTranslation();
  let history = useHistory();
  const cvID = useSelector((state) => state.cvID);
  const lan = useSelector((state) => state.sections.twolan);

  const data = {
    faculty,
    universityName,
    city,
    startDate,
    endDate,
    rate5,
    grade,
    cvID,
    degree,
    universityNameAr,
    cityAr,
    facultyAr,
  };

  const handelCancel = () => {
    setFaculty("");
    setStartDate(0);
    setEndDate(0);
    setRate5(0);
    setGrade("");
    setUniversityName("");
    setUniversityNameAr("");
    setFacultyAr("");
    setCityAr("");
    history.push("/buildcv/education");
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
          spacing={4}
          alignItems="center"
          justify="center"
          style={{textAlign: "center"}}
        >
          <Grid item xs={12} sm={12}>
            {" "}
            <h2>{t("AddEducation")}</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label={t("faculty")}
              variant="filled"
              placeholder="eg.Engineering"
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
            {" "}
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
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
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
                <MenuItem value={1}>{t("good")}</MenuItem>
                <MenuItem value={2}>{t("very good")}</MenuItem>
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
                <MenuItem value={3}>{t("PhD")}</MenuItem>
                <MenuItem value={4}>{t("High school")}</MenuItem>
              </Select>
            </FormControl>
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
                dispatch(AddEducationAction(data));
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
