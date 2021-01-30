import React, {useState} from "react";
import {Paper, Grid, IconButton, Container, Button} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function Skills() {
  const skills = useSelector((state) => state.template.skills);
  const {t} = useTranslation();
  const addSkill = (t) => {
    if (skills.find(t) != -1) skills.push(t);
  };
  return (
    <Container>
      <Paper>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{
            textAlign: "center",
          }}
          spacing={3}
        >
          <Grid item xs={12} style={{marginBottom: "10px"}}>
            <h2>{t("YourSkills")}</h2>
          </Grid>

          <Grid
            item
            xs={3}
            className={skills.find("Office Programs") != -1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Computer Proficiency")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Office Programs")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={skills.find("Time Managment") != -1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Time Managment")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Time Managment")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={
              skills.find("Work under pressure") != -1 ? "bg-light" : ""
            }
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Work under pressure")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Work under pressure")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={skills.find("Problem solving") != -1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Problem solving")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Problem solving")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={skills.find("Self Development") != -1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Self Development")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Self Development")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={skills.find("Team Work") != -1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Team Work")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Team Work")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={
              skills.find("Leadership and Organisation") != -1 ? "bg-light" : ""
            }
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Leadership and Organisation")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Leadership and Organisation")}</h6>
          </Grid>
          <Grid
            item
            xs={3}
            className={
              skills.find("Computer Proficiency") != -1 ? "bg-light" : ""
            }
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Computer Proficiency")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("Computer Proficiency")}</h6>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              style={{backgroundColor: "#5B2338"}}
              startIcon={<DeleteIcon />}
            >
              {t("AddSkill")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
