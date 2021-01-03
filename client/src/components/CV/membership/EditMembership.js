import React, {useState} from "react";
import {Button, Paper, Grid, TextField, Container} from "@material-ui/core";
import {EditMembershipAction} from "./../../../store/action/membership";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

export default function EditMembership(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const {t, i18n} = useTranslation();
  const [membershipName, setMembershipName] = useState("");
  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("membershipID");
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
            <h2>{"Edit Memberships"}</h2>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("Membership Name")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setMembershipName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
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
              onClick={() => {
                dispatch(
                  EditMembershipAction({membershipName, id, order: "1"})
                );
                history.push("/buildcv/membership");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
