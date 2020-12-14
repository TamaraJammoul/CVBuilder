import React, {useState} from "react";
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
  Container,
  TextField,
} from "@material-ui/core";
import junior from "./../../img/student.svg";
import senior from "./../../img/worker.svg";
import manager from "./../../img/manager.svg";

export default function Experience(props) {
  const [experienceName, setExperienceName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [project, setProject] = useState("");

  const handelSubmit = () => {
    console.log(experienceName, description, startDate, endDate, project);
  };
  const handelCancel = () => {
    setExperienceName("");
    setStartDate(new Date());
    setDescription("");
    setEndDate(new Date());
    setProject("");
    props.setComponentName("");
  };
  return (
    <Container>
      <Paper elevation={3}>
        <Container>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={8}
            style={{textAlign: "center"}}
          >
            <Grid item xs={12}>
              <h3>Experience</h3> <hr />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-primary"
                label="Experience Name"
                variant="filled"
                color="primary"
                style={{width: "100%"}}
                onChange={(e) => e.setExperienceName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-primary"
                label="Description"
                variant="filled"
                color="primary"
                style={{width: "100%"}}
                onChange={(e) => e.setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                id="date"
                label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width: "100%"}}
                onChange={(e) => e.setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                id="date"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width: "100%"}}
                onChange={(e) => e.setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-primary"
                label="Project"
                variant="filled"
                color="primary"
                style={{width: "100%"}}
                onChange={(e) => e.setProject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{marginLeft: "10px", float: "right"}}
                onClick={handelCancel}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{float: "right"}}
                onClick={handelSubmit}
              >
                save
              </Button>
            </Grid>
          </Grid>{" "}
        </Container>{" "}
      </Paper>
    </Container>
  );
}

/*
<Grid item xs={12} sm={12}>
          <h1>Select your Experience Level</h1>
        </Grid>
        <Grid item xs={12} sm={12} style={{width: "100%"}}>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={junior}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Junior / Student</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>1-2 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={senior}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Senior</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>2-6 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <img
                      src={manager}
                      style={{width: "100px", paddingTop: "10px"}}
                    />
                  </Grid>
                  <Grid item>
                    <h4 style={{marginTop: "30px"}}>Executive</h4>
                  </Grid>
                  <Grid item>
                    <h6 style={{marginTop: "20px"}}>+6 Years</h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid> */
