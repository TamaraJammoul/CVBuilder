import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {AddMembershipAction} from "./../../../store/action/membership";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

export default function AddMembership(props) {
  const dispatch = useDispatch();

  const [membershipName, setMembershipName] = useState("");
  let history = useHistory();
  const {t, i18n} = useTranslation();

  const handelCancel = () => {
    setMembershipName("");
    history.push("/buildcv/membership");
  };
  return (
    <Container>
      <Paper>
        <Grid
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>{t("Memberships")}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("AddMembership")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setMembershipName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
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
              onClick={() => dispatch(AddMembershipAction(membershipName))}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
