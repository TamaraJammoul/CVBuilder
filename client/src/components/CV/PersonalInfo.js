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
import {PeraonalInfoAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function PersonalInfo() {
  const {t, i18n} = useTranslation();
  let formData = new FormData();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.personalInformation_id);
  formData.append("_id", id);

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
            <input
              type="file"
              name="file"
              placeholder={t("Upload")}
              className="input1"
              onChange={(e) => {
                const files = e.target.files;
                console.log(files);
                formData.append("file", files[0]);
              }}
            />
          </Button>
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
              onChange={(e) => formData.append("FirstName", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("LastName")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("LastName", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("LinkedInAccount")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("LinkedIn", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Email")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("Email", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("PhoneNumber")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("Phone", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Date Of Birth")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("Birth", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("City")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("City", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Country")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("Country", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Nationality")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("Nationality", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="filled-primary"
              label={t("Marital Status")}
              variant="filled"
              color="primary"
              onChange={(e) => formData.append("MaritalStatus", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel"
              style={{marginLeft: "10px", float: "right"}}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save"
              style={{float: "right"}}
              onClick={dispatch(PeraonalInfoAction(formData))}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Grid>{" "}
    </Paper>
  );
}
