import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditCoursesAction} from "../../../store/action/courses";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";
import YearPicker from "react-year-picker";

export default function EditCourse(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();

  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("course_id");
  const courses = useSelector((state) => state.template.courses);
  const old = courses.filter((e) => e.id == id);
  const [coursesName, setCoursesName] = useState(old.Name);
  const [description, setDescription] = useState(old.Description);
  const [coursesNameAr, setCoursesNameAr] = useState(old.NameAr);
  const [descriptionAr, setDescriptionAr] = useState(old.DescriptionAr);
  const [year, setYear] = useState(old.Year);
  const lan = useSelector((state) => state.sections.twolan);

  const handelCancel = () => {
    setCoursesName("");
    setCoursesNameAr("");
    setDescriptionAr("");
    setDescription("");
    setYear(0);
    history.push("/buildcv/courses");
  };
  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid
          container
          spacing={4}
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
          <Grid item xs={12} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("CoursesName")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setCoursesNameAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Description")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setDescriptionAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={6}>
                {" "}
                <h5>{t("Year")}</h5>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <YearPicker onChange={(e) => setYear(e)} />
              </Grid>
            </Grid>
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
