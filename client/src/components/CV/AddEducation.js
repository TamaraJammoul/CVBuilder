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
import {Editor} from "@tinymce/tinymce-react";

export default function AddEducation() {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <Paper>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          style={{textAlign: "center"}}
        >
          <Grid item xs={12} sm={12}>
            {" "}
            <h2>Add Education</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label="Field of study
"
              variant="filled"
              placeholder="eg.Engineering"
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label="School Name or University
"
              variant="filled"
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label="City,Country"
              variant="filled"
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-basic"
              label="Rate from 100"
              variant="filled"
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label="Rate from 5"
              variant="filled"
              style={{width: "100%"}}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label="تقدير"
              variant="filled"
              style={{width: "50%"}}
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
      </Container>
    </Paper>
  );
}
