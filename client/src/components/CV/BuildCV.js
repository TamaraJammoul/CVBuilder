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
import Skill from "./Skills";
import WorkExperience from "./WorkExperience";
import Languages from "./Languages";
import SaveIcon from "@material-ui/icons/Save";
import Navbar from "./../Layout/Navbar";
import Education from "./Education";
import AddCertificate from "./AddCertificate";
import Certificates from "./Certificates";

export default function BuildCV() {
  const [ComponentName, setComponentName] = useState("");

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
            <h3 onClick={() => setComponentName("CareerObjectives")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Career Objectives
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Certificate")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Certificates
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Skills")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Skills
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Language")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Language
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("OtherTraining")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Other Training
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("PersonalSkills")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Personal Skills
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Education")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Education
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Experience")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Experience
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Memberships")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Memberships
            </h3>
          </Grid>
          <Grid item>
            <h3 onClick={() => setComponentName("Reference")}>
              {" "}
              <span style={{marginRight: "10px"}}>
                <SaveIcon />
              </span>
              Reference
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
            {ComponentFun(ComponentName)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
function ComponentFun(ComponentName) {
  return ComponentName == "CareerObjectives" ? (
    <CareerObjectives />
  ) : ComponentName == "Reference" ? (
    <Reference />
  ) : ComponentName == "Skills" ? (
    <Skill />
  ) : ComponentName == "Memberships" ? (
    <Membership />
  ) : ComponentName == "OtherTraining" ? (
    <OtherTraining />
  ) : ComponentName == "PersonalInfo" ? (
    <PersonalInfo />
  ) : ComponentName == "Experience" ? (
    <Experience />
  ) : ComponentName == "PersonalSkills" ? (
    <PersonalSkills />
  ) : ComponentName == "WorkExperience" ? (
    <WorkExperience />
  ) : ComponentName == "Certificate" ? (
    <Certificates />
  ) : ComponentName == "Language" ? (
    <Languages />
  ) : ComponentName == "Education" ? (
    <Education />
  ) : (
    ""
  );
}
