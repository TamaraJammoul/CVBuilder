import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  TextField,
  Container,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {AddPersonalSkillsAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function AddPersonalSkill(props) {
  const [skill, setSkill] = useState("");
  const [rate, setRate] = useState(2);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  let history = useHistory();

  const data = {rate, skill};
  const handelCancel = () => {
    setSkill("");
    setRate(2);
    history.push("/buildcv/personalskill");
  };
  return (
    <Container>
      <Paper>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justify="center"
            style={{textAlign: "center"}}
          >
            <Grid item xs={12}>
              <h2>{t("AddPersonalSkill")}</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label={t("Skill")}
                variant="filled"
                placeholder="eg.Microsoft Word"
                style={{width: "100%"}}
                onChange={(e) => setSkill(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="customized-10"
                  defaultValue={2}
                  max={5}
                  onChange={(e) => setRate(e.target.value)}
                />
              </Box>
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
                onClick={() => dispatch(AddPersonalSkillsAction(data))}
              >
                {t("save")}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
