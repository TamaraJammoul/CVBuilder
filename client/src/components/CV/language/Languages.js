import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  Container,
} from "@material-ui/core";
import {
  Delete,
  OpenWith,
  Edit,
  FileCopy,
  VisibilityOff,
  Visibility,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import AddLanguage from "./AddLanguage";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DeleteLanguageAction,
  CopyLanguageAction,
  HideLanguageAction,
} from "./../../../store/action/language";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Languages() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.template.languages);
  const {t} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);

  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item style={{width: "100%"}} sx={12}>
            <Grid container alignItems="center" direction="row" spacing={6}>
              <Grid item sm={6} xs={12}>
                <h2>{t("Languages")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideLanguageAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
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
                            {lan.Name}
                            <span
                              style={{
                                backgroundColor: "yellow",
                                marginLeft: "10px",
                              }}
                            >
                              {lan.Rate}/5
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
                              defaultValue={lan.Rate}
                              max={5}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Link to={`/buildcv/editlanguage?language_id=${lan._id}`}>
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
                                id: lan._id,
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
                              DeleteLanguageAction({cvID, language_id: lan._id})
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
