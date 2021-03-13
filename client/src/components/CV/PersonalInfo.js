import React, { useState, useEffect } from "react";
import { Button, Paper, Grid, Avatar, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useTranslation } from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import defaultImg from "./../../img/stylingcv-default.jpg";
import { PeraonalInfoAction } from "./../../store/action/action";
import { useSelector, useDispatch } from "react-redux";
export default function PersonalInfo() {
  const { t, i18n } = useTranslation();
  var formData = new FormData();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.template.personalInformation_id);
  const personalData = useSelector((state) => state.template.personalInformation);

  const cvID = useSelector((state) => state.cvID);

  const [firstName, setFirstName] = useState(personalData ? personalData.FirstName : '');
  const [lastName, setLastName] = useState(personalData ? personalData.LastName : '');
  const [email, setEmail] = useState(personalData ? personalData.Email : '');
  const [linkedIn, setLinkedIn] = useState(personalData ? personalData.LinkedIn : '');
  const [birth, setBirth] = useState(personalData ? personalData.Birth : '');
  const [city, setCity] = useState(personalData ? personalData.City : '');
  const [country, setCountry] = useState(personalData ? personalData.Country : '');
  const [nationality, setNationality] = useState(personalData ? personalData.Nationality : '');
  const [maritalStatus, setMaritalStatus] = useState(personalData ? personalData.MaritalStatus : '');
  const [phone, setPhone] = useState(personalData ? personalData.Phone : '');
  const [image, setImage] = useState(personalData ? personalData.Image : defaultImg);

  const send = () => {
    formData.append("cvID", cvID);
    formData.append("_id", id);
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("LinkedIn", linkedIn);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Birth", birth);
    formData.append("City", city);
    formData.append("Country", country);
    formData.append("Nationality", nationality);
    formData.append("MaritalStatus", maritalStatus);
    dispatch(PeraonalInfoAction(formData));
  };
  return (
    <Paper
      elevation={3}
      className="buildcvbar"
      style={{ width: "100%" }}
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
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
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid item xs={12}>
              <Avatar alt="Remy Sharp" src={defaultImg} className="avatar" />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon />}
                className="mt-3"
              >
                <input
                  type="file"
                  name="file"
                  placeholder={t("Upload")}
                  className="input1"
                  onChange={(e) => {
                    const files = e.target.files;
                    formData.append("profile", files[0]);
                    console.log(formData);
                  }}
                />
              </Button>
            </Grid>{" "}
          </Grid>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          alignItems="center"
          justify="center"
          style={{ textAlign: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("FirstName")}
              variant="filled"
              color="primary"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("LastName")}
              variant="filled"
              color="primary"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("LinkedInAccount")}
              variant="filled"
              color="primary"
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("Email")}
              variant="filled"
              color="primary"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("PhoneNumber")}
              variant="filled"
              color="primary"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("Date Of Birth")}
              variant="filled"
              color="primary"
              type="date"
              onChange={(e) => setBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("City")}
              variant="filled"
              color="primary"
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("Country")}
              variant="filled"
              color="primary"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             
              label={t("Nationality")}
              variant="filled"
              color="primary"
              onChange={(e) => setNationality(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">
                {t("Marital Status")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <MenuItem value={1}>{t("Married")}</MenuItem>
                <MenuItem value={2}>{t("Single")}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel mt-3"
              style={{ marginLeft: "10px", float: "right" }}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save mt-3"
              style={{ float: "right" }}
              onClick={() => send()}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Grid>{" "}
    </Paper>
  );
}
