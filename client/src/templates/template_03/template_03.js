import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_03.css";

//#region Import Images
import photo from "../../assets/imgs/template_03/00.png";
import img_01 from "../../assets/imgs/template_03/01.png";
import img_02 from "../../assets/imgs/template_03/02.png";
import img_03 from "../../assets/imgs/template_03/03.png";
import img_04 from "../../assets/imgs/template_03/04.png";
import img_05 from "../../assets/imgs/template_03/05.png";
import img_06 from "../../assets/imgs/template_03/06.png";
import img_07 from "../../assets/imgs/template_03/07.png";
import img_08 from "../../assets/imgs/template_03/08.png";
import img_09 from "../../assets/imgs/template_03/09.png";
//#endregion

function print() {
  const pdf = document.getElementById("toPDF");
  const text = [...pdf.querySelectorAll("p")];
  const titles = [...pdf.querySelectorAll("h2")];

  text.map(
    (p) =>
      !p.classList.contains("lang-rate") &&
      !p.classList.contains("lang-name") &&
      (p.style.transform = "translateY(-20%)")
  );
  text.map(
    (p) =>
      (p.classList.contains("lang-rate") ||
        p.classList.contains("lang-name")) &&
      (p.style.transform = "translate(-50%,-10%)")
  );
  text.map(
    (p) =>
      p.classList.contains("detail-text") &&
      (p.style.transform = "translateY(-20%)")
  );
  text.map(
    (p) =>
      p.classList.contains("info-desc-title") &&
      (p.style.transform = "translateY(-50%)")
  );
  text.map(
    (p) =>
      p.classList.contains("info-desc-text") &&
      (p.style.transform = "translateY(-15%)")
  );

  titles.map((h2) => (h2.style.transform = "translateY(-30%)"));

  const filename = "template-3.pdf";
  html2canvas(pdf, {
    dpi: 300, // Set to 300 DPI
    scale: 2, // Adjusts your resolution
  })
    .then((canvas) => {
      var img = canvas.toDataURL("image/jpeg", 1);
      var doc = new jsPDF("p", "mm", "a4");
      doc.addImage(img, "JPEG", -4, 0, 215, 298);
      doc.save(filename);
    })
    .catch((err) => console.log(err));

  text.map(
    (p) =>
      !p.classList.contains("info-desc-text") &&
      !p.classList.contains("lang-rate") &&
      !p.classList.contains("lang-name") &&
      (p.style.transform = "translateY(0%)")
  );
  text.map(
    (p) =>
      (p.classList.contains("lang-rate") ||
        p.classList.contains("lang-name")) &&
      (p.style.transform = "translate(-50%,0%)")
  );
  text.map(
    (p) =>
      p.classList.contains("info-desc-text") &&
      (p.style.transform = "translateY(10%)")
  );
  titles.map((h2) => (h2.style.transform = "translateY(0%)"));
}

const ref = React.createRef();
const Template03 = (props) => {
  const {
    educations,
    experiences,
    languages,
    courses,
    careerobjective,
    personalInformation,
    skills,
    technicalskills,
  } = props.Data;

  let edus = null;
  if (educations.length > 0) {
    edus = educations.map((edu) => {
      let degree = "";
      if (edu.Degree === 1) {
        degree = "Bachelor";
      } else if (edu.Degree === 2) {
        degree = "Master";
      } else if (edu.Degree === 3) {
        degree = "PhD";
      } else if (edu.Degree === 4) {
        degree = "High School Certificate";
      }
      let grade = "";
      if (edu.Grade === 1) {
        grade = "Good";
      } else if (edu.Grade === 2) {
        grade = "Very Good";
      } else if (edu.Grade === 3) {
        grade = "Excellent";
      }
      return (
        <div className="edu" key={edu.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="edu-title">{degree}</p>
          <div className="edu-text">
            <p>{edu.Field}</p>
            <p>{edu.UniversityName}</p>
            <p>
              {`Grade: ${edu.DegreeFrom100}% with ${
                grade === "Excellent" ? "an" : "a"
              } ${grade} grade`}
            </p>
            <p>Graduation Date: {edu.YearEnd}</p>
          </div>
        </div>
      );
    });
    if (props.language === "Ar") {
      edus = educations.map((edu) => {
        let degreeAr = "";
        if (edu.Degree === 1) {
          degreeAr = "بكالوريوس";
        } else if (edu.Degree === 2) {
          degreeAr = "ماجستير";
        } else if (edu.Degree === 3) {
          degreeAr = "دكتوراه";
        } else if (edu.Degree === 4) {
          degreeAr = "شهادة الثانوية العامة";
        }
        let gradeAr = "";
        if (edu.Grade === 1) {
          gradeAr = "جيد";
        } else if (edu.Grade === 2) {
          gradeAr = "جيد جداً";
        } else if (edu.Grade === 3) {
          gradeAr = "ممتاز";
        }
        return (
          <div className="edu" key={edu.id_}>
            <div
              className={`circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <p className="edu-title">{degreeAr}</p>
            <div className="edu-text">
              <p>{edu.Faculty}</p>
              <p>{edu.UniversityName}</p>
              <p>
                بمعدل: {edu.DegreeFrom100}% بتقدير {gradeAr}
              </p>
              <p>تاريخ التخرج: {edu.YearEnd}</p>
            </div>
          </div>
        );
      });
    }
  }

  let jobs = null;
  if (experiences.length > 0) {
    jobs = experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="work-title">{job.Name}</p>
          <div className="work-text">
            <p>{job.Description}</p>
            {props.language === "Ar" ? (
              <p>
                {`لمدة ${job.End - job.Start} 
              ${job.End - job.Start > 1 ? "سنوات" : "سنة"}`}
              </p>
            ) : (
              <p>
                {`for ${job.End - job.Start} 
              ${job.End - job.Start === 1 ? "year" : "years"}`}
              </p>
            )}
          </div>
        </div>
      );
    });
  }

  let CO = null;
  if (careerobjective) {
    CO = careerobjective;
  }

  let PI = null;
  if (personalInformation) {
    PI = personalInformation;
  }

  let crses = null;
  if (courses.length > 0) {
    crses = courses.map((crs) => {
      return (
        <div
          className={`course ${props.language === "Ar" ? "ar" : ""}`}
          key={crs.id_}
        >
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="course-text">
            <p>{crs.Name}</p>
          </div>
        </div>
      );
    });
  }

  let tSkills = null;
  if (technicalskills.length > 0) {
    tSkills = technicalskills.map((tskill, id) => {
      return (
        <div className="t-skill" key={tskill.id_}>
          <div className="t-skill-name">
            <p>{tskill.Name}</p>
          </div>
          <div className="t-skill-value">
            <p>{tskill.Rate}%</p>
          </div>
          <div className="t-skill-bar">
            <div className="bar-container">
              <div
                className={`bar bar-${id + 1}`}
                style={{ width: `${tskill.Rate}%` }}
              ></div>
            </div>
          </div>
        </div>
      );
    });
  }

  let langs = null;
  if (languages.length > 0) {
    langs = languages.map((lang, id) => {
      return (
        <div className="lang" key={lang.id_}>
          <p className={`lang-rate ${props.language === "Ar" ? "ar" : ""}`}>
            {lang.RateFrom100}%
          </p>
          <p className={`lang-name ${props.language === "Ar" ? "ar" : ""}`}>
            {lang.Name}
          </p>
          <div
            className={`lang-circle-wrapper ${
              props.language === "Ar" ? "ar" : ""
            }`}
          >
            <div
              className={`full-lang-${id + 1}`}
              style={{ width: `${lang.RateFrom100}%` }}
            ></div>
          </div>
        </div>
      );
    });
  }

  let skls = null;
  if (skills.length > 0) {
    skls = skills.map((skill) => {
      return (
        <div
          className={`p-skill ${props.language === "Ar" ? "ar" : ""}`}
          key={skill.id_}
        >
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="p-skill-text">
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
  }

  // Left Section
  //#region - Education Section
  let eduSection = (
    <div className="sec edu-sec">
      <img src={img_05} alt="" />
      <div className={`sec-content ${props.language === "Ar" ? "ar" : ""}`}>
        <h2 className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          {props.language === "Ar" ? "التعليم" : "Education"}
        </h2>
        {edus}
      </div>
    </div>
  );
  //#endregion
  //#region - Work Section
  let workSection = (
    <div className="sec work-sec">
      <img src={img_06} alt="" />
      <div className={`sec-content ${props.language === "Ar" ? "ar" : ""}`}>
        <h2 className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          {props.language === "Ar" ? "الخبرات" : "Work Experience"}
        </h2>
        {jobs}
      </div>
    </div>
  );
  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className="sec courses-sec">
      <img
        className={`${props.language === "Ar" ? "ar" : ""}`}
        src={img_07}
        alt=""
      />
      <div className={`sec-content ${props.language === "Ar" ? "ar" : ""}`}>
        <h2 className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          {props.language === "Ar" ? "الدورات التدريبية" : "Training Courses"}
        </h2>
        {crses}
      </div>
    </div>
  );
  //#endregion

  // Right Section
  //#region - Personal Skills Section
  let personalSkillsSection = (
    <div className="sec personal-skills-sec">
      <img src={img_08} alt="" />
      <div className={`sec-content ${props.language === "Ar" ? "ar" : ""}`}>
        <h2 className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          {props.language === "Ar" ? "المهارات الشخصية" : "Personal Skills"}
        </h2>
        {skls}
      </div>
    </div>
  );
  //#endregion
  //#region - Technical Skills Section
  let technicalSkillsSection = (
    <div className="sec tech-skills-sec">
      <img src={img_09} alt="" />
      <div className={`sec-content ${props.language === "Ar" ? "ar" : ""}`}>
        <h2 className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          {props.language === "Ar" ? "المهارات التقنية" : "Technical Skills"}
        </h2>
        {tSkills}
      </div>
    </div>
  );
  //#endregion
  //#region - Languages Section
  let languagesSection = (
    <div className="languages-sec sec">
      <div className="languages-title">
        <h3>{props.language === "Ar" ? "اللغات" : "Languages"}</h3>
      </div>
      <div className="langs">{langs}</div>
    </div>
  );
  //#endregion

  const [leftSectionList, setLeftSectionList] = useState([
    eduSection,
    workSection,
    coursesSection,
  ]);
  const [rightSectionList, setRightSectionList] = useState([
    personalSkillsSection,
    technicalSkillsSection,
    languagesSection,
  ]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    // console.log(result);

    if (result.type === "Right") {
      const items = Array.from(rightSectionList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setRightSectionList(items);
    } else if (result.type === "Left") {
      const items = Array.from(leftSectionList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setLeftSectionList(items);
    }
  }

  return (
    <>
      <button onClick={print}>Export As pdf</button>
      <div className="template03-page">
        <div
          className={`template03-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
          <div className={`cv-tag ${props.language === "Ar" ? "ar" : ""}`}>
            <p className="bold">
              {props.language === "Ar" ? "السيرة الذاتية" : "CV"}
            </p>
          </div>

          {/* Photo Section */}
          <div className={`photo ${props.language === "Ar" ? "ar" : ""}`}>
            <img src={photo} alt="" />
          </div>

          {/* Name Section */}
          <div className="name-sec">
            <h1>
              {PI.FirstName} {PI.LastName}
            </h1>
          </div>

          {/* Info Section */}
          <div className="info-sec">
            <div className="info-details">
              <div className="detail">
                <img
                  className={`detail-img-1 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_01}
                  alt=""
                />
                <div className="detail-p-1">
                  <p className="detail-text">{PI.Phone} </p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-2 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_02}
                  alt=""
                />
                <div className="detail-p-2">
                  <p className="detail-text">{PI.Email}</p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-3 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_03}
                  alt=""
                />
                <div className="detail-p-3">
                  <p className="detail-text">
                    {PI.Nationality} / {PI.City}
                  </p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-4 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_04}
                  alt=""
                />
                <div className="detail-p-4">
                  <p className="detail-text">{PI.Birth}</p>
                </div>
              </div>
            </div>
            <div className="info-desc">
              <p className="info-desc-title">
                {props.language === "Ar" ? "الهدف الوظيفي" : "Career Objective"}
              </p>
              <p className="info-desc-text">{CO.Text}</p>
            </div>
          </div>

          {/* Main Section */}
          <div className="main-sec">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              {/* Left */}
              {/* <div className="left"></div> */}
              <Droppable droppableId="droppable-left" type="Left">
                {(provided) => (
                  <div
                    className="left"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {leftSectionList.map((sec, index) => {
                      return (
                        <Draggable
                          key={index}
                          draggableId={`draggable-left-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {sec}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {/* Right */}
              {/* <div className="right"> */}
              <Droppable droppableId="droppable-right" type="Right">
                {(provided) => (
                  <div
                    className="right"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {rightSectionList.map((sec, index) => {
                      return (
                        <Draggable
                          key={index}
                          draggableId={`draggable-right-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {sec}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {/* </div> */}
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template03;
