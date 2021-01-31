import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_04.css";

//#region Import Images
import img_00 from "../../assets/imgs/template_04/00.png";
import img_01 from "../../assets/imgs/template_04/01.png";
import img_02 from "../../assets/imgs/template_04/02.png";
import img_03 from "../../assets/imgs/template_04/03.png";
import img_04 from "../../assets/imgs/template_04/04.png";
import img_05 from "../../assets/imgs/template_04/05.png";
import img_06 from "../../assets/imgs/template_04/06.png";
import img_07 from "../../assets/imgs/template_04/07.png";
import img_08 from "../../assets/imgs/template_04/08.png";
import img_09 from "../../assets/imgs/template_04/09.png";
import img_10 from "../../assets/imgs/template_04/10.png";
import img_11 from "../../assets/imgs/template_04/11.png";
import img_12 from "../../assets/imgs/template_04/12.png";
//#endregion

function print() {
  const pdf = document.getElementById("toPDF");
  const titles = [...pdf.querySelectorAll("p")];

  titles.forEach((p) => {
    p.classList.contains("title") &&
      (p.style.transform = "translate(-50%,-60%)");
  });

  const filename = "template-4.pdf";
  html2canvas(pdf, {
    dpi: 300, // Set to 300 DPI
    scale: 2, // Adjusts your resolution
  })
    .then((canvas) => {
      var img = canvas.toDataURL("image/jpeg", 1);
      var doc = new jsPDF("p", "mm", "a4");
      doc.addImage(img, "JPEG", -4, 0, 214, 298);
      doc.save(filename);
    })
    .catch((err) => console.log(err));

  titles.forEach((p) => {
    p.classList.contains("title") &&
      (p.style.transform = "translate(-50%,-50%)");
  });
}

const ref = React.createRef();
const Template04 = (props) => {
  const {
    educations,
    experiences,
    languages,
    courses,
    careerobjective,
    personalInformation,
    memberships,
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
      return (
        <div
          className={`edu ${props.language === "Ar" ? "ar" : ""}`}
          key={edu.id_}
        >
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="edu-title">
            {degree} {edu.Faculty}
          </p>
          <div className={`edu-content ${props.language === "Ar" ? "ar" : ""}`}>
            <div className="edu-circle">
              <div className="circle-dark"></div>
            </div>
            <p>{edu.UniversityName}</p>
          </div>
          <div className={`edu-content ${props.language === "Ar" ? "ar" : ""}`}>
            <div className="edu-circle">
              <div className="circle-dark"></div>
            </div>
            <p>GPA: {edu.DegreeFrom5}</p>
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
        return (
          <div
            className={`edu ${props.language === "Ar" ? "ar" : ""}`}
            key={edu.id_}
          >
            <div
              className={`circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <p className="edu-title">
              {degreeAr} in {edu.Faculty}
            </p>
            <div
              className={`edu-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <div className="edu-circle">
                <div className="circle-dark"></div>
              </div>
              <p>{edu.UniversityName}</p>
            </div>
            <div
              className={`edu-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <div className="edu-circle">
                <div className="circle-dark"></div>
              </div>
              <p>المعدل التراكمي: {edu.DegreeFrom5}</p>
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
        <div
          className={`work ${props.language === "Ar" ? "ar" : ""}`}
          key={job.id_}
        >
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>
            {job.Name} - {job.Description} {job.Start}-{job.End}
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
        <div
          className={`course ${props.language === "Ar" ? "ar" : ""}`}
          key={crs.id_}
        >
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>{crs.Name}</p>
        </div>
      );
    });
  }

  let langs = null;
  if (languages.length > 0) {
    langs = languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<div className="lang-circle" key={Math.random()}></div>);
      }
      for (let i = 0; i < 6 - lang.Rate; i++) {
        rate.push(
          <div className="lang-circle empty" key={Math.random()}></div>
        );
      }

      return (
        <div className="lang" key={lang.id_}>
          <div className="lang-name">
            <p>{lang.Name}</p>
          </div>
          <div className="lang-rate">{rate}</div>
        </div>
      );
    });
  }

  let mems = null;
  if (memberships.length > 0) {
    mems = memberships.map((member) => {
      return (
        <div
          className={`part ${props.language === "Ar" ? "ar" : ""}`}
          key={member.id_}
        >
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>{member.Name}</p>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_04,
    MS2: img_05,
    MS3: img_06,
    MS4: img_07,
    MS5: img_08,
    MS6: img_09,
    MS7: img_10,
    MS8: img_11,
    MS9: img_12,
  };
  let skls = null;
  if (skills.length > 0) {
    skls = skills.map((skill, id) => {
      let skillLogo = allSkills[skill.Name];

      return (
        <div className="skill" key={skill.id_}>
          <div className="skill-logo">
            <img className={`skill-logo-${id + 1}`} src={skillLogo} alt="" />
          </div>
          <div className="skill-name">
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
  }

  // Left Section
  //#region - Career Objective Section
  let objectiveSection = (
    <div className="sec objective-sec">
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "الهدف الوظيفي" : "Objective Career"}</p>
      </div>
      <div className="sec-body">
        <p>{CO.Text}</p>
      </div>
    </div>
  );
  //#endregion
  //#region - Personal Info Section
  let commSection = (
    <div className="sec comm-sec">
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "التواصل" : "Communication"}</p>
      </div>
      <div className="sec-body">
        <div className="comm">
          <div className="comm-logo">
            <div className="comm-logo-bg">
              <img className="comm-logo-1" src={img_01} alt="" />
            </div>
          </div>
          <div className={`comm-name ${props.language === "Ar" ? "ar" : ""}`}>
            <p className="comm-name-1">{PI.Email}</p>
          </div>
        </div>
        <div className="comm">
          <div className="comm-logo">
            <div className="comm-logo-bg">
              <img className="comm-logo-2" src={img_02} alt="" />
            </div>
          </div>
          <div className={`comm-name ${props.language === "Ar" ? "ar" : ""}`}>
            <p className="comm-name-2">{PI.Phone}</p>
          </div>
        </div>
        <div className="comm">
          <div className="comm-logo">
            <div className="comm-logo-bg">
              <img className="comm-logo-3" src={img_03} alt="" />
            </div>
          </div>
          <div className={`comm-name ${props.language === "Ar" ? "ar" : ""}`}>
            <p className="comm-name-3">
              {PI.Nationality} - {PI.City}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Personal Skills Section
  let skillsSection = (
    <div className="sec skill-sec">
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "المهارات" : "Skills"}</p>
      </div>
      <div className="sec-body">{skls}</div>
    </div>
  );
  //#endregion
  //#region - Languages Section
  let languagesSection = (
    <div className="sec lang-sec">
      <div className={`sec-title bold ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "اللغة" : "Languages"}</p>
      </div>
      <div className="sec-body">{langs}</div>
    </div>
  );
  //#endregion

  // Right Section
  //#region - Education Section
  let eduSection = (
    <div className="main-sec edu-sec">
      <div className="main-sec-title">
        <div className={`title-back-bg ${props.language === "Ar" ? "ar" : ""}`}>
          <div className="title-front-bg"></div>
          <p className="title bold">
            {props.language === "Ar" ? "المؤهلات العلمية" : "Education"}
          </p>
        </div>
      </div>
      <div className="main-sec-body edu-body">{edus}</div>
    </div>
  );
  //#endregion
  //#region - Work Section
  let workSection = (
    <div className="main-sec work-sec">
      <div className="main-sec-title">
        <div className={`title-back-bg ${props.language === "Ar" ? "ar" : ""}`}>
          <div className="title-front-bg"></div>
          <p className="title bold">
            {props.language === "Ar" ? "الخبرات العملية" : "Work Experience"}
          </p>
        </div>
      </div>
      <div className="main-sec-body">{jobs}</div>
    </div>
  );
  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className="main-sec course-sec">
      <div className="main-sec-title">
        <div className={`title-back-bg ${props.language === "Ar" ? "ar" : ""}`}>
          <div className="title-front-bg"></div>
          <p className="title bold">
            {props.language === "Ar" ? "الدورات التدريبية" : "Training Courses"}
          </p>
        </div>
      </div>
      <div className="main-sec-body">{crses}</div>
    </div>
  );
  //#endregion
  //#region - Memberships Section
  let membershipsSection = (
    <div className="main-sec part-sec">
      <div className="main-sec-title">
        <div className="title-back-bg">
          <div className="title-front-bg"></div>
          <p className="title bold">
            {props.language === "Ar" ? "العضويات" : "Memberships"}
          </p>
        </div>
      </div>
      <div className="main-sec-body">{mems}</div>
    </div>
  );
  //#endregion

  const [leftSectionList, setLeftSectionList] = useState([
    objectiveSection,
    commSection,
    languagesSection,
    skillsSection,
  ]);
  const [rightSectionList, setRightSectionList] = useState([
    eduSection,
    workSection,
    coursesSection,
    membershipsSection,
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
      <div className="template04-page">
        <div
          className={`template04-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
          {/*  Corners  */}
          <div
            className={`top-right-back-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`top-right-front-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`top-left-back-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`top-left-front-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`bottom-right-back-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`bottom-right-front-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`bottom-left-back-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>
          <div
            className={`bottom-left-front-corner ${
              props.language === "Ar" ? "ar" : ""
            }`}
          ></div>

          {/* Personal Photo */}
          <div className={`photo ${props.language === "Ar" ? "ar" : ""}`}>
            <img src={img_00} alt="" />
          </div>

          {/* Name Section */}
          <div className={`name-sec ${props.language === "Ar" ? "ar" : ""}`}>
            <h1>
              {PI.FirstName} {PI.LastName}
            </h1>
            {/* <h2>Computer Science</h2> */}
          </div>

          {/* Main */}
          <div className="main">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              {/* Left */}
              <div className={`left ${props.language === "Ar" ? "ar" : ""}`}>
                <Droppable droppableId="droppable-left" type="Left">
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

              {/* Right */}
              <div className="right">
                <Droppable droppableId="droppable-right" type="Right">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
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
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template04;
