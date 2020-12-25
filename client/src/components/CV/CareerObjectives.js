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
import {VisibilityOff, EditSharp} from "@material-ui/icons";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditCareerObjectiveAction,
  DeleteCareerObjectiveAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";

export default function CareerObjectives() {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  const dispatch = useDispatch();

  return (
    <Container>
      <Paper elevation={3}>
        <Container>
          <Grid container alignItems="center" direction="column" spacing={8}>
            <Grid item style={{width: "100%"}}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                style={{textAlign: "center"}}
              >
                <Grid item sm={6} xs={12}>
                  <h2>Career Objectives</h2>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {" "}
                  <ButtonGroup disableElevation variant="outlined">
                    <Button color="primary" startIcon={<EditSharp />}>
                      Rename
                    </Button>
                    <Button color="secondary" startIcon={<VisibilityOff />}>
                      Hide Section
                    </Button>{" "}
                  </ButtonGroup>
                </Grid>
              </Grid>{" "}
            </Grid>
            <Grid item xs={12}>
              <h5>
                A resume summary is a short, snappy introduction highlighting
                your career progress, achievements and skill set.
              </h5>
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="delete">
                <Edit
                  onClick={() => dispatch(EditCareerObjectiveAction("rr"))}
                />
              </IconButton>
            </Grid>

            <Grid item xs={1}>
              <IconButton aria-label="delete">
                <Delete
                  onClick={() => dispatch(DeleteCareerObjectiveAction())}
                />
              </IconButton>
            </Grid>
            <Grid item>
              {" "}
              <Editor
                initialValue="<p>To bring my strong sense of dedication, motivation, and responsibility to [specific company], and to utilize my [skill] qualifications obtained through [name of college or university].</p>"
                init={{
                  height: 200,
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
          </Grid>
        </Container>{" "}
      </Paper>
    </Container>
  );
}
