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
import {EditLanguageAction} from "./../../../store/action/language";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
export default function AddLanguage(props) {
  const [language, setLanguage] = useState("");
  const [rate, setRate] = useState(2);
  const dispatch = useDispatch();
  const data = {language, rate};
  let history = useHistory();
  const {t, i18n} = useTranslation();

  const handelCancel = () => {
    setLanguage("");
    setRate(2);
    history.push("/buildcv/languages");
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
              <h2>{t("Edit Language")}</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label={t("Language")}
                variant="filled"
                placeholder={t("eg.English")}
                style={{width: "100%"}}
                onChange={(e) => setLanguage(e.target.value)}
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
                onClick={() =>
                  dispatch(
                    EditLanguageAction({
                      oldName: "rr",
                      newName: "",
                      newRate: 0,
                    })
                  )
                }
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
