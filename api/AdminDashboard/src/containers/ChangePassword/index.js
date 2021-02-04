import React, { useState } from "react";
import Layout from '../../components/layouts/index';
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

/**
* @author
* @function ChangePassword
**/

const ChangePassword = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <Layout>
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
                                    oldPassword: "",
                                    password: "",
                                    confirm: "",
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.password) {
                                        errors.password = t("Required");
                                    }
                                    if (!values.password)
                                        errors.password = t("password must be at least 8 character");
                                    return errors;
                                }}
                                onSubmit={(values, { resetForm }) => {
                                    let data = {
                                        Email: localStorage.getItem("email"),
                                        Password: values.password
                                    };
                                    if (localStorage.getItem("password") === values.oldPassword && values.password === values.confirm) {
                                        console.log(data);
                                        axios.post("http://localhost:5000/api/auth/changePasswordAdmin", data).then((res) => {
                                            if (res.data.status == 1) {
                                                console.log(res);
                                                toast.success("Change Password Complete successfully");
                                                history.push("/");
                                            } else {
                                                toast.error("Sorry ,Wronge Password Check Your data");
                                                resetForm({ values: { Email: "", Password: "" } })
                                            }
                                        }).catch((err) => {
                                            console.log(err);
                                        })
                                    } else {
                                        toast.error("Sorry ,Wronge Password Check Your data");
                                        resetForm({ values: { Email: "", Password: "" } })
                                    }
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
                                                <h1 style={{ marginTop: "30px" }}>Change Password</h1>
                                            </Grid>
                                            <Grid item>
                                                <Field
                                                    component={TextField}
                                                    name="oldPassword"
                                                    type="text"
                                                    label={t("Old Password")}
                                                    variant="outlined"
                                                    className="textField"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Field
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    label={t("New Password")}
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
                                                <Field
                                                    name="confirm"
                                                    type={showPassword ? "text" : "password"}
                                                    label={t("confirm Password")}
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
        </Layout>
    )
}

export default ChangePassword;