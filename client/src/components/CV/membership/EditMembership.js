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

  const lan = useSelector((state) => state.sections.twolan);

  const cvID = useSelector((state) => state.cvID);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const id = query.get("membershipID");
  const membership = useSelector((state) => state.template.membership);
  const old = membership.filter((e) => e.id == id);
  const [membershipName, setMembershipName] = useState(old.Name);
  const [nameAr, setNameAr] = useState(old.NameAr);
  const handelCancel = () => {
    setMembershipName("");
    setNameAr("");
    history.push("/buildcv/membership");
  };
  return (
    <Paper className="buildcvbar">
      <Container>
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
          <Grid item xs={12} className={lan == 0 ? "arhide" : ""}>
            {" "}
            <TextField
              id="filled-primary"
              label={t("AddMembership")}
              variant="filled"
              color="primary"
              style={{width: "100%"}}
              onChange={(e) => setNameAr(e.target.value)}
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
                  EditMembershipAction({membershipName, id, nameAr, order: "1"})
                );
                history.push("/buildcv/membership");
              }}
            >
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
