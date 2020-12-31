import React from "react";
import {Container, Grid, Button} from "@material-ui/core";
import Template from "./CV/Template";
import {AddCVAction} from "./../store/action/action";
import {useTranslation} from "react-i18next";
import {useSelector, useDispatch} from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  return (
    <Grid
      container
      direction="row"
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Button className="save" onClick={() => dispatch(AddCVAction())}>
          {t("Create New CV")}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Template />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
