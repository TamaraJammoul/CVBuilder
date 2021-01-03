import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import {AddSkillAction} from "../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function AddSkill(props) {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  const handelCancel = () => {
    setSkills([]);
    props.setComponentName("");
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
            <h2>{t("Skills")}</h2>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "solve probleme")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("solve probleme")}</h6>
          </Grid>

          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "unctuality")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("punctuality")}</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "using computer")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("using computer")}</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) =>
                setSkills(...skills, "leadership and organaization")
              }
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("leadership and organaization")}</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "teamwork")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("teamwork")}</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "work under pressure")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("work under pressure")}</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "office programs")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("office programs")}</h6>
          </Grid>

          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "self development")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>{t("self development")}</h6>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{float: "right"}}
              onClick={() => dispatch(AddSkillAction({skills, cvID}))}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
