import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import AddExperience from "./AddExperience";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Education() {
  const [ComponentName, setComponentName] = useState("");

  return ComponentName == "AddExperience" ? (
    <AddExperience setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="Column" spacing={6}>
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
                    <h4>1</h4>
                  </Grid>
                  <Grid item xs={7}>
                    <Grid container direction="column">
                      <Grid item>
                        <h6>Web design</h6>{" "}
                      </Grid>
                      <Grid item>
                        <h6>
                          description of this experience <span>(2016)</span>
                        </h6>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete">
                      <Edit />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete">
                      <FileCopy />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete">
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
          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddExperience")}
            >
              Add Experience
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
