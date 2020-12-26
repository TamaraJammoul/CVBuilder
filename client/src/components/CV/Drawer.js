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
export default function Drawer() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
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
            <Dashboard /> <span>Dashboard </span>
          </h5>
        </Grid>
        <Grid item>
          <h5>
            {" "}
            <AccountBox />
            <span>My Account</span>
          </h5>
        </Grid>
        <Grid item>
          <h5>
            <Help />
            <span>Help Center</span>
          </h5>
        </Grid>
        <Grid item>
          <h5>
            {" "}
            <Email />
            <span>Contact Us</span>
          </h5>
          <hr />
        </Grid>
        <Grid item>
          <h5>
            <PowerSettingsNew />
            <span>Logout</span>
          </h5>
        </Grid>
      </Grid>
    </Container>
  );
}
