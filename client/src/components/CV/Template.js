import React, { useEffect } from "react";
import { Container, Paper, Grid, IconButton, Avatar } from "@material-ui/core";
import image from "./../../img/cv1.jpg";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { DeleteCVAction, EditCVAction } from "./../../store/action/cv";
export default function Template(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const email = useSelector((state) => state.email);
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <Paper className="shadow"
    >
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              src={image}
              className="avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </Grid>
          <Grid item>
            <h5>{props.template.Name}</h5>
          </Grid>
          <Grid item>
            <h6>
              {t("Created")}:{props.template.CreatedDate}
            </h6>
          </Grid>

          <Grid item>
            <h6>
              {t("Language")}: {props.template.Language}
            </h6>
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
                <Link
                  to="/buildcv/peronalinfo"
                  onClick={() =>
                    dispatch(EditCVAction({ cvID: props.template._id }))
                  }
                >
                  {" "}
                  <IconButton aria-label="delete">
                    <Edit style={{ color: "rgba(69, 35, 73, 0.9)" }} />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    console.log(props.template._id, email)
                    dispatch(DeleteCVAction({ cvID: props.template._id, email }))
                  }}
                >
                  <Delete style={{ color: "#606060" }} />
                </IconButton>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
