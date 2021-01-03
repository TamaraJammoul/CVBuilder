import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddCoursesAction} from "../../../store/action/courses";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function AddCourses(props) {
  const dispatch = useDispatch();
  const cvID = useSelector((state) => state.cvID);
  const [courses, setCourses] = useState("");
  let history = useHistory();
  const {t, i18n} = useTranslation();

  const handelCancel = () => {
    setCourses("");
    history.push("/buildcv/courses");
  };
  return (
    <Container>
      <Paper>
        <Grid
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>{t("AddCourse")}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("CourseName")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setCourses(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              className="cancel"
              style={{marginLeft: "10px", float: "right"}}
              onClick={handelCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="contained"
              className="save"
              style={{float: "right"}}
              onClick={() => {
                dispatch(AddCoursesAction({courses, cvID, order: "1"}));
                history.push("/buildcv/courses");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
