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

export default function AddWorkExperience() {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <Container>
      <Paper>
        <Container>
          <Grid container spacing={4} alignItems="center" justify="center">
            <Grid item xs={12} sm={12}>
              {" "}
              <TextField
                id="filled-basic"
                label="Position"
                variant="filled"
                placeholder="eg.software engineer"
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="Company Name"
                variant="filled"
                placeholder="enter your company name"
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="City,Country"
                variant="filled"
                placeholder="enter your city"
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
            <Grid item xs={12} sm={12}>
              <h6>
                Achievements and Responsibilities
                <br />
                Tell us what you did and how you helped the company
              </h6>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Editor
                initialValue="<p>To bring my strong sense of dedication, motivation, and responsibility to [specific company], and to utilize my [skill] qualifications obtained through [name of college or university].</p>"
                init={{
                  height: 300,
                  directionality: "rtl",
                  plugins:
                    "powerpaste advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen  insertdatetime media table paste code help wordcount",
                  toolbar:
                    "code  pageembed permanentpen table undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  toolbar_mode: "floating",
                  tinycomments_mode: "embedded",
                }}
                onEditorChange={handleEditorChange}
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
    </Container>
  );
}
