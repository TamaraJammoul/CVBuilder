import React, {useState} from "react";
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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import defaultimg from "./../../img/stylingcv-default.jpg";
import {PeraonalInfoAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function PersonalInfo() {
  const {t, i18n} = useTranslation();
  let formData = new FormData();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.personalInformation_id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(1);
  const [phone, setPhone] = useState("");

  const send = () => {
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
    console.log(maritalStatus, "kjklj");

    dispatch(PeraonalInfoAction({data: formData}));
  };
  return (
    <Paper elevation={3} className="buildcvbar" style={{width: "100%"}}>
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
              <Avatar alt="Remy Sharp" src={defaultimg} className="avatar" />
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
                    formData.append("file", files[0]);
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
          style={{textAlign: "center"}}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
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
              id="filled-primary"
              label={t("LastName")}
              variant="filled"
              color="primary"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("LinkedInAccount")}
              variant="filled"
              color="primary"
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("Email")}
              variant="filled"
              color="primary"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("PhoneNumber")}
              variant="filled"
              color="primary"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("Date Of Birth")}
              variant="filled"
              color="primary"
              type="date"
              onChange={(e) => setBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("City")}
              variant="filled"
              color="primary"
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("Country")}
              variant="filled"
              color="primary"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-primary"
              label={t("Nationality")}
              variant="filled"
              color="primary"
              onChange={(e) => setNationality(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{width: "50%"}}>
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
              style={{marginLeft: "10px", float: "right"}}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save mt-3"
              style={{float: "right"}}
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
