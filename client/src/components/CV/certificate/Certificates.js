import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DeleteCertificateAction,
  CopyCertificateAction,
  HideCertificateAction,
} from "./../../../store/action/certificate";
import {VisibilityOff, EditSharp, Visibility} from "@material-ui/icons";

import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Certificates() {
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.template.certificates);
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
                <h2>{t("YourCertificates")}</h2>
              </Grid>

              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideCertificateAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>{" "}
          </Grid>
          <Grid item xs={12}>
            <h5>{t("CertificatesText")}</h5>{" "}
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
                          <h6>{cer.Name}</h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {cer.Description} <span>({cer.Date})</span>
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Link
                        to={`/buildcv/editcertificate?certificateID=${cer._id}`}
                      >
                        {" "}
                        <IconButton aria-label="delete">
                          <Edit />
                        </IconButton>
                      </Link>
                    </Grid>
                    <Grid item xs={1}>
                      {" "}
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(
                              CopyCertificateAction({
                                id: cer._id,
                              })
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          dispatch(
                            DeleteCertificateAction({
                              cvID,
                              certificate_id: cer._id,
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
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            {" "}
            <Link to="/buildcv/addcertificate">
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                style={{backgroundColor: "#5B2338"}}
              >
                {t("AddCertificate")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
