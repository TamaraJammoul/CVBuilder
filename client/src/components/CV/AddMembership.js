import React from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
export default function AddMembership() {
  return (
    <Container>
      <Paper>
        <Grid
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>Memberships</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label="Add Membership"
              variant="filled"
              color="primary"
              style={{width: "100%"}}
            />
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
