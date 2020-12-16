import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddCertificateAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";

export default function AddCertificate(props) {
  //const state = useSelector((state) => state.template[0]);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const data = {name, description, date};

  const handelCancel = () => {
    setName("");
    setDate(new Date());
    setDescription("");
    props.setComponentName("");
  };
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
              <h2>Add Certificate</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                style={{width: "100%"}}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label="Description"
                variant="filled"
                style={{width: "100%"}}
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                onClick={() => dispatch(AddCertificateAction(data))}
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
