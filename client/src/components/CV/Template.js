import React from "react";
import {Container, Paper, Grid, IconButton} from "@material-ui/core";
import image from "./../../img/cv1.jpg";
import {Delete, Edit} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {AddCVAction} from "./../../store/action/action";
export default function Template() {
  const dispatch = useDispatch();

  return (
    <Paper>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <img src={image} style={{width: "250px"}} />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              spacing={4}
            >
              <Grid item xs={1}>
                <Link to="/editmembership">
                  {" "}
                  <IconButton aria-label="delete">
                    <Edit style={{color: "blue"}} />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="delete">
                  <Delete style={{color: "red"}} />
                </IconButton>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
