import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Container } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function SignIn(props) {
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation();
    const history = useHistory();
    localStorage.setItem("logged", 0);
    return (
        <Grid
            container
            justify="space-around"
            alignItems="center"
            style={{ minHeight: "100vh", width: "100%" }}
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
                            onSubmit={(values, { resetForm }) => {
                                let data = {
                                    Email: values.email,
                                    Password: values.password
                                };
                                axios.post("https://we4cv.com/old/api/auth/logInAdmin", data).then((res) => {
                                    console.log(res.data);
                                    if (res.data.status === 1) {
                                        toast.success("Login Complete ,Welcome Sir");
                                        localStorage.setItem("password", values.password);
                                        localStorage.setItem("logged", 1);
                                        history.push("/changePassword");

                                    }
                                    else {
                                        toast.error("Sorry ,Wronge Email or Password");
                                        resetForm({ values: { Email: "", Password: "" } })
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })
                            }}
                        >
                            {({ submitForm, isSubmitting }) => (
                                <Form>
                                    <Grid
                                        container
                                        alignItems="center"
                                        justify="space-between"
                                        direction="column"
                                        spacing={4}
                                    >
                                        <Grid item>
                                            <h1 style={{ marginTop: "30px" }}>Login</h1>
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
                                        </Grid>{" "}
                                        <Grid item>
                                            {" "}

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

export default SignIn;