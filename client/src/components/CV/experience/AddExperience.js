import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Container,
  TextField,
} from "@material-ui/core";

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
  const data = {description, experienceName, startDate, endDate, project};
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
    <Container>
      <Paper elevation={3}>
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
                onClick={() => dispatch(AddExperienceAction(data))}
              >
                {t("save")}
              </Button>
            </Grid>
          </Grid>{" "}
        </Container>{" "}
      </Paper>
    </Container>
  );
}

/*
<Grid item xs={12} sm={12}>
          <h1>Select your Experience Level</h1>
        </Grid>
        <Grid item xs={12} sm={12} style={{width: "100%"}}>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={junior}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Junior / Student</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>1-2 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={senior}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Senior</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>2-6 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={manager}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Executive</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>+6 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid> */
