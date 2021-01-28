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

export default function AddEducation(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const [faculty, setFaculty] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rate5, setRate5] = useState(0);
  const [grade, setGrade] = useState(1);
  const [degree, setDegree] = useState(1);
  const [facultyAr, setFacultyAr] = useState("");
  const [universityNameAr, setUniversityNameAr] = useState("");
  const [cityAr, setCityAr] = useState("");
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("educationID");
  const data = {
    faculty,
    universityName,
    city,
    startDate,
    endDate,
    rate5,
    grade,
    id,
    degree,
    universityNameAr,
    cityAr,
    facultyAr,
  };
  const lan = useSelector((state) => state.sections.twolan);

  const handelCancel = () => {
    setFaculty("");
    setStartDate("");
    setEndDate("");
    setRate5(0);
    setGrade("");
    setUniversityName("");
    setDegree(0);
    setUniversityNameAr("");
    setFacultyAr("");
    setCityAr("");
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
          <Grid item xs={12} sm={6} className={lan == 1 ? "arhide" : ""}>
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
          <Grid item xs={12} sm={6} className={lan == 1 ? "arhide" : ""}>
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
            <FormControl>
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
            <FormControl>
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
            <FormControl>
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
