import React, {useState} from "react";
import {Container, Grid, Drawer} from "@material-ui/core";
import PersonalInfo from "./PersonalInfo";
import CareerObjectives from "./CareerObjectives";
import Experience from "./Experience";
import OtherTraining from "./OtherTraining";
import PersonalSkills from "./PersonalSkills";
import Membership from "./Membership";
import Reference from "./Reference";
import Skills from "./Skills";
import Languages from "./Languages";
import Drawertemp from "./Drawer";
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
import Navbar from "./../Layout/Navbar";
import Education from "./Education";
import Certificates from "./Certificates";
import {Route, Switch, Link, useRouteMatch} from "react-router-dom";
import {useTranslation} from "react-i18next";

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
                <Link to={`${url}/personalskills`}>{t("PersonalSkills")}</Link>
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
              <Container>
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
                  <Route
                    path={`${path}/skills`}
                    render={(props) => <Skills />}
                  />
                  <Route
                    path={`${path}/experience`}
                    render={(props) => <Experience />}
                  />
                  <Route
                    path={`${path}/membership`}
                    render={(props) => <Membership />}
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
