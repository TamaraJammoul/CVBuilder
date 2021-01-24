import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditAchievementAction} from "../../../store/action/achievement";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

export default function EditAchievement(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const [achievementName, setAchievementName] = useState("");
  const [nameAr, setNameAr] = useState("");

  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("achievementID");
  const handelCancel = () => {
    setAchievementName("");
    setNameAr("");
    history.push("/buildcv/achievement");
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
            <h2>{"Edit Achievements"}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Achievement Name")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setAchievementName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Achievement Name")}
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
                dispatch(
                  EditAchievementAction({
                    achievementName,
                    id,
                    nameAr,
                    order: "1",
                  })
                );
                history.push("/buildcv/achievement");
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
