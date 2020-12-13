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
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";

import defaultimg from "./../../img/stylingcv-default.jpg";
export default function PersonalInfo() {
  return (
    <Paper elevation={3}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={8}
      >
        <Grid item xs={12}>
          <h3>Personal Info</h3> <hr />
        </Grid>
        <Grid item xs={12}>
          <Avatar
            alt="Remy Sharp"
            src={defaultimg}
            style={{width: "150px", height: "150px"}}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="large" color="secondary" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          alignItems="center"
          justify="center"
          style={{textAlign: "center"}}
        >
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="First Name"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Last Name"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="LinkedIn Account"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Email"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Phone Number"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Date Of Birth"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Address"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Nationality"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Marital Status "
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}></Grid>
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
      </Grid>{" "}
    </Paper>
  );
}
