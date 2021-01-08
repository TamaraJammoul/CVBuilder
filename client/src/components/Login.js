import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import {Button, Box, Paper, Grid, Container} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {VisibilityOff, Visibility} from "@material-ui/icons";
import {LoginAction} from "./../store/action/auth";
import {useSelector, useDispatch} from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Signup from "./Signup";
import {useTranslation} from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  //const state = useSelector((state) => state.template[0]);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      style={{minHeight: "100vh", width: "100%"}}
    >
      <Grid item xs={10} sm={6}>
        <Paper elevation={3} className="login">
          <Container>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = t("Required");
                }
                if (!values.password) {
                  errors.password = t("Required");
                }
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = t("Invalid email address");
                }
                if (!values.password)
                  errors.password = t("password must be at least 8 character");
                return errors;
              }}
              onSubmit={(values, {setSubmitting}) => {
                console.log("values");

                dispatch(LoginAction(values));
              }}
            >
              {({submitForm, isSubmitting}) => (
                <Form>
                  <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    direction="column"
                    spacing={4}
                  >
                    <Grid item>
                      <h1 style={{marginTop: "30px"}}>Login</h1>
                    </Grid>
                    <Grid item>
                      <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label={t("Email")}
                        variant="outlined"
                        className="textField"
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label={t("Password")}
                        variant="outlined"
                        className="textField"
                        component={TextField}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />{" "}
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        disabled={isSubmitting}
                        onClick={submitForm}
                        className="save"
                      >
                        {t("Submit")}
                      </Button>
                      <Link to="/signup" style={{marginLeft: "10px"}}>
                        {t("Signup")}
                      </Link>
                    </Grid>{" "}
                    <Grid item>
                      {" "}
                      <Link to="/forgetpassword">
                        {t("forget your password?")}
                      </Link>
                    </Grid>
                  </Grid>{" "}
                </Form>
              )}
            </Formik>
          </Container>{" "}
        </Paper>
      </Grid>{" "}
    </Grid>
  );
}

export default LoginForm;
