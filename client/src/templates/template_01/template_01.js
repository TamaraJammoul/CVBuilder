import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_01.css";

//#region Import Images
import photo from "../../assets/imgs/template_01/Layer_13.png";
import img_01 from "../../assets/imgs/template_01/01.png";
import img_02 from "../../assets/imgs/template_01/02.png";
import img_03 from "../../assets/imgs/template_01/03.png";
import img_04 from "../../assets/imgs/template_01/04.png";
import img_05 from "../../assets/imgs/template_01/05.png";
import img_06 from "../../assets/imgs/template_01/06.png";
import img_07 from "../../assets/imgs/template_01/07.png";
import img_08 from "../../assets/imgs/template_01/08.png";
import img_09 from "../../assets/imgs/template_01/09.png";
import img_10 from "../../assets/imgs/template_01/10.png";
//#endregion

function print() {
  const filename = "template-1.pdf";
  const pdf = document.getElementById("toPDF");
  const name = [...pdf.querySelectorAll("h1")][0];
  const titles = [...pdf.querySelectorAll("h3")];
  const texts = [...pdf.querySelectorAll("p")];
  const spans = [...pdf.querySelectorAll("span")];

  name.style.transform = "translateY(-30%)";
  titles.map((t) => (t.style.transform = "translateY(-30%)"));
  texts.map((p) => (p.style.transform = "translateY(-50%)"));
  spans.map((sp) => (sp.style.transform = "translateY(-15%)"));

  html2canvas(pdf, {
    dpi: 300, // Set to 300 DPI
    scale: 2, // Adjusts your resolution
  })
    .then((canvas) => {
      var img = canvas.toDataURL("image/PNG", 1);
      var doc = new jsPDF("p", "mm", "a4");
      doc.addImage(img, "PNG", -4, 0, 212, 298);
      doc.save(filename);
    })
    .catch((err) => console.log(err));

  name.style.transform = "translateY(0%)";
  titles.map((t) => (t.style.transform = "translateY(0%)"));
  texts.map((p) => (p.style.transform = "translateY(0%)"));
  spans.map((sp) => (sp.style.transform = "translateY(0%)"));
}

const ref = React.createRef();

const Template01 = (props) => {
  const {
    educations,
    experiences,
    languages,
    courses,
    careerobjective,
    personalInformation,
    skills,
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
          <p>
            {degree} in {edu.Faculty}
          </p>
          <p>{edu.Universityname}</p>
          <p>University Grade: {grade}</p>
          <p>Graduate year: {edu.YearEnd}</p>
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
          <div
            className={`edu ${props.language === "Ar" ? "ar" : ""}`}
            key={edu.id_}
          >
            <p>
              {degreeAr} {edu.Faculty}
            </p>
            <p>{edu.Universityname}</p>
            <p>التقدير: {gradeAr}</p>
            <p>سنة التخرج: {edu.YearEnd}</p>
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
          <p>
            {job.Start} - {job.End}
          </p>
          <p>
            {job.Name} - {job.Description}
          </p>
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
        <div className="course" key={crs.id_}>
          <p>{crs.Name}</p>
        </div>
      );
    });
  }

  let langs = null;
  if (languages.length > 0) {
    langs = languages.map((lang, index) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<div className="circle" key={Math.random()}></div>);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<div className="circle empty" key={Math.random()}></div>);
      }
      return (
        <div className="lang" key={lang.id_}>
          <p className="lang-name">{lang.Name}</p>
          <div className="lang-rate">{rate}</div>
        </div>
      );
    });
  }

  let skls = null;
  if (skills.length > 0) {
    skls = skills.map((skill) => {
      return <p key={skill.id_}>{skill.Name}</p>;
    });
  }

  // Left Section
  //#region - Personal Info Section
  let personalInfoSection = (
    <div className="personal-info sec">
      <h3 className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        {props.language === "Ar" ? "المعلومات الشخصية" : "Personal Information"}
      </h3>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-1" src={img_01} alt="home_icon" />
          </div>
        </div>
        <span className="info-status">{PI.City}</span>
      </div>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-2" src={img_02} alt="phone_icon" />
          </div>
        </div>
        <span className="info-status bold">{PI.Phone}</span>
      </div>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-3" src={img_03} alt="envelope_icon" />
          </div>
        </div>
        <span className="info-status bold">{PI.Email}</span>
      </div>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-4" src={img_04} alt="date_icon" />
          </div>
        </div>
        <span className="info-status bold">{PI.Birth}</span>
      </div>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-5" src={img_05} alt="globe_icon" />
          </div>
        </div>
        <span className="info-status">{PI.Nationality}</span>
      </div>
      <div className="info-details">
        <div className="info-logo">
          <div className="info-icon-bg">
            <img className="info-icon-6" src={img_06} alt="couple_icon" />
          </div>
        </div>
        <span className="info-status">{PI.MaritalStatus}</span>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillSection = (
    <div className="skills sec">
      <h3 className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        {props.language === "Ar" ? "المهارات" : "Skills"}
      </h3>
      {skls}
    </div>
  );
  //#endregion
  //#region - Languages Section
  let languageSection = (
    <div className="languages sec">
      <h3 className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        {props.language === "Ar" ? "اللغات" : "Languages"}
      </h3>
      {langs}
    </div>
  );
  //#endregion

  // Main Section
  //#region - Objective Career Section
  let objectiveSection = (
    <div className={`main-sec ${props.language === "Ar" ? "ar" : ""} `}>
      <div className={`icon ${props.language === "Ar" ? "ar" : ""} `}>
        <img className="target" src={img_07} alt="hat_img" />
      </div>
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        <h3>
          {props.language === "Ar" ? "الهدف الوظيفي" : "Career Objective"}
        </h3>
      </div>
      <div className="sec-body">
        <p>{CO.Text}</p>
      </div>
    </div>
  );
  //#endregion
  //#region - Education Section
  let eduSection = (
    <div
      className={`education main-sec ${props.language === "Ar" ? "ar" : ""} `}
    >
      <div className={`icon ${props.language === "Ar" ? "ar" : ""} `}>
        <img className="hat" src={img_08} alt="hat_img" />
      </div>
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        <h3>{props.language === "Ar" ? "المؤهلات العلمية" : "Education"}</h3>
      </div>
      <div className="sec-body">{edus}</div>
    </div>
  );
  //#endregion
  //#region - Work Section
  let workSection = (
    <div className={`works main-sec ${props.language === "Ar" ? "ar" : ""} `}>
      <div className={`icon ${props.language === "Ar" ? "ar" : ""} `}>
        <img className="briefcase" src={img_09} alt="briefcase_img" />
      </div>
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        <h3>
          {props.language === "Ar" ? "الخبرات العملية" : "Work Experience"}
        </h3>
      </div>
      <div className="sec-body">{jobs}</div>
    </div>
  );
  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className={`courses main-sec ${props.language === "Ar" ? "ar" : ""} `}>
      <div className={`icon ${props.language === "Ar" ? "ar" : ""} `}>
        <img className="cert" src={img_10} alt="certificate_img" />
      </div>
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""} `}>
        <h3>
          {props.language === "Ar" ? "الدورات التدريبية" : "Training Courses"}
        </h3>
      </div>
      <div className="sec-body">{crses}</div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    objectiveSection,
    eduSection,
    workSection,
    coursesSection,
  ]);
  const [leftSectionList, setLeftSectionList] = useState([
    personalInfoSection,
    skillSection,
    languageSection,
  ]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    // console.log(result);

    if (result.type === "Main") {
      const items = Array.from(mainSectionList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setMainSectionList(items);
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
      <div className="template01-page">
        <div
          className={`template01-body ${props.language === "Ar" ? "ar" : ""} `}
          ref={ref}
          id="toPDF"
        >
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="left">
              <div className="photo">
                <img
                  className={`personal-info-icon ${
                    props.language === "Ar" ? "ar" : ""
                  } `}
                  src={photo}
                  alt="personal_photo"
                />
              </div>
              <Droppable droppableId="droppable-leftSection" type="Left">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
            </div>

            <div className="right">
              {/* Header */}
              <div className="header">
                <h1>
                  {PI.FirstName} {PI.LastName}
                </h1>
              </div>

              {/* Main Section */}
              <Droppable droppableId="droppable-main" type="Main">
                {(provided) => (
                  <div
                    className={`main ${props.language === "Ar" ? "ar" : ""} `}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {mainSectionList.map((sec, index) => {
                      return (
                        <Draggable
                          key={index}
                          draggableId={`draggable-main-${index}`}
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
            </div>
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default Template01;
