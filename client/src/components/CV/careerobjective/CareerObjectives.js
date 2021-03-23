import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";

import {
  EditCareerObjectiveAction,
} from "./../../../store/action/careerobjective";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default function CareerObjectives() {
  const lan = useSelector((state) => state.sections.twolan);
  const [text, setText] = useState("");
  const [textAr, setTextAr] = useState("");
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);


  const dispatch = useDispatch();
  const careerobjective = useSelector(
    (state) => state.template.careerobjective
  );
  const careerObjectives_id = useSelector(
    (state) => state.template.careerObjectives_id
  );
  const { t } = useTranslation();
  let history = useHistory();
  useEffect(() => {

  }, [isFirstSelected, isSecondSelected])
  const chooseFirstCareer = () => {
    setIsFirstSelected(!isFirstSelected);
    setIsSecondSelected(false);
    setText("Getting a job opportunity through which I can gain experience, develop oneself, gain skills,benefit society, and help in the success and development of the field in which I work");
    setTextAr('الحصول على فرصة عمل استطيع من خلاله اكتساب الخبرة وتطوير الذات وإكتساب المهارات وإفادة المجتمع والمساعدة في نجاح وتطوير المجال الذي اعمل به');
  }
  const chooseSecondCareer = () => {
    setIsFirstSelected(false);
    setIsSecondSelected(!isSecondSelected);
    setText("Work in an innovative environment to add creativity in the organization that will achieve the desired goals using my professional skills acquired through practical experiences ");
    setTextAr('‏السعي لتطوير مهاراتي العملية و المساهمة في خدمة المجتمع و بذل أفضل النتائج للتقدم و الارتقاء بالمكان الذي أعمل به لأصل لأقصى درجات التميز و التطوير');
    console.log(isSecondSelected)
  }
  return (
    <Paper
      elevation={3}
      className="buildcvbar background mt-3"
      style={{ width: "100%" }}
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <Container>
        <Grid container alignItems="center" direction="column" spacing={5}>
          <Grid item style={{ width: "100%" }} xs={12}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <Grid item sm={6} xs={12}>
                <h2>{t("CareerObjectives")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
              </Grid>
            </Grid>{" "}
          </Grid>
          <Grid item row xs={12}>
            <Grid item xs={12} onClick={() => chooseFirstCareer()}>
              <Paper
                elevation={3}
                className={isFirstSelected === true ? 'selectedCareerObjective' : ''}
              >
                <h6 style={{ padding: '1rem' }}>{t('firstCareerObjective')}</h6>
              </Paper>
            </Grid>
            <Grid item xs={12} onClick={() => chooseSecondCareer()}>
              <Paper
                elevation={3}
                className={isSecondSelected === true ? "selectedCareerObjective" : ""}
              >
                <h6 style={{ padding: '1rem' }}>{t('secondCareerObjective')}</h6>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ width: "100%" }}>
            {" "}
            <TextField
              required
              label={t("Add CareerObjective")}
              variant="filled"
              color="primary"
              style={{ width: "100%" }}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ width: "100%" }}
            className={lan === 0 ? "arhide" : ""}
          >
            <TextField
              label={t("Add CareerObjective in Arabic")}
              variant="filled"
              color="primary"
              required
              style={{ width: "100%" }}
              onChange={(e) => setTextAr(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" direction="row" spacing={3}>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  className="save"
                  style={{ float: "right" }}
                  onClick={() => {
                    console.log(text, textAr)
                    dispatch(
                      EditCareerObjectiveAction({
                        text,
                        textAr,
                        careerObjectives_id,
                      })
                    )
                    history.push("/buildcv/education");
                  }}
                >
                  {t("next")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>{" "}
    </Paper >
  );
}
