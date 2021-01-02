import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditCoursesAction,
  DeleteCoursesAction,
  CopyCoursesAction,
} from "../../../store/action/membership";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Courses() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.template.courses);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  return (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("YourCourses")}</h2>
          </Grid>

          {memberships.map((mem, i) => (
            <Grid item>
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
                      <h6>{mem.name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <Link to="/editcourses">
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
                            dispatch(CopyCoursesAction({name: "rr"}))
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() =>
                            dispatch(
                              DeleteCoursesAction({cvID, courses_id: "1"})
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
            <Link to="/addcourses">
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
