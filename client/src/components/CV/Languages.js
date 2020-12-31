import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  Container,
} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import AddLanguage from "./AddLanguage";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditLanguageAction,
  DeleteLanguageAction,
  CopyLanguageAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Languages() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.template.languages);
  const {t} = useTranslation();

  return (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("Languages")}</h2>
          </Grid>
          <Grid item>
            <h5>{t("LanguagesText")}</h5>
          </Grid>
          {languages.map((lan, i) => (
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
                          <h6>
                            {lan.name}
                            <span
                              style={{
                                backgroundColor: "yellow",
                                marginLeft: "10px",
                              }}
                            >
                              {lan.rate}/5
                            </span>
                          </h6>{" "}
                        </Grid>
                        <Grid item>
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                          >
                            <Rating
                              name="customized-10"
                              defaultValue={lan.rate}
                              max={5}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Link to="/editlanguage">
                        {" "}
                        <IconButton aria-label="delete">
                          <Edit />
                        </IconButton>
                      </Link>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(
                              CopyLanguageAction({
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
                          onClick={() => dispatch(DeleteLanguageAction("rr"))}
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
            <Link to="addlanguage">
              {" "}
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                style={{backgroundColor: "#5B2338"}}
              >
                {t("AddLanguage")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
