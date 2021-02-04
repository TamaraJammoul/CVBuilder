import React, {useState} from "react";
import {Grid, TextField, Button, Container, Paper} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {cvColor} from "./../../store/action/cv";

export default function CVColor() {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={4}
        data-aos="fade-up-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Grid item>
          <h2 className="fontlan">{t("Resume Color")}</h2>
        </Grid>
        <Grid item>
          <Grid container alignItems="Center" spacing={8}>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                onClick={() => {
                  dispatch(cvColor({color: 1}));
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  style={{padding: "20px"}}
                >
                  <Grid item>
                    <h4>English</h4>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                onClick={() => {
                  dispatch(cvColor({color: 0}));
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  style={{padding: "20px"}}
                >
                  <Grid item>
                    <h4>العربية</h4>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
