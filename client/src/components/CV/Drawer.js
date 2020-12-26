import React from "react";
import {Button, Box, Paper, Grid, Container, Avatar} from "@material-ui/core";
import defaultimg from "./../../img/stylingcv-default.jpg";
import {
  PowerSettingsNew,
  Email,
  Call,
  Dashboard,
  Help,
  AccountBox,
} from "@material-ui/icons";
import {Link, Redirect} from "react-router-dom";
function logout() {
  localStorage.clear();
  return (
    <Redirect
      to={{
        pathname: `/login`,
        // state: {from: props.location},
        key: "redirect-login",
      }}
    />
  );
}
export default function Drawer() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{paddingTop: "20px", width: "300px"}}
      >
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={defaultimg}
            style={{width: "50px", height: "50px"}}
          />
        </Grid>
        <Grid item>
          <h5>
            <AccountBox /> <span>Tamara Jammoul</span>
          </h5>

          <hr />
        </Grid>
        <Grid item>
          <h5>
            {" "}
            <Dashboard />{" "}
            <span>
              <Link to="dashboard">Dashboard </Link>
            </span>
          </h5>
        </Grid>
        <Grid item>
          <h5>
            {" "}
            <AccountBox />
            <span>
              <Link to="myaccount">My Account</Link>
            </span>
          </h5>
        </Grid>

        <Grid item>
          <h5>
            {" "}
            <Email />
            <span>
              <Link to="contactus">Contact Us</Link>
            </span>
          </h5>
          <hr />
        </Grid>
        <Grid item>
          <h5 onClick={() => logout()}>
            <PowerSettingsNew />
            <span>Logout</span>
          </h5>
        </Grid>
      </Grid>
    </Container>
  );
}
