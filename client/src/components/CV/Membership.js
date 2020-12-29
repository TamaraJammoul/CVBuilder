import React, {useState} from "react";
import {Button, Paper, Grid, IconButton, Container} from "@material-ui/core";
import {Delete, OpenWith, Edit, FileCopy} from "@material-ui/icons";
import AddMembership from "./AddMembership";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  EditMembershipAction,
  DeleteMembershipAction,
  CopyMembershipAction,
} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function Membership() {
  const [ComponentName, setComponentName] = useState("");
  const dispatch = useDispatch();
  const memberships = useSelector((state) => state.template.memberships);
  const {t, i18n} = useTranslation();

  return ComponentName == "AddMembership" ? (
    <AddMembership setComponentName={setComponentName} />
  ) : (
    <Paper>
      <Container>
        <Grid container alignItems="center" direction="column" spacing={6}>
          <Grid item>
            <h2>{t("YourMemberships")}</h2>
          </Grid>
          <Grid item>
            <h5>{t("YourMembershipsText")}</h5>
          </Grid>
          {memberships.map((mem, i) => (
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
                      <h6>{mem.name}</h6>{" "}
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Edit
                          onClick={() =>
                            dispatch(
                              EditMembershipAction({oldName: "rr", newName: ""})
                            )
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <FileCopy
                          onClick={() =>
                            dispatch(CopyMembershipAction({name: "rr"}))
                          }
                        />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton aria-label="delete">
                        <Delete
                          onClick={() => dispatch(DeleteMembershipAction("rr"))}
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
            <Button
              variant="contained"
              style={{backgroundColor: "#5B2338"}}
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddMembership")}
            >
              {t("AddMembership")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
