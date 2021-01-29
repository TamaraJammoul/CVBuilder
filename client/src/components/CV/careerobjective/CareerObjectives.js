import React, {useState} from "react";
import {Button, Paper, Grid, Container, ButtonGroup} from "@material-ui/core";
import {Editor} from "@tinymce/tinymce-react";
import {VisibilityOff, EditSharp, Visibility} from "@material-ui/icons";

import {
  EditCareerObjectiveAction,
  HideCareerObjectiveAction,
} from "./../../../store/action/careerobjective";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import ReactHtmlParser from "react-html-parser";
export default function CareerObjectives() {
  const [text, setText] = useState("");
  const [textAr, setTextAr] = useState("");
  const lan = useSelector((state) => state.sections.twolan);

  const [hide, setHide] = useState(0);

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setText(content);
  };
  const handleEditorChangeAr = (content, editor) => {
    console.log("Content was updated:", content);
    setTextAr(content);
  };
  const dispatch = useDispatch();
  const careerobjective = useSelector(
    (state) => state.template.careerobjective
  );
  const careerObjectives_id = useSelector(
    (state) => state.template.careerObjectives_id
  );
  const {t, i18n} = useTranslation();
  const cvID = useSelector((state) => state.cvID);

  return (
    <Paper
      elevation={3}
      className="buildcvbar background mt-3"
      style={{width: "100%"}}
    >
      <Container>
        <Grid container alignItems="center" direction="column" spacing={5}>
          <Grid item style={{width: "100%"}} xs={12}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              style={{textAlign: "center"}}
            >
              <Grid item sm={6} xs={12}>
                <h2>{t("CareerObjectives")}</h2>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <Button
                  color="secondary"
                  startIcon={hide == 0 ? <Visibility /> : <VisibilityOff />}
                  className="button"
                  onClick={() => {
                    setHide(!hide);
                    dispatch(HideCareerObjectiveAction({cvID, hide}));
                  }}
                >
                  {hide == 1 ? t("HideSection") : t("ShowSection")}
                </Button>{" "}
              </Grid>
            </Grid>{" "}
          </Grid>
          <Grid item xs={12}>
            <h5>{ReactHtmlParser(text)}</h5>
          </Grid>
          <Grid item xs={12} style={{width: "100%"}}>
            {" "}
            <Editor
              initialValue="<p></p>"
              init={{
                height: 200,
                directionality: i18n.language == "en" ? "ltr" : "rtl",
                plugins:
                  " autolink listsanchorfullscreen insertdatetime  paste  help ",
                toolbar:
                  "pageembed permanentpen  undo redo |bold italic | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                toolbar_mode: "floating",
                tinycomments_mode: "embedded",
              }}
              onEditorChange={handleEditorChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{width: "100%"}}
            className={lan == 0 ? "arhide" : ""}
          >
            {" "}
            <Editor
              initialValue="<p></p>"
              init={{
                height: 200,
                directionality: i18n.language == "en" ? "ltr" : "rtl",
                plugins:
                  " autolink listsanchorfullscreen insertdatetime  paste  help ",
                toolbar:
                  "pageembed permanentpen  undo redo |bold italic | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                toolbar_mode: "floating",
                tinycomments_mode: "embedded",
              }}
              onEditorChange={handleEditorChangeAr}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" direction="row" spacing={3}>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  className="save"
                  style={{float: "right"}}
                  onClick={() =>
                    dispatch(
                      EditCareerObjectiveAction({
                        text,
                        textAr,
                        careerObjectives_id,
                      })
                    )
                  }
                >
                  {t("save")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>{" "}
    </Paper>
  );
}
