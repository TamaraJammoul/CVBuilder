import React from "react";
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
export default function AddSkill() {
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
            >
              cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{float: "right"}}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
