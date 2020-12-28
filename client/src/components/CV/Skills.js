import React, {useState} from "react";
import {Paper, Grid, IconButton, Container, Button} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import AddSkill from "./AddSkill";
import DeleteIcon from "@material-ui/icons/Delete";
import {useSelector, useDispatch} from "react-redux";

export default function Skills() {
  const [ComponentName, setComponentName] = useState("");
  const skills = useSelector((state) => state.template.skills);

  return ComponentName == "AddSkill" ? (
    <AddSkill setComponentName={setComponentName} />
  ) : (
    <Container>
      <Paper>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{
            textAlign: "center",
          }}
          spacing={3}
        >
          <Grid item xs={12} style={{marginBottom: "10px"}}>
            <h2>Your Skills</h2>
          </Grid>
          {skills.map((skill, i) => (
            <Grid item xs={3} key={i}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <img src={skill.icon} />{" "}
              </IconButton>
              <h6>{skill.name}</h6>
            </Grid>
          ))}

          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              style={{backgroundColor: "#5B2338"}}
              startIcon={<DeleteIcon />}
              onClick={(e) => setComponentName("AddSkill")}
            >
              Add Skill
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
