import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditCoursesAction} from "../../../store/action/courses";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function EditCourse(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const [coursesName, setCoursesName] = useState("");
  const cvID = useSelector((state) => state.cvID);

  const handelCancel = () => {
    setCoursesName("");
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
            <h2>{"EditCourses"}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("CoursesName")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setCoursesName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
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
              onClick={() =>
                dispatch(EditCoursesAction({coursesName, cvID, order: "1"}))
              }
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
