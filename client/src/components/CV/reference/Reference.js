import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {useSelector, useDispatch} from "react-redux";
import {
  DeleteReferenceAction,
  EditReferenceAction,
  CopyReferenceAction,
} from "./../../../store/action/reference";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Refernce() {
  const dispatch = useDispatch();
  const references = useSelector((state) => state.template.references);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  return (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("YourRefernces")}</h2>
          </Grid>
          <Grid item>
            <h5>{t("YourReferncesText")}</h5>
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
                      <Link to="/buildcv/editreference">
                        {" "}
                        <IconButton aria-label="delete">
                          <Edit />
                        </IconButton>
                      </Link>
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
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          console.log("kljklj");
                          dispatch(
                            DeleteReferenceAction({cvID, reference_id: "1"})
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
          ))}

          <Grid item xs={12}>
            {" "}
            <Link to="buildcv/addreference">
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
