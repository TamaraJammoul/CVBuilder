import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  LinearProgress,
  Avatar,
  TextField,
  Container,
  ButtonGroup,
} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import AddOtherTraining from "./AddOtherTraining";
import {
  EditOtherTrainingAction,
  DeleteOtherTrainingAction,
  CopyOtherTrainingAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function OtherTraining(props) {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const othertraining = useSelector((state) => state.template.othertraining);

  return ComponentName == "AddOtherTraining" ? (
    <AddOtherTraining setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>Your OtherTraining</h2>
          </Grid>
          <Grid item>
            <h5>
              Make a list of all the relevant skills for the job that you have
              and rate how good you are in them. For programming languages and
              technologies we recommend the Software section.
            </h5>
          </Grid>
          {othertraining.map((oth, i) => (
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
                      <h6>{oth.name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Edit
                          onClick={() =>
                            dispatch(
                              EditOtherTrainingAction({
                                newName: "",
                                oldName: "rr",
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
                              CopyOtherTrainingAction({
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
                          onClick={() =>
                            dispatch(DeleteOtherTrainingAction("rr"))
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
            <Button
              variant="contained"
              style={{backgroundColor: "#5B2338"}}
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddOtherTraining")}
            >
              Add Other Training
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
