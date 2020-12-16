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
} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {VisibilityOff, Visibility} from "@material-ui/icons";
import {LoginAction} from "./../store/action/action";
import {useSelector, useDispatch} from "react-redux";

function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const state = useSelector((state) => state.template[0]);
  const dispatch = useDispatch();
  return (
    <Grid container justify="center" style={{minHeight: "100vh"}}>
      <Grid item xs={12} sm={6}>
        <h1>{state}</h1>
        <Box p={10} style={{width: "100%"}}>
          <Paper elevation={3}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (!values.password) {
                  errors.password = "Required";
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
                  alert(JSON.stringify(values, null, 2));
                }, 500);
                dispatch(LoginAction(",jlkj"));
              }}
            >
              {({submitForm, isSubmitting}) => (
                <Form>
                  <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    direction="column"
                    spacing={8}
                  >
                    <Grid item>
                      <h1 style={{marginTop: "30px"}}>Login</h1>
                    </Grid>
                    <Grid item>
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
                    <Grid item>
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
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                      >
                        Submit
                      </Button>
                      <Link to="/signup" style={{marginLeft: "10px"}}>
                        signup
                      </Link>
                    </Grid>{" "}
                    <Grid item>
                      {" "}
                      <Link to="/forgetpassword">forget your password?</Link>
                    </Grid>
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

export default LoginForm;
