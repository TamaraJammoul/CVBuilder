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
  DeleteTechnicalSkillAction,
  CopyTechnicalSkillsAction,
  HideTechnicalSkillAction,
  OrderTechnicalSkillAction,
} from "../../../store/action/technicalskill";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export default function TechnicalSkills() {
  const dispatch = useDispatch();
  const technicalskills = useSelector(
    (state) => state.template.technicalskills
  );
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);
  const onDragEnd = (result) => {
    const {destination, source, reason} = result;
    console.log("kljj", source, destination, reason);
    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    dispatch(OrderTechnicalSkillAction({source, destination, cvID}));
    const users = Object.assign([], technicalskills);
    const droppedUser = technicalskills[source.index];

    users.splice(source.index, 1);
    users.splice(destination.index, 0, droppedUser);
  };
  const renderUsers = (per, index) => {
    return (
      <Draggable key={index} draggableId={per._id + " "} index={per._id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
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
                            <h4>{index + 1}</h4>
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
                            <IconButton
                              aria-label="delete"
                              onClick={() =>
                                dispatch(
                                  CopyTechnicalSkillsAction({
                                    id: per._id,
                                  })
                                )
                              }
                            >
                              <FileCopy />
                            </IconButton>
                          </Grid>
                          <Grid item xs={1}>
                            <IconButton
                              aria-label="delete"
                              onClick={() =>
                                dispatch(
                                  DeleteTechnicalSkillAction({
                                    cvID,
                                    technicalSkill_id: per._id,
                                  })
                                )
                              }
                            >
                              <Delete />
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
          </div>
        )}
      </Draggable>
    );
  };
  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item style={{width: "100%"}} sx={12}>
            <Grid container alignItems="center" direction="row" spacing={6}>
              <Grid item sm={6} xs={12}>
                <h2>{t("TechnicalSkills")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideTechnicalSkillAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <h5>{t("TechnicalSkillsText")}</h5>
          </Grid>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="dp1">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {technicalskills.map(renderUsers)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
