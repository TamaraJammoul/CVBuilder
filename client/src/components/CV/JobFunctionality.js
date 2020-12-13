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
  Container,
} from "@material-ui/core";
import tie from "./../../img/tie.svg";
export default function JobFunctionality() {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      spacing={2}
    >
      <Grid item>
        <img src={tie} style={{width: "50px"}} />
      </Grid>
      <Grid item>
        <h6>Your Job Functionality</h6>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
