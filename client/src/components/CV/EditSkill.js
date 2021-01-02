import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import {AddSkillAction} from "../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function AddSkill(props) {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();

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
            <h2>Skills</h2>
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
              variant="contained"
              color="secondary"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{float: "right"}}
              onClick={() => dispatch(AddSkillAction(skills))}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
