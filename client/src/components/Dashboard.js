import React, {useEffect} from "react";
import {Container, Grid, Button} from "@material-ui/core";
import Template from "./CV/Template";
import {AddCVAction, DeleteCVAction} from "./../store/action/cv";
import {useTranslation} from "react-i18next";
import {GetAllCVAction, Auth} from "./../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import Nav from "./Layout/HomeNav";
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
    <div className="backgroundimg" style={{minHeight: "100vh"}}>
      <Container>
        <Grid
          container
          direction="row"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Nav />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" direction="row" spacing={10}>
              <Grid item xs={12} sm={6}>
                <h1>Hey, Tamara</h1>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  className="save"
                  onClick={() => dispatch(AddCVAction(email))}
                >
                  {t("Create New CV")}
                </Button>
              </Grid>
            </Grid>
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
      </Container>
    </div>
  );
}
