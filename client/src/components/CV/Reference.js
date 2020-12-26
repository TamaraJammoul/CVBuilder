import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import AddReference from "./AddReference";
import {useSelector, useDispatch} from "react-redux";
import {
  DeleteReferenceAction,
  EditReferenceAction,
  CopyReferenceAction,
} from "./../../store/action/action";

export default function Refernce() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const references = useSelector((state) => state.template.references);

  return ComponentName == "AddReference" ? (
    <AddReference setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>Your Refernces</h2>
          </Grid>
          <Grid item>
            <h5>
              Make a list of all the relevant skills for the job that you have
              and rate how good you are in them. For programming languages and
              technologies we recommend the Software section.
            </h5>
          </Grid>
          {references.map((ref, i) => (
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
                      <h6>{ref.name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Edit
                          onClick={() => {
                            console.log("kljklj");
                            dispatch(
                              EditReferenceAction({
                                newName: "",
                                oldName: "tamara",
                              })
                            );
                          }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() => {
                            console.log("kljklj");
                            dispatch(
                              CopyReferenceAction({
                                name: "rr",
                              })
                            );
                          }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() => {
                            console.log("kljklj");
                            dispatch(DeleteReferenceAction("tamara"));
                          }}
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
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddReference")}
            >
              Add Reference
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
