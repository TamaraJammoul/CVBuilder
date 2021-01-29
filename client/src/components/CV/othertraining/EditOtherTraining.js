import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditOtherTrainingAction} from "./../../../store/action/othertraining";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

export default function AddOtherTraining(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("othertrainingID");
  const othertraining = useSelector((state) => state.template.othertraining);
  const old = othertraining.filter((e) => e.id == id);
  const [otherTraining, setOtherTraining] = useState(old.Name);
  const [nameAr, setNameAr] = useState(old.NameAr);
  const data = {id, otherTraining, nameAr, order: "1"};
  const lan = useSelector((state) => state.sections.twolan);

  const handelCancel = () => {
    setOtherTraining("");
    setNameAr("");
    history.push("/buildcv/othertraining");
  };
  return (
    <Paper className="buildcvbar">
      <Container>
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
          <Grid item xs={12} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("OtherTraining")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setNameAr(e.target.value)}
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
      </Container>
    </Paper>
  );
}
