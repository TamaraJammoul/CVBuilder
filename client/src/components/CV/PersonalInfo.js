import React from "react";
import {
  Button,
  Paper,
  Grid,
  IconButton,
  Avatar,
  TextField,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import {useTranslation} from "react-i18next";

import defaultimg from "./../../img/stylingcv-default.jpg";
export default function PersonalInfo() {
  const {t, i18n} = useTranslation();

  return (
    <Paper elevation={3}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={8}
      >
        <Grid item xs={12}>
          <h3>{t("PersonalInfo")}</h3> <hr />
        </Grid>
        <Grid item xs={12}>
          <Avatar
            alt="Remy Sharp"
            src={defaultimg}
            style={{width: "150px", height: "150px"}}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
          >
            {t("Upload")}
          </Button>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="large" color="secondary" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          alignItems="center"
          justify="center"
          style={{textAlign: "center"}}
        >
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("FirstName")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("LastName")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("LinkedInAccount")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Email")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("PhoneNumber")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Date Of Birth")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Address"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Nationality")}
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label="Marital Status "
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              style={{marginLeft: "10px", float: "right"}}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{float: "right"}}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Grid>{" "}
    </Paper>
  );
}
