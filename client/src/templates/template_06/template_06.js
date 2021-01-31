import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_06.css";

//#region Import Images
import img_01 from "../../assets/imgs/template_06/01.png";
import img_02 from "../../assets/imgs/template_06/02.png";
import img_03 from "../../assets/imgs/template_06/03.png";
import img_04 from "../../assets/imgs/template_06/04.png";
import img_05 from "../../assets/imgs/template_06/05.png";
import img_06 from "../../assets/imgs/template_06/06.png";
import img_07 from "../../assets/imgs/template_06/07.png";
import img_08 from "../../assets/imgs/template_06/08.png";
import img_09 from "../../assets/imgs/template_06/09.png";
import img_10 from "../../assets/imgs/template_06/10.png";
import img_11 from "../../assets/imgs/template_06/11.png";
import img_12 from "../../assets/imgs/template_06/12.png";
import img_13 from "../../assets/imgs/template_06/13.png";
import img_14 from "../../assets/imgs/template_06/14.png";
import img_15 from "../../assets/imgs/template_06/15.png";
import img_16 from "../../assets/imgs/template_06/16.png";
import img_17 from "../../assets/imgs/template_06/17.png";
import img_18 from "../../assets/imgs/template_06/18.png";
import img_19 from "../../assets/imgs/template_06/19.png";
import img_20 from "../../assets/imgs/template_06/20.png";
import img_21 from "../../assets/imgs/template_06/21.png";
import img_22 from "../../assets/imgs/template_06/22.png";
import img_23 from "../../assets/imgs/template_06/23.png";
import img_24 from "../../assets/imgs/template_06/24.png";
import img_25 from "../../assets/imgs/template_06/25.png";
import img_26 from "../../assets/imgs/template_06/26.png";
import img_27 from "../../assets/imgs/template_06/27.png";
import img_28 from "../../assets/imgs/template_06/28.png";
import img_29 from "../../assets/imgs/template_06/29.png";
import img_30 from "../../assets/imgs/template_06/30.png";
//#endregion

function print() {
  const filename = "template-6.pdf";

  html2canvas(document.getElementById("toPDF"), {
    dpi: 300, // Set to 300 DPI
    scale: 2, // Adjusts your resolution
  })
    .then((canvas) => {
      var img = canvas.toDataURL("image/PNG", 1);
      var doc = new jsPDF("p", "mm", "a4");
      doc.addImage(img, "PNG", -2, 0, 212, 298);
      doc.save(filename);
    })
    .catch((err) => console.log(err));
}

const ref = React.createRef();
const Template06 = (props) => {
  const {
    educations,
    certificates,
    experiences,
    languages,
    courses,
    careerobjective,
    personalInformation,
    othertraining,
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
        <div className="edu" key={edu.id_}>
          <div className="edu-title">
            <p className="bold">{edu.UniversityName}</p>
          </div>
          <div className="edu-content">
            <div className="edu-major">
              <p>
                {degree} in {edu.Field}
              </p>
            </div>
            <div className="edu-year">
              <p>Graduation Year: {edu.YearEnd}</p>
            </div>
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
          <div className="edu" key={edu.id_}>
            <div className="edu-title">
              <p className="bold">{edu.UniversityName}</p>
            </div>
            <div className="edu-content">
              <div className="edu-major">
                <p>
                  {degreeAr} {edu.Field}
                </p>
              </div>
              <div className="edu-year">
                <p>سنة التخرج: {edu.YearEnd}</p>
              </div>
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
          <div className="work-company">
            <div className={`arrow ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_10} alt="half-full-right-arrow" />
            </div>
            <div className="co-name">
              <p>{job.Name}</p>
            </div>
          </div>
          <div className="work-pos">
            <div className="pos-square">
              <div className="square"></div>
            </div>
            <div className="pos-name">
              <p>{job.Description}</p>
            </div>
          </div>
          <div className="work-date">
            <div className="empty-space"></div>
            <div className="date-content">
              <span className="from">{job.Start}</span> -{" "}
              <span className="to">{job.End}</span>
            </div>
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
          <div className="course-date">
            <p>{crs.Year}</p>
          </div>
          <div className="course-circle">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
          </div>
          <div className="course-name">
            <p>{crs.Name}</p>
          </div>
        </div>
      );
    });
  }

  let langs = null;
  if (languages.length > 0) {
    langs = languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<img src={img_29} alt="" key={Math.random()} />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_30} alt="" key={Math.random()} />);
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

  let others = null;
  if (othertraining.length > 0) {
    others = othertraining.map((train) => {
      return (
        <div
          className={`train ${props.language === "Ar" ? "ar" : ""}`}
          key={train.id_}
        >
          <div className="train-circle">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
          </div>
          <div className="train-name">
            <p>{train.Name}</p>
          </div>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_19,
    MS2: img_20,
    MS3: img_21,
    MS4: img_22,
    MS5: img_23,
    MS6: img_24,
    MS7: img_25,
    MS8: img_26,
    MS9: img_27,
    MS10: img_28,
  };
  let skls = null;
  if (skills.length > 0) {
    skls = skills.map((skill) => {
      let skillLogo = allSkills[skill.Name];
      return (
        <div className="skill" key={skill.id_}>
          <div className="skill-logo">
            <div className="skill-logo-bg">
              <img src={skillLogo} alt="" />
            </div>
          </div>
          <div className="skill-name">
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
  }

  let certs = null;
  if (certificates.length > 0) {
    certs = certificates.map((cert) => {
      return (
        <div className="cert" key={cert.id_}>
          <p className="cert-text">
            <span className="cert-title">{cert.Name}: </span>
            {cert.Description}
          </p>
          <p className="cert-year">{cert.Year}</p>
        </div>
      );
    });
  }

  //#region - Personal Info Section
  let personalInfoSection = (
    <div className={`info-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_01} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>
            {props.language === "Ar"
              ? "المعلومات الشخصية"
              : "Personal Information"}
          </p>
        </div>
      </div>
      <div className="sec-body">
        <div className="info">
          <div className="info-logo">
            <img src={img_03} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.Phone}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-logo">
            <img src={img_04} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.City}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-logo">
            <img src={img_05} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.Email}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-logo">
            <img src={img_06} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.MaritalStatus}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-logo">
            <img src={img_07} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.LinkedIn}</p>
          </div>
        </div>
        <div className="info">
          <div className="info-logo">
            <img src={img_08} alt="" />
          </div>
          <div className="info-text">
            <p>{PI.Birth}</p>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Objective Career Section
  let objectiveSection = (
    <div className={`objective-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_02} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>
            {props.language === "Ar" ? "الهدف الوظيفي" : "Career Objective"}
          </p>
        </div>
      </div>
      <div className="sec-body">
        <div className="objective-text">
          <p>{CO.Text}</p>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Work Section
  let workSection = (
    <div className={`work-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_09} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "الخبرات العملية" : "Experience"}</p>
        </div>
      </div>
      <div className="sec-body">
        <div className={`left bold ${props.language === "Ar" ? "ar" : ""}`}>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>{props.language === "Ar" ? "الآن" : "Present"}</p>
            <div className="dot"></div>
          </div>
          {}
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2020</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2019</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2018</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2017</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2016</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2015</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2014</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2013</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2012</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2011</p>
            <div className="dot"></div>
          </div>
          <div className={`year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>2010</p>
            <div className="dot"></div>
          </div>
        </div>
        <div className="right">{jobs}</div>
      </div>
    </div>
  );
  //#endregion
  //#region - Education Section
  let eduSection = (
    <div className={`edu-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_11} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "المؤهلات العلمية" : "Education"}</p>
        </div>
      </div>
      <div className="sec-body">
        {edus}
        <div
          className={`sec certification-sec ${
            props.language === "Ar" ? "ar" : ""
          }`}
        >
          <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}
            >
              <img src={img_12} alt="" />
            </div>
            <div
              className={`title-name ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>{props.language === "Ar" ? "الشهادات" : "Certificates"}</p>
            </div>
          </div>
          <div className="sec-body">{certs}</div>
        </div>
      </div>
    </div>
  );

  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className={`sec course-sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_13} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>
            {props.language === "Ar" ? "الدورات التدريبية" : "Training Courses"}
          </p>
        </div>
      </div>
      <div className="sec-body">{crses}</div>
    </div>
  );
  //#endregion
  //#region - Programs Section
  let programsSection = (
    <div className={`program-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_14} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "البرامج" : "Programs"}</p>
        </div>
      </div>
      <div className="sec-body">
        <div className="program">
          <div className="program-logo">
            <img src={img_15} alt="" />
          </div>
          <div className="program-name">
            <p>Microsoft Office Applications</p>
            <p>Highly expert in Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className={`sec skill-sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_16} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "المهارات" : "Skills"}</p>
        </div>
      </div>
      <div className="sec-body">{skls}</div>
    </div>
  );
  //#endregion
  //#region - Other Trainings Section
  let otherTrainingsSection = (
    <div className={`other-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
      <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_17} alt="" />
        </div>
        <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "تدريبات أخرى" : "Other Training"}</p>
        </div>
      </div>
      <div className="sec-body">{others}</div>
    </div>
  );
  //#endregion
  //#region - Languages Section
  let languageSection = (
    <div className="lang-wrapper">
      <div className={`lang-sec sec ${props.language === "Ar" ? "ar" : ""}`}>
        <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          <div className={`title-logo ${props.language === "Ar" ? "ar" : ""}`}>
            <img src={img_18} alt="" />
          </div>
          <div className={`title-name ${props.language === "Ar" ? "ar" : ""}`}>
            <p>{props.language === "Ar" ? "اللغات" : "Languages"}</p>
          </div>
        </div>
        <div className="sec-body">{langs}</div>
      </div>
    </div>
  );
  //#endregion

  //#region - Section 1
  let section_1 = (
    <div className="sec-wrapper sec-wrapper-1">
      {/* Info Section */}
      {personalInfoSection}
      {/* Career Objective Section */}
      {objectiveSection}
    </div>
  );
  //#endregion
  //#region - Section 2
  let section_2 = (
    <div className="sec-wrapper sec-wrapper-2">
      {/* Work Section */}
      {workSection}
      {/* Education Section */}
      {eduSection}
    </div>
  );
  //#endregion
  //#region - Section 3
  let section_3 = (
    <div
      className={`sec-wrapper sec-wrapper-3 ${
        props.language === "Ar" ? "ar" : ""
      }`}
    >
      {/* Courses Section */}
      {coursesSection}
      {/* Programs Section */}
      {programsSection}
    </div>
  );
  //#endregion
  //#region - Section 4
  let section_4 = (
    <div className="sec-wrapper sec-wrapper-4">
      {/* Skills Section */}
      {skillsSection}
    </div>
  );
  //#endregion
  //#region - Section 5
  let section_5 = (
    <div className="sec-wrapper sec-wrapper-5">
      {/* Other Training */}
      {otherTrainingsSection}
      {/* Languages */}
      {languageSection}
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    section_1,
    section_2,
    section_3,
    section_4,
    section_5,
  ]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    if (result.type === "Main") {
      // console.log(result);
      const items = Array.from(mainSectionList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setMainSectionList(items);
    }
  }

  return (
    <>
      <button onClick={print}>Export As pdf</button>
      <div className="template06-page">
        <div
          className={`template06-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
          {/* Name Section */}
          <div className="name-sec">
            <h1>
              {PI.FirstName} {PI.LastName}
            </h1>
          </div>

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div>
              <Droppable droppableId="droppable-main" type="Main">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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

export default Template06;
