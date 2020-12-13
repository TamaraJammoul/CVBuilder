import React from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
export default function AddCertificate() {
  return (
    <Container>
      <Paper>
        <Container>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <h2>Certificate</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="Description"
                variant="filled"
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="date"
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
          </Grid>{" "}
        </Container>
      </Paper>
    </Container>
  );
}
