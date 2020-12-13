import React from "react";
import {Grid, Paper, Container} from "@material-ui/core";
import us from "./../../img/us.svg";
import ar from "./../../img/sa.svg";

export default function CVLanguage() {
  return (
    <Paper>
      <Container>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={4}
        >
          <Grid item>
            <h2>Resume language</h2>
          </Grid>
          <Grid item style={{width: "600px"}}>
            <Grid container alignItems="Center" spacing={8}>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <Grid
                    container
                    alignItems="center"
                    direction="column"
                    style={{padding: "20px"}}
                  >
                    <Grid item>
                      <h4>English</h4>
                    </Grid>
                    <Grid item>
                      {" "}
                      <img src={us} style={{width: "50px"}} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <Grid
                    container
                    alignItems="center"
                    direction="column"
                    style={{padding: "20px"}}
                  >
                    <Grid item>
                      <h4>العربية</h4>
                    </Grid>
                    <Grid item>
                      {" "}
                      <img src={ar} style={{width: "50px"}} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
