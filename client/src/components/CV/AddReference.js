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
export default function Membership() {
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
            <h2>Reference</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label="Add Reference"
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
