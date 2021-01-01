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
} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import {AddSkillAction} from "./../../store/action/skill";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function AddSkill(props) {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
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
      </Paper>
    </Container>
  );
}
