import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddEducationAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function AddEducation(props) {
  const dispatch = useDispatch();

  const [field, setField] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rate100, setRate100] = useState(0);
  const [rate5, setRate5] = useState(0);
  const [estimate, setEstimate] = useState("");
  const data = {
    field,
    universityName,
    city,
    startDate,
    endDate,
    rate100,
    rate5,
    estimate,
  };

  const handelCancel = () => {
    setField("");
    setStartDate("");
    setEndDate("");
    setRate5(0);
    setRate100(0);
    setEstimate("");
    setUniversityName("");
    props.setComponentName("");
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
              onChange={(e) => setField(e.target.value)}
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
              onChange={(e) => setUniversityName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label="City,Country"
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label="Start Date"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="date"
              label="End Date"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: "100%"}}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-basic"
              label="Rate from 100"
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setRate5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              id="filled-basic"
              label="Rate from 5"
              variant="filled"
              style={{width: "100%"}}
              onChange={(e) => setRate100(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              id="filled-basic"
              label="estimate"
              variant="filled"
              style={{width: "50%"}}
              onChange={(e) => setEstimate(e.target.value)}
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
              onClick={() => dispatch(AddEducationAction(data))}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
