import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  Container,
  ButtonGroup,
} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DeleteTechnicalSkillAction,
  CopyTechnicalSkillsAction,
} from "../../../store/action/technicalskill";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function TechnicalSkills() {
  const dispatch = useDispatch();
  const technicalskills = useSelector(
    (state) => state.template.technicalskills
  );
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  return (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("TechnicalSkills")}</h2>
          </Grid>
          <Grid item>
            <h5>{t("TechnicalSkillsText")}</h5>
          </Grid>
          {technicalskills.map((per, i) => (
            <Grid item>
              <Paper>
                <Container>
                  <Grid container direction="column" spacing={4}>
                    <Grid item>
                      <h3>{t("SectionSettings")}</h3>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={3}>
                        <Grid item>
                          <h6>{t("Percentage")}</h6>
                          <ButtonGroup
                            size="small"
                            aria-label="small outlined button group"
                          >
                            <Box bgcolor="text.disabled">
                              <Button>{t("Hide")}</Button>
                            </Box>{" "}
                            <Button>{t("Show")}</Button>
                          </ButtonGroup>
                        </Grid>
                        <Grid item>
                          <h6>Progress Bar</h6>
                          <ButtonGroup
                            size="small"
                            aria-label="small outlined button group"
                          >
                            <Box bgcolor="text.disabled">
                              <Button>Hide</Button>
                            </Box>
                            <Button>Show</Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
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
                                  {per.Name}
                                  <span
                                    style={{
                                      backgroundColor: "yellow",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {per.RateFrom5 * 20}%
                                  </span>
                                </h6>{" "}
                              </Grid>
                              <Grid item>
                                <div class="progress">
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{width: `${per.RateFrom5 * 20}%`}}
                                    aria-valuenow={per.RateFrom5 * 20}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  >
                                    {per.RateFrom5 * 20}%
                                  </div>
                                </div>{" "}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <IconButton aria-label="delete">
                              <Link
                                to={`/buildcv/edittechnicalskills?technicalskillID=${per._id}`}
                              >
                                {" "}
                                <Edit />
                              </Link>
                            </IconButton>
                          </Grid>
                          <Grid item xs={1}>
                            <IconButton aria-label="delete">
                              <FileCopy
                                onClick={() =>
                                  dispatch(
                                    CopyTechnicalSkillsAction({
                                      id: per._id,
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
                                    DeleteTechnicalSkillAction({
                                      cvID,
                                      technicalSkill_id: per._id,
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
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          ))}

          <Grid item xs={12}>
            {" "}
            <Link to="/buildcv/addtechnicalskills">
              {" "}
              <Button
                variant="contained"
                style={{backgroundColor: "#5B2338"}}
                startIcon={<DeleteIcon />}
              >
                {t("AddTechnicalSkill")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
