import React, {useEffect} from "react";
import {Container, Grid, Button} from "@material-ui/core";
import Template from "./CV/Template";
import {AddCVAction, DeleteCVAction} from "./../store/action/cv";
import {useTranslation} from "react-i18next";
import {GetAllCVAction, Auth} from "./../store/action/action";
import {useSelector, useDispatch} from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const email = useSelector((state) => state.email);
  const myTemplate = useSelector((state) => state.MyTemplates);

  useEffect(() => {
    dispatch(GetAllCVAction(email));
    if (localStorage.getItem("token")) {
      dispatch(Auth());
    }
  }, []);
  return (
    <Grid
      container
      direction="row"
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Button className="save" onClick={() => dispatch(AddCVAction(email))}>
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
          {myTemplate.map((template) => (
            <Grid item xs={12} sm={4}>
              <Template template />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
