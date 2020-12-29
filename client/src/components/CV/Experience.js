import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import AddExperience from "./AddExperience";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditExperienceAction,
  DeleteExperienceAction,
  CopyExperienceAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function Education() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.template.experiences);
  const {t, i18n} = useTranslation();
  return ComponentName == "AddExperience" ? (
    <AddExperience setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("Experience")}</h2>
          </Grid>
          <Grid item>
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
                          <h6>{exp.experienceName}</h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {exp.description}
                            <span>
                              ({exp.startDate}-{exp.endDate})
                            </span>
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Edit
                          onClick={() =>
                            dispatch(
                              EditExperienceAction({
                                newName: "",
                                oldName: "rr",
                                newDescription: "",
                                newExperienceName: "",
                                newStartDate: "",
                                newEndDate: "",
                                newProject: "",
                              })
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(
                              CopyExperienceAction({
                                name: "rr",
                              })
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() => dispatch(DeleteExperienceAction("rr"))}
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
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddExperience")}
              style={{backgroundColor: "#5B2338"}}
            >
              {t("AddExperience")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
