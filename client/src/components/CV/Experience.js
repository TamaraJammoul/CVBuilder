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
export default function Education() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.template.experiences);

  return ComponentName == "AddExperience" ? (
    <AddExperience setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>Experience</h2>
          </Grid>
          <Grid item>
            <h5>
              Make a list of all the relevant skills for the job that you have
              and rate how good you are in them. For programming languages and
              technologies we recommend the Software section.
            </h5>
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
              Add Experience
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
