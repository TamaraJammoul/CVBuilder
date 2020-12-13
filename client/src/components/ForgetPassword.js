import React from "react";
import {TextField, Paper, Grid, Button, Box} from "@material-ui/core";
export default function ForgetPassword() {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid item xs={12}>
        <Paper elevation={3} style={{width: "600px", padding: "30px"}}>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12}>
              <h3 style={{paddingTop: "30px"}}>Forget your password?</h3>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                style={{width: "400px"}}
                className="textField"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Send
              </Button>{" "}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
