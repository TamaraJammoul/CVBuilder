import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {VisibilityOff, EditSharp, Visibility} from "@material-ui/icons";

import icon from "./../../img/icon.jpg";
import {AddSkillAction, HideSkillAction} from "./../../store/action/skill";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function AddSkill(props) {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const [hide, setHide] = useState(0);
  const cvID = useSelector((state) => state.cvID);

  const handelCancel = () => {
    setSkills([]);
    props.setComponentName("");
  };
  return (
    <Paper className="buildcvbar">
      <Container style={{width: "100%"}}>
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
          <Grid item style={{width: "100%"}} xs={12}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              style={{textAlign: "center"}}
            >
              <Grid item sm={6} xs={12} style={{marginBottom: "10px"}}>
                <h2>{t("Skills")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideSkillAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => setSkills(...skills, "ProblemSolving")}
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={icon} />{" "}
            </IconButton>
            <h6>Problem solving</h6>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              {typeof "cancel"}
            </Button>
            <Button
              variant="contained"
              className="save"
              style={{float: "right"}}
              onClick={() => dispatch(AddSkillAction(skills))}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
