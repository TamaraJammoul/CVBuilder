import React from "react";
import Card from "./Card";
import {Box, Grid} from "@material-ui/core";
import cv1 from "./../../img/cv1.jpg";
import cv2 from "./../../img/cv2.jpg";
import cv3 from "./../../img/cv3.jpg";
import cv4 from "./../../img/cv4.jpg";
import cv5 from "./../../img/cv5.jpg";
import cv6 from "./../../img/cv6.jpg";
import cv7 from "./../../img/cv7.jpg";
import {useTranslation} from "react-i18next";

export default function CVTemplates() {
  const {t, i18n} = useTranslation();

  return (
    <>
      <Grid
        container
        alignItems="center"
        direction="column"
        spacing={6}
        style={{paddingTop: "30px"}}
      >
        <Grid item>
          {" "}
          <h1 style={{color: "#5B2338 "}}>{t("Select Design")}</h1>
        </Grid>
        <Grid item>
          <Grid container spacing={8} justify="center">
            <Grid item xm={4}>
              <Card CardImage={cv1} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv2} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv3} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv4} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv5} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv6} />
            </Grid>
            <Grid item xm={4}>
              <Card CardImage={cv7} />
            </Grid>
          </Grid>
        </Grid>{" "}
      </Grid>{" "}
    </>
  );
}
