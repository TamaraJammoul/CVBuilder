import React, {useState, useEffect} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DeleteCertificateAction,
  CopyCertificateAction,
  OrderCertificateAction,
  HideCertificateAction,
} from "./../../../store/action/certificate";
import {VisibilityOff, EditSharp, Visibility} from "@material-ui/icons";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
export default function Certificates() {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.template.certificates);
  const certificateslen = useSelector(
    (state) => state.template.certificateslen
  );

  const {t} = useTranslation();
  const cvID = useSelector((state) => state.cvID);
  const [hide, setHide] = useState(0);
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    setCertificates(temp);
  }, [temp]);
  const onDragEnd = (result) => {
    const {destination, source, reason} = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const users = Object.assign([], certificates);
    const droppedUser = certificates[source.index];

    users.splice(source.index, 1);
    users.splice(destination.index, 0, droppedUser);
    setCertificates(users);
    dispatch(OrderCertificateAction({source, destination, cvID, certificates}));
  };
  const renderUsers = (cer, index) => {
    return (
      <Draggable key={index} draggableId={index + " "} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Grid item xs={12} className="mt-3">
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
                    <Grid item xs={6}>
                      <Grid container direction="column">
                        <Grid item>
                          <h6>{cer.Name}</h6>{" "}
                        </Grid>
                        <Grid item>
                          <h6>
                            {cer.Description} <span>({cer.Year})</span>
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
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          dispatch(
                            CopyCertificateAction({
                              id: cer._id,
                              cvID,
                            })
                          )
                        }
                      >
                        <FileCopy />
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
    <Paper
      className="buildcvbar"
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
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
                  startIcon={hide === 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideCertificateAction({cvID, hide}));
                  }}
                >
                  {hide === 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>{" "}
          </Grid>
          <Grid item xs={12}>
            <h5>{t("CertificatesText")}</h5>{" "}
          </Grid>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="dp1">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {certificates.map(renderUsers)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {/* {certificates.length < certificateslen ? ( */}
            <Grid item xs={12}>
              {" "}
              <Link to="/buildcv/addcertificate">
                <Button
                  variant="contained"
                 // startIcon={<DeleteIcon />}
                  className="save"
                >
                  {t("AddCertificate")}
                </Button>
              </Link>
            </Grid>
          {/* ) : (
            ""
          )} */}
        </Grid>
      </Container>
    </Paper>
  );
}
