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
  ButtonGroup,
} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";

export default function WorkExperience() {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="Column"
        spacing={6}
      >
        <Grid item>
          <h2>Work Experience</h2>
        </Grid>
        <Grid item>
          <h5>
            This section is the heart of your resume so make sure you write it
            well. Start with your current position, then list all the previous
            positions.
          </h5>
        </Grid>
        <Grid item>
          <Paper>
            <Grid
              container
              alignItems="center"
              justify="center"
              spacing={4}
              style={{width: "100%"}}
            >
              <Grid item xs={1}>
                <h4>1</h4>
              </Grid>
              <Grid item xs={7}>
                <Grid container direction="column">
                  <Grid item>
                    <h6>Current position,Company Name</h6>{" "}
                  </Grid>
                  <Grid item>
                    <h6>Feb 2020 - Feb 2021</h6>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete">
                  <Edit />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete">
                  <FileCopy />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete">
                  <Delete />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete">
                  <OpenWith />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
