import React, {useState} from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  TextField,
  Container,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {AddPersonalSkillsAction} from "./../../store/action/action";
import {useSelector, useDispatch} from "react-redux";
export default function AddPersonalSkill(props) {
  const [skill, setSkill] = useState("");
  const [rate, setRate] = useState(2);
  const dispatch = useDispatch();

  const data = {rate, skill};
  const handelCancel = () => {
    setSkill("");
    setRate(2);
    props.setComponentName("");
  };
  return (
    <Container>
      <Paper>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justify="center"
            style={{textAlign: "center"}}
          >
            <Grid item xs={12}>
              <h2>Add Personal Skill</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label="Skill"
                variant="filled"
                placeholder="eg.Microsoft Word"
                style={{width: "100%"}}
                onChange={(e) => setSkill(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="customized-10"
                  defaultValue={2}
                  max={5}
                  onChange={(e) => setRate(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{marginLeft: "10px", float: "right"}}
                onClick={handelCancel}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{float: "right"}}
                onClick={() => dispatch(AddPersonalSkillsAction(data))}
              >
                save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
