import React, {useState, useEffect} from "react";
import {Paper, Grid, IconButton, Container, Button} from "@material-ui/core";
import icon from "./../../img/icon.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {AddSkillAction} from "./../../store/action/skill";

import ic1 from "./../../img/ic1.png";
import ic2 from "./../../img/ic2.png";
import ic3 from "./../../img/ic3.png";
import ic4 from "./../../img/ic4.png";
import ic5 from "./../../img/ic5.png";
import ic6 from "./../../img/ic6.png";
import ic7 from "./../../img/ic7.png";
import ic8 from "./../../img/ic8.png";
import ic9 from "./../../img/ic9.png";

export default function Skills() {
  let skills = useSelector((state) => state.template.skills);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const cvID = useSelector((state) => state.cvID);

  const [OfficePrograms, setOfficePrograms] = useState(false);
  const [TimeManagment, setTimeManagment] = useState(false);
  const [Workunderpressure, setWorkunderpressure] = useState(false);
  const [Problemsolving, setProblemsolving1] = useState(false);
  const [SelfDevelopment, setSelfDevelopment] = useState(false);
  const [TeamWork, setTeamWork] = useState(false);
  const [LeadershipandOrganisation, setLeadershipandOrganisation] = useState(
    false
  );
  const [ComputerProficiency, setComputerProficiency] = useState(false);
  useEffect(() => {
    skills.map((e) => setname(e));
  }, []);
  const addSkill = (t) => {
    var b = true;
    skills.map((e) => (e == t ? (b = false) : ""));
    setname(t);
    if (b == true) {
      skills.push(t);
      console.log(skills);
    } else {
      var j = 0;
      skills.map((e, i) => (e == t ? (j = i) : ""));
      skills.splice(j, 1);
      console.log("lm;", skills);
    }
  };
  const setname = (t) => {
    if (t == "Computer Proficiency")
      setComputerProficiency(!ComputerProficiency);
    if (t == "Leadership and Organisation")
      setLeadershipandOrganisation(!LeadershipandOrganisation);
    if (t == "TeamWork") setTeamWork(!TeamWork);
    if (t == "Self Development") setSelfDevelopment(!SelfDevelopment);
    if (t == "Problem solving") setProblemsolving1(!Problemsolving);
    if (t == "Work under pressure") setWorkunderpressure(!Workunderpressure);
    if (t == "Time Managment") setTimeManagment(!TimeManagment);
    if (t == "Office Programs") setOfficePrograms(!OfficePrograms);
  };
  return (
    <Paper>
      <Container>
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
            <h2>{t("YourSkills")}</h2>
          </Grid>

          <Grid
            item
            xs={6}
            sm={3}
            className={OfficePrograms == true ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Office Programs")}
            >
              <img src={ic6} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Office Programs")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={TimeManagment == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Time Managment")}
            >
              <img src={ic1} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Time Managment")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={Workunderpressure == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Work under pressure")}
            >
              <img src={icon} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Work under pressure")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={Problemsolving == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Problem solving")}
            >
              <img src={ic7} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Problem solving")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={SelfDevelopment == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Self Development")}
            >
              <img src={ic4} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Self Development")}</h6>
          </Grid>
          <Grid item xs={6} sm={3} className={TeamWork == 1 ? "bg-light" : ""}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("TeamWork")}
            >
              <img src={ic2} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Team Work")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={LeadershipandOrganisation == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Leadership and Organisation")}
            >
              <img src={ic3} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Leadership and Organisation")}</h6>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            className={ComputerProficiency == 1 ? "bg-light" : ""}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => addSkill("Computer Proficiency")}
            >
              <img src={ic8} className="imgskill" style={{width: "80px"}} />{" "}
            </IconButton>
            <h6>{t("Computer Proficiency")}</h6>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              className="save"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(AddSkillAction({skills, cvID}))}
            >
              {t("AddSkill")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
