import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditCertificateAction} from "./../../../store/action/certificate";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function EditCertificate(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  let history = useHistory();
  const {t, i18n} = useTranslation();

  const handelCancel = () => {
    setName("");
    setDate("");
    setDescription("");
    history.push("/buildcv/certificates");
  };
  return (
    <Container>
      <Paper>
        <Container>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <h2>{t("Edit Certificate")}</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label={t("Certificate Name")}
                variant="filled"
                style={{width: "100%"}}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="filled-basic"
                label={t("Description")}
                variant="filled"
                style={{width: "100%"}}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                id="date"
                label={t("Date")}
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width: "100%"}}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                className="cancel"
                style={{marginLeft: "10px", float: "right"}}
                onClick={handelCancel}
              >
                {t("cancel")}
              </Button>
              <Button
                variant="contained"
                className="save"
                style={{float: "right"}}
                onClick={() =>
                  dispatch(
                    EditCertificateAction({
                      oldName: "vsd",
                      newName: name,
                      newDescription: description,
                      newDate: date,
                    })
                  )
                }
              >
                {t("save")}
              </Button>
            </Grid>
          </Grid>{" "}
        </Container>
      </Paper>
    </Container>
  );
}
