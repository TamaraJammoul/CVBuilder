import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {
  Delete,
  OpenWith,
  Edit,
  FileCopy,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DeleteOtherTrainingAction,
  CopyOtherTrainingAction,
  HideOtherTrainingAction,
} from "./../../../store/action/othertraining";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
export default function OtherTraining(props) {
  const dispatch = useDispatch();
  const othertraining = useSelector((state) => state.template.othertraining);
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("othertrainingID");
  const [hide, setHide] = useState(0);

  return (
    <Paper className="buildcvbar">
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item style={{width: "100%"}} sx={12}>
            <Grid container alignItems="center" direction="row" spacing={6}>
              <Grid item sm={6} xs={12}>
                <h2>{t("YourOtherTraining")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideOtherTrainingAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <h5>{t("OtherTrainingText")}</h5>
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
                      <h6>{oth.Name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <Link
                        to={`/buildcv/editothertraining?othertrainingID=${oth._id}`}
                      >
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
                              CopyOtherTrainingAction({
                                id: oth._id,
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
                              DeleteOtherTrainingAction({
                                otherTraining_id: oth._id,
                                cvID,
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
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            {" "}
            <Link to="addothertraining">
              {" "}
              <Button
                variant="contained"
                style={{backgroundColor: "#5B2338"}}
                startIcon={<DeleteIcon />}
              >
                {t("AddOtherTraining")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
