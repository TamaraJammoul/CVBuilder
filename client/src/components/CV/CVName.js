import React, {useState} from "react";
import {Grid, TextField, Button} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {useSelector, useDispatch} from "react-redux";
import {CVName1} from "./../../store/action/cv";
import {useTranslation} from "react-i18next";

export default function CVName() {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [name, setName] = useState("");
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={4}
    >
      <Grid item>
        <h2>{t("Resume Name")}</h2>
      </Grid>
      <Grid item>
        <h5>{t("cvnametext")}</h5>
      </Grid>
      <Grid item>
        {" "}
        <TextField
          id="standard-basic"
          label="Resume Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<ArrowForward />}
          onClick={() => dispatch(CVName1({name}))}
        >
          {t("Lets Start")}
        </Button>
      </Grid>
    </Grid>
  );
}
