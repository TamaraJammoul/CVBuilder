import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import AddEducation from "./AddEducation";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditEducationAction,
  DeleteEducationAction,
  CopyEducationAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function Education() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.template.educations);
  const {t, i18n} = useTranslation();

  return ComponentName == "AddEducation" ? (
    <AddEducation setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("Education")}</h2>
          </Grid>
          <Grid item>
            <h5>{t("EducationText")}</h5>
          </Grid>
          {educations.map((edu, i) => (
            <Grid item key={i}>
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
                          <h6>
                            {edu.field}
                            <span
                              style={{
                                backgroundColor: "yellow",
                                marginLeft: "10px",
                              }}
                            >
                              ({edu.rate100}%)
                            </span>
                          </h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {edu.universityName}{" "}
                            <span>
                              ({edu.startDate}-{edu.endDate})
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
                              EditEducationAction({
                                newField: "",
                                oldField: "rr",
                                newUniversityName: "",
                                newCity: "",
                                newStartDate: new Date(),
                                newEndDate: new Date(),
                                newRate100: 0,
                                newRate5: 0,
                                newEstimate: "",
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
                              CopyEducationAction({
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
                          onClick={() => dispatch(DeleteEducationAction("rr"))}
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
              onClick={(e) => setComponentName("AddEducation")}
              style={{backgroundColor: "#5B2338"}}
            >
              {t("AddEducation")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
