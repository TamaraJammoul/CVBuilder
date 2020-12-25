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
  LinearProgress,
  Avatar,
  TextField,
  Container,
  ButtonGroup,
} from "@material-ui/core";
import PersonalInfo from "./PersonalInfo";
import CareerObjectives from "./CareerObjectives";
import Experience from "./Experience";
import OtherTraining from "./OtherTraining";
import PersonalSkills from "./PersonalSkills";
import Membership from "./Membership";
import Reference from "./Reference";
import Skills from "./Skills";
import Languages from "./Languages";
import SaveIcon from "@material-ui/icons/Save";
import Navbar from "./../Layout/Navbar";
import Education from "./Education";
import Certificates from "./Certificates";
import {Route, Switch, Link, useRouteMatch} from "react-router-dom";
export default function BuildCV() {
  let {path, url} = useRouteMatch();
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={3}>
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
          justify="flex-start"
          direction="column"
          style={{
            textAlign: "center",
            padding: "30px",
            //position: "fixed",
          }}
        >
          <Grid item xs={12}>
            <h2>CV Builder</h2>
            <hr />
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/careerobjectives`}>Career Objectives</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/certificates`}>Certificates</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/skills`}>Skills</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/languages`}>Language</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/othertraining`}>Other Training</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/personalskills`}>Personal Skills</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/education`}>Education</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/experience`}> Experience</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/membership`}> Memberships</Link>
            </h3>
          </Grid>
          <Grid item>
            <h3>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              <Link to={`${url}/reference`}>References</Link>
            </h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} style={{width: "100%", height: "100%"}}>
        <Grid
          container
          direction="column"
          spacing={10}
          style={{width: "100%", height: "100%"}}
        >
          <Grid item xs={2} style={{width: "100%", height: "100%"}}>
            <Navbar />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route
                path={`${path}/peronalinfo`}
                render={(props) => <PersonalInfo />}
              />
              <Route
                path={`${path}/careerobjectives`}
                render={(props) => <CareerObjectives />}
              />

              <Route
                path={`${path}/personalskills`}
                render={(props) => <PersonalSkills />}
              />
              <Route
                path={`${path}/othertraining`}
                render={(props) => <OtherTraining />}
              />
              <Route
                path={`${path}/certificates`}
                render={(props) => <Certificates />}
              />

              <Route
                path={`${path}/reference`}
                render={(props) => <Reference />}
              />
              <Route
                path={`${path}/languages`}
                render={(props) => <Languages />}
              />
              <Route
                path={`${path}/education`}
                render={(props) => <Education />}
              />
              <Route path={`${path}/skills`} render={(props) => <Skills />} />
              <Route
                path={`${path}/experience`}
                render={(props) => <Experience />}
              />
              <Route
                path={`${path}/membership`}
                render={(props) => <Membership />}
              />
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
