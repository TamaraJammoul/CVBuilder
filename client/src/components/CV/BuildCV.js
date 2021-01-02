import React, {useState} from "react";
import {Container, Grid, Drawer} from "@material-ui/core";
import PersonalInfo from "./PersonalInfo";
import CareerObjectives from "./careerobjective/CareerObjectives";
import Experience from "./experience/Experience";
import AddExperience from "./experience/AddExperience";
import EditExperience from "./experience/EditExperience";
import OtherTraining from "./othertraining/OtherTraining";
import AddOtherTraining from "./othertraining/AddOtherTraining";
import EditOtherTraining from "./othertraining/EditOtherTraining";
import TechnicalSkills from "./technicalskill/TechnicalSkills";
import AddTechnicalSkills from "./technicalskill/AddTechnicalSkill";
import EditTechnicalSkills from "./technicalskill/EditTechnicalSkill";
import Membership from "./membership/Membership";
import AddMembership from "./membership/AddMembership";
import EditMembership from "./membership/EditMembership";
import Reference from "./reference/Reference";
import EditReference from "./reference/EditReference";
import AddReference from "./reference/AddReference";
import Skills from "./Skills";
import Languages from "./language/Languages";
import AddLanguage from "./language/AddLanguage";
import EditLanguage from "./language/EditLanguage";
import Drawertemp from "./Drawer";
import Navbar from "./../Layout/Navbar";
import Education from "./education/Education";
import AddEducation from "./education/AddEducation";
import EditEducation from "./education/EditEducation";
import Certificates from "./certificate/Certificates";
import AddCertificates from "./certificate/AddCertificate";
import EditCertificates from "./certificate/EditCertificate";
import {Route, Switch, Link, useRouteMatch} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
  Work,
  School,
  LocationCity,
  Language,
  Laptop,
  EmojiPeople,
  Group,
  AccountBox,
} from "@material-ui/icons";

export default function BuildCV(props) {
  const {t} = useTranslation();
  let {path, url} = useRouteMatch();
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Drawer
        anchor={"right"}
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Drawertemp />
      </Drawer>
      <Grid container direction="row" spacing={2} className="backgroundimg">
        <Grid item xs={4} sm={3} className="background">
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            justify="flex-start"
            direction="column"
            style={{
              textAlign: "center",
              padding: "30px",
            }}
          >
            <Grid item xs={12}>
              <h2>{t("CVBuilder")}</h2>
              <hr />
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px"}}>
                  <Work />
                </span>
                <Link to={`${url}/careerobjectives`}>
                  {t("CareerObjectives")}
                </Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <School />
                </span>
                <Link to={`${url}/certificates`}>{t("Certificates")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <LocationCity />
                </span>
                <Link to={`${url}/skills`}>{t("Skills")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <Language />
                </span>
                <Link to={`${url}/languages`}>{t("Language")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <Laptop />
                </span>
                <Link to={`${url}/othertraining`}>{t("OtherTraining")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <EmojiPeople />
                </span>
                <Link to={`${url}/technicalskills`}>
                  {t("TechnicalSkills")}
                </Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <School />
                </span>
                <Link to={`${url}/education`}>{t("Education")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <Work />
                </span>
                <Link to={`${url}/experience`}>{t("Experience")} </Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <Group />
                </span>
                <Link to={`${url}/membership`}>{t("Memberships")}</Link>
              </h3>
            </Grid>
            <Grid item>
              <h3>
                {" "}
                <span style={{marginRight: "10px", marginLeft: "10px"}}>
                  <AccountBox />
                </span>
                <Link to={`${url}/reference`}>{t("References")}</Link>
              </h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={9} style={{width: "100%", height: "100%"}}>
          <Grid
            container
            direction="column"
            spacing={10}
            style={{width: "100%", height: "100%"}}
          >
            <Grid item xs={2} style={{width: "100%", height: "100%"}}>
              <Navbar setDrawerState={setDrawerState} />
            </Grid>
            <Grid item xs={10}>
              <Container style={{width: "100%"}}>
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
                    path={`${path}/technicalskills`}
                    render={(props) => <TechnicalSkills />}
                  />
                  <Route
                    path={`${path}/addtechnicalskills`}
                    render={(props) => <AddTechnicalSkills />}
                  />
                  <Route
                    path={`${path}/edittechnicalskills`}
                    render={(props) => <EditTechnicalSkills />}
                  />
                  <Route
                    path={`${path}/othertraining`}
                    render={(props) => <OtherTraining />}
                  />
                  <Route
                    path={`${path}/addothertraining`}
                    render={(props) => <AddOtherTraining />}
                  />
                  <Route
                    path={`${path}/editothertraining`}
                    render={(props) => <EditOtherTraining />}
                  />
                  <Route
                    path={`${path}/certificates`}
                    render={(props) => <Certificates />}
                  />
                  <Route
                    path={`${path}/addcertificate`}
                    render={(props) => <AddCertificates />}
                  />
                  <Route
                    path={`${path}/editcertificate`}
                    render={(props) => <EditCertificates />}
                  />
                  <Route
                    path={`${path}/reference`}
                    render={(props) => <Reference />}
                  />
                  <Route
                    path={`${path}/editreference`}
                    render={(props) => <EditReference />}
                  />
                  <Route
                    path={`${path}/addreference`}
                    render={(props) => <AddReference />}
                  />
                  <Route
                    path={`${path}/languages`}
                    render={(props) => <Languages />}
                  />
                  <Route
                    path={`${path}/addlanguage`}
                    render={(props) => <AddLanguage />}
                  />
                  <Route
                    path={`${path}/editlanguage`}
                    render={(props) => <EditLanguage />}
                  />
                  <Route
                    path={`${path}/education`}
                    render={(props) => <Education />}
                  />
                  <Route
                    path={`${path}/editeducation`}
                    render={(props) => <EditEducation />}
                  />
                  <Route
                    path={`${path}/addeducation`}
                    render={(props) => <AddEducation />}
                  />
                  <Route
                    path={`${path}/skills`}
                    render={(props) => <Skills />}
                  />
                  <Route
                    path={`${path}/experience`}
                    render={(props) => <Experience />}
                  />
                  <Route
                    path={`${path}/addexperience`}
                    render={(props) => <AddExperience />}
                  />
                  <Route
                    path={`${path}/editexperience`}
                    render={(props) => <EditExperience />}
                  />
                  <Route
                    path={`${path}/membership`}
                    render={(props) => <Membership />}
                  />
                  <Route
                    path={`${path}/addmembership`}
                    render={(props) => <AddMembership />}
                  />
                  <Route
                    path={`${path}/editmembership`}
                    render={(props) => <EditMembership />}
                  />
                </Switch>
              </Container>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
