import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import {
  Button,
  Box,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  LinearProgress,
} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {
  VisibilityOff,
  Visibility,
  GetAppTwoTone,
  InsertDriveFileTwoTone,
  Backup,
} from "@material-ui/icons";
import image from "./../img/login-img-eng.png";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grid container justify="center" xs={12} style={{minHeight: "100vh"}}>
      <Grid item xs={12} sm={6}>
        <Box p={10} style={{width: "100%"}}>
          <Grid container spacing={8} justify="center">
            <Grid item>
              {" "}
              <h2>Lets create your CV in 10 min</h2>
            </Grid>
            <Grid item>
              {" "}
              <h4>signup and create account to start build cv with us</h4>
            </Grid>
            <Grid item>
              <Grid container spacing={8} justify="center">
                <Grid item xs={4}>
                  <GetAppTwoTone />
                  <h6>unlimited download</h6>
                </Grid>
                <Grid item xs={4}>
                  <InsertDriveFileTwoTone />
                  <h6>over 30 templete</h6>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Backup />
                  <h6>unlimited download</h6>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {" "}
              <img src={image} className="signupImage" />
            </Grid>
          </Grid>
        </Box>{" "}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box p={10} style={{width: "100%"}}>
          <Paper elevation={3}>
            <Formik
              initialValues={{
                email: "",
                password: "",
                firstName: "",
                lastName: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (!values.password) {
                  errors.password = "Required";
                } else if (!values.firstName) {
                  errors.firstName = "Required";
                } else if (!values.lastName) {
                  errors.lastName = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                } else if (!values.password)
                  errors.password = "password must be at least 8 character";
                return errors;
              }}
              onSubmit={(values, {setSubmitting}) => {
                console.log("values");
                setTimeout(() => {
                  setSubmitting(false);

                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
            >
              {({submitForm, isSubmitting}) => (
                <Form>
                  {" "}
                  <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    direction="column"
                    spacing={8}
                  >
                    <Grid item xs={12}>
                      <h1 style={{marginTop: "30px"}}>Signup for free now</h1>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        name="firstName"
                        type="text"
                        label="FirstName"
                        variant="outlined"
                        style={{width: "270px"}}
                        className="textField"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        name="lastName"
                        type="text"
                        label="LastName"
                        variant="outlined"
                        style={{width: "270px"}}
                        className="textField"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        style={{width: "270px"}}
                        className="textField"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        name="password"
                        type="text"
                        label="Password"
                        variant="outlined"
                        style={{width: "270px"}}
                        className="textField"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                      >
                        Submit
                      </Button>
                      <Link to="/login" style={{marginLeft: "10px"}}>
                        login
                      </Link>
                    </Grid>{" "}
                  </Grid>{" "}
                </Form>
              )}
            </Formik>
          </Paper>
        </Box>
      </Grid>{" "}
    </Grid>
  );
}

export default Signup;
