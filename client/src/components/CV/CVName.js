import React from "react";
import {Grid, TextField, Button} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
export default function CVName() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={4}
    >
      <Grid item>
        <h2>Resume Name</h2>
      </Grid>
      <Grid item>
        <h5>A well-composed resume can literally change your life</h5>
      </Grid>
      <Grid item>
        {" "}
        <TextField id="standard-basic" label="Resume Name" />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<ArrowForward />}
        >
          Lets Start
        </Button>
      </Grid>
    </Grid>
  );
}
