import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCertificate from "./AddCertificate";
import {
  EditCertificateAction,
  DeleteCertificateAction,
  CopyCertificateAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function Certificates() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.template.certificates);

  return ComponentName == "AddCertificate" ? (
    <AddCertificate setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>Your Certificates</h2>
          </Grid>
          <Grid item>
            <h5>
              Make a list of all the relevant skills for the job that you have
              and rate how good you are in them. For programming languages and
              technologies we recommend the Software section.
            </h5>
          </Grid>
          {certificates.map((cer, i) => (
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
                          <h6>{cer.name}</h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {cer.description} <span>({cer.date})</span>
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          dispatch(
                            EditCertificateAction({
                              oldName: "vsd",
                              newName: "",
                              newDescription: "",
                              newDate: new Date(),
                            })
                          )
                        }
                      >
                        <Edit />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(
                              CopyCertificateAction({
                                name: "rr",
                              })
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => dispatch(DeleteCertificateAction("tam"))}
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
          ))}

          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddCertificate")}
            >
              Add Certificate
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
