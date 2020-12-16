import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddMembershipAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";

export default function AddMembership(props) {
  const dispatch = useDispatch();

  const [membershipName, setMembershipName] = useState("");

  const handelCancel = () => {
    setMembershipName("");
    props.setComponentName("");
  };
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
            <h2>Memberships</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label="Add Membership"
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setMembershipName(e.target.value)}
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
              onClick={() => dispatch(AddMembershipAction(membershipName))}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
