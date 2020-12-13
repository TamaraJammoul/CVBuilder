import React from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
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
  Container,
} from "@material-ui/core";
export default function Card({CardImage}) {
  return (
    <Paper elevation={3}>
      <Container>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <img
              src={CardImage}
              style={{width: "300px", height: "400px", marginTop: "20px"}}
            />
          </Grid>
          <Grid item>
            <h3>Elegant</h3>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary "
              style={{marginBottom: "20px"}}
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Container>{" "}
    </Paper>
  );
}
