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
  DeleteExperienceAction,
  CopyExperienceAction,
  HideExperienceAction,
} from "./../../../store/action/experience";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Education() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.template.experiences);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);

  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item style={{width: "100%"}} sx={12}>
            <Grid container alignItems="center" direction="row" spacing={6}>
              <Grid item sm={6} xs={12}>
                <h2>{t("Experience")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideExperienceAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <h5>{t("ExperienceText")}</h5>
          </Grid>
          {experiences.map((exp, i) => (
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
                      <Grid container direction="column">
                        <Grid item>
                          <h6>{exp.Name}</h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {exp.Description}
                            <span>
                              ({exp.Start}-{exp.End})
                            </span>
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Link
                        to={`/buildcv/editexperience?experienceID=${exp._id}`}
                      >
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
                            dispatch(
                              CopyExperienceAction({
                                id: exp._id,
                              })
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() =>
                            dispatch(
                              DeleteExperienceAction({
                                cvID,
                                experience_id: exp._id,
                              })
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
            <Link to="/buildcv/addexperience">
              {" "}
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                style={{backgroundColor: "#5B2338"}}
              >
                {t("AddExperience")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
