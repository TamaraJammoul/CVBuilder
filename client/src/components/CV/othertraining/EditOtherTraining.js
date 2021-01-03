import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditOtherTrainingAction} from "./../../../store/action/othertraining";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

export default function AddOtherTraining(props) {
  const [otherTraining, setOtherTraining] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("othertrainingID");
  const data = {id, otherTraining, order: "1"};

  const handelCancel = () => {
    setOtherTraining("");
    history.push("/buildcv/othertraining");
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
            <h2>{t("EditOtherTraining")}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("OtherTraining")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setOtherTraining(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
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
              onClick={() => {
                dispatch(EditOtherTrainingAction(data));
                history.push("/buildcv/othertraining");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
