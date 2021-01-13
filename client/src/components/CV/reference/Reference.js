import React, {useState, useEffect} from "react";
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
import {useSelector, useDispatch} from "react-redux";
import {
  DeleteReferenceAction,
  OrderReferenceAction,
  CopyReferenceAction,
  HideReferenceAction,
} from "./../../../store/action/reference";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export default function Refernce() {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.template.references);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);
  const [references, setReferences] = useState([]);
  useEffect(() => {
    setReferences(temp);
  }, [temp]);
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
    const users = Object.assign([], references);
    const droppedUser = references[source.index];

    users.splice(source.index, 1);
    users.splice(destination.index, 0, droppedUser);
    setReferences(users);
    dispatch(OrderReferenceAction({source, destination, cvID, references}));
  };
  const renderUsers = (ref, index) => {
    return (
      <Draggable key={index} draggableId={index + " "} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
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
                      <h4>{index + 1}</h4>
                    </Grid>
                    <Grid item xs={7}>
                      <h6>{ref.Name}</h6>{" "}
                    </Grid>
                    <Grid item xs={7}>
                      <h6>{ref.Phone}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <Link
                        to={`/buildcv/editreference?referenceID=${ref._id}`}
                      >
                        {" "}
                        <IconButton aria-label="delete">
                          <Edit />
                        </IconButton>
                      </Link>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          console.log("kljklj");
                          dispatch(
                            CopyReferenceAction({
                              id: ref._id,
                            })
                          );
                        }}
                      >
                        <FileCopy />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          console.log("kljklj");
                          dispatch(
                            DeleteReferenceAction({cvID, reference_id: ref._id})
                          );
                        }}
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
                <h2>{t("YourRefernces")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideReferenceAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <h5>{t("YourReferncesText")}</h5>
          </Grid>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="dp1">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {references.map(renderUsers)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Grid item xs={12}>
            {" "}
            <Link to="/buildcv/addreference">
              {" "}
              <Button
                variant="contained"
                style={{backgroundColor: "#5B2338"}}
                startIcon={<DeleteIcon />}
              >
                {t("AddReference")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
