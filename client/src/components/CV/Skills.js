import React, {useState} from "react";
import {Paper, Grid, IconButton, Container, Button} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import AddSkill from "./AddSkill";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Skills() {
  const [ComponentName, setComponentName] = useState("");

  return ComponentName == "AddSkill" ? (
    <AddSkill setComponentName={setComponentName} />
  ) : (
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
            <h2>Your Skills</h2>
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
            {" "}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddSkill")}
            >
              Add Skill
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
