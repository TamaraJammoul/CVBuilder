import React from 'react';
import Layout from '../../components/layouts';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Paper, Grid, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from 'react';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

export default function BasicTable2() {
    const [row, setRows] = useState([]);
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Layout>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                style={{ minHeight: "50vh", width: "90%" }}
            >
                <Grid item xs={10} sm={6}>
                    <Paper elevation={3} className="login">
                        <Container>
                            <Formik
                                initialValues={{
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    return errors;
                                }}
                                onSubmit={(values) => {
                                    console.log("asd");
                                    axios.get("https://we4cv.com/old/api/cv/getCVsData").then((res) => {
                                        if (res.data.status === 1 && res.data.cv.length > 0) {
                                            toast.success("CVs retrieved successfully");
                                            console.log(res.data);
                                            setRows(res.data.cv);
                                        }
                                        else {
                                            toast.error("No CV Founded");
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
                                                <h1 style={{ marginTop: "30px" }}>Refresh the List</h1>
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

                                        </Grid>{" "}
                                    </Form>
                                )}
                            </Formik>
                        </Container>{" "}
                    </Paper>
                </Grid>{" "}
            </Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>CV ID</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Language</TableCell>
                            <TableCell align="right">Template</TableCell>
                            <TableCell align="right">Created Date</TableCell>
                            <TableCell align="right">Edited Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.map((row) => (
                            <TableRow key={row.ID}>
                                <TableCell component="th" scope="row">
                                    {row.ID}
                                </TableCell>
                                <TableCell align="right">{row.Email}</TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.Language}</TableCell>
                                <TableCell align="right">{row.Template}</TableCell>
                                <TableCell align="right">{row.CreatedData}</TableCell>
                                <TableCell align="right">{row.EditedDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}