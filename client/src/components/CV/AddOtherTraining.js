import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddOtherTrainingAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function AddOtherTraining(props) {
  const [otherTraining, setOtherTraining] = useState("");
  const dispatch = useDispatch();
  const handelCancel = () => {
    setOtherTraining("");
    props.setComponentName("");
  };
  const {t, i18n} = useTranslation();

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
            <h2>Other Training</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label="Other Training"
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setOtherTraining(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save"
              style={{float: "right"}}
              onClick={() => dispatch(AddOtherTrainingAction(otherTraining))}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
