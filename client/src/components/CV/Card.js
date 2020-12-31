import React from "react";
import {Link} from "react-router-dom";
import {Button, Paper, Grid, Container} from "@material-ui/core";
import {useTranslation} from "react-i18next";

export default function Card({CardImage}) {
  const {t, i18n} = useTranslation();

  return (
    <Paper elevation={3}>
      <Container>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <img
              src={CardImage}
              style={{width: "300px", height: "400px", marginTop: "20px"}}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              style={{marginBottom: "20px"}}
              className="save"
            >
              {t("Select")}
            </Button>
          </Grid>
        </Grid>
      </Container>{" "}
    </Paper>
  );
}
