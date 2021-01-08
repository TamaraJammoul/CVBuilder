import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditCoursesAction} from "../../../store/action/courses";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

export default function EditCourse(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const [coursesName, setCoursesName] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("course_id");
  const handelCancel = () => {
    setCoursesName("");
    history.push("/buildcv/courses");
  };
  return (
    <Paper className="buildcvbar">
      <Container>
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
            {" "}
            <TextField
              id="filled-primary"
              label={t("Description")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Year")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setYear(e.target.value)}
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
              onClick={() => {
                dispatch(
                  EditCoursesAction({
                    coursesName,
                    id,
                    order: "1",
                    year,
                    description,
                  })
                );
                history.push("/buildcv/courses");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
