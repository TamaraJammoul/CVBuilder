import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {
  Delete,
  OpenWith,
  Edit,
  FileCopy,
  VisibilityOff,
  Visibility,
} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  HideCoursesAction,
  DeleteCoursesAction,
  CopyCoursesAction,
} from "../../../store/action/courses";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Courses() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.template.courses);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);

  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item xs={12} style={{width: "100%"}}>
            <Grid container alignItems="center" direction="row" spacing={6}>
              <Grid item sm={6} xs={12}>
                <h2>{t("YourCourses")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideCoursesAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>{" "}
          </Grid>
          {courses.map((cou, i) => (
            <Grid item xs={12}>
              <Paper>
                <Container>
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={4}
                    style={{width: "100%"}}
                  >
                    <Grid item xs={1}>
                      <h4>{i + 1}</h4>
                    </Grid>
                    <Grid item xs={7}>
                      <h6>{cou.Name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <Link to={`/buildcv/editcourses?course_id=${cou._id}`}>
                        {" "}
                        <IconButton aria-label="delete">
                          <Edit />
                        </IconButton>
                      </Link>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(CopyCoursesAction({id: cou._id}))
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() =>
                            dispatch(
                              DeleteCoursesAction({cvID, courses_id: cou._id})
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <OpenWith />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Container>{" "}
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            {" "}
            <Link to="/buildcv/addcourses">
              {" "}
              <Button
                variant="contained"
                style={{backgroundColor: "#5B2338"}}
                startIcon={<DeleteIcon />}
              >
                {t("AddCourse")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
