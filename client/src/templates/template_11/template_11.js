import React, { useState } from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_11.css";

//#region Import Images
import img_01 from "../../assets/imgs/template_11/01.png";
import img_02 from "../../assets/imgs/template_11/02.png";
import img_03 from "../../assets/imgs/template_11/03.png";
import img_04 from "../../assets/imgs/template_11/04.png";
import img_05 from "../../assets/imgs/template_11/05.png";
import img_06 from "../../assets/imgs/template_11/06.png";
import img_07 from "../../assets/imgs/template_11/07.png";
import img_08 from "../../assets/imgs/template_11/08.png";
import img_09 from "../../assets/imgs/template_11/09.png";
import img_10 from "../../assets/imgs/template_11/10.png";
import img_11 from "../../assets/imgs/template_11/11.png";
import img_12 from "../../assets/imgs/template_11/12.png";
import img_13 from "../../assets/imgs/template_11/13.png";
import img_14 from "../../assets/imgs/template_11/14.png";
import img_15 from "../../assets/imgs/template_11/15.png";
import img_16 from "../../assets/imgs/template_11/16.png";
import img_17 from "../../assets/imgs/template_11/17.png";
import img_18 from "../../assets/imgs/template_11/18.png";
import img_19 from "../../assets/imgs/template_11/19.png";
import img_20 from "../../assets/imgs/template_11/20.png";
import img_21 from "../../assets/imgs/template_11/21.png";
import img_22 from "../../assets/imgs/template_11/22.png";
import img_23 from "../../assets/imgs/template_11/23.png";
//#endregion

function print() {
  const filename = "template-11.pdf";

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
const Template11 = () => {
  const {
    educations,
    experiences,
    languages,
    courses,
    achievements,
    personalInformation,
    careerobjective,
    skills,
  } = useSelector((state) => state.template);

  let PI = null;
  if (personalInformation) {
    PI = personalInformation;
  }

  let CO = null;
  if (careerobjective) {
    CO = careerobjective;
  }

  let edus = null;
  let arEdus = null;
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
          <div className="edu-company">
            <div className="arrow">
              <img src={img_23} alt="half-full-right-arrow" />
            </div>
            <div className="co-name">
              <p className="bold">{degree}</p>
            </div>
          </div>
          <div className="edu-pos">
            <div className="pos-square">
              <div className="square"></div>
            </div>
            <div className="pos-name">
              <p>{edu.UniversityName}</p>
            </div>
          </div>
          <div className="edu-date">
            <div className="date-square">
              <div className="square"></div>
            </div>
            <div className="date-content">
              <p>{edu.YearEnd}</p>
            </div>
          </div>
        </div>
      );
    });
    arEdus = educations.map((edu) => {
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
          <div className="edu-company">
            <div className="arrow ar">
              <img src={img_23} alt="half-full-right-arrow" />
            </div>
            <div className="co-name">
              <p className="bold">{degreeAr}</p>
            </div>
          </div>
          <div className="edu-pos">
            <div className="pos-square">
              <div className="square"></div>
            </div>
            <div className="pos-name">
              <p>{edu.UniversityNameAr}</p>
            </div>
          </div>
          <div className="edu-date">
            <div className="date-square">
              <div className="square"></div>
            </div>
            <div className="date-content">
              <p>{edu.YearEnd}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  let jobs = null;
  let arJobs = null;
  if (experiences.length > 0) {
    jobs = experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div className="work-company">
            <div className="arrow">
              <img src={img_23} alt="half-full-right-arrow" />
            </div>
            <div className="co-name">
              <p className="bold">{job.Name}</p>
            </div>
          </div>
          <div className="work-pos">
            <div className="pos-square">
              <div className="square"></div>
            </div>
            <div className="pos-name">
              <p>{`Job: ${job.Description}`}</p>
            </div>
          </div>
          <div className="work-date">
            <div className="date-square">
              <div className="square"></div>
            </div>
            <div className="date-content">
              <p>{`From ${job.Start} to ${job.End}`}</p>
            </div>
          </div>
        </div>
      );
    });
    arJobs = experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div className="work-company">
            <div className="arrow ar">
              <img src={img_23} alt="half-full-right-arrow" />
            </div>
            <div className="co-name">
              <p className="bold">{job.NameAr}</p>
            </div>
          </div>
          <div className="work-pos">
            <div className="pos-square">
              <div className="square"></div>
            </div>
            <div className="pos-name">
              <p>{`بوظيفة ${job.DescriptionAr}`}</p>
            </div>
          </div>
          <div className="work-date">
            <div className="date-square">
              <div className="square"></div>
            </div>
            <div className="date-content">
              <p>{`من ${job.Start} - حتى ${job.End}`}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  let crses = null;
  let arCrses = null;
  if (courses.length > 0) {
    crses = courses.map((crs) => {
      return (
        <div className="course" key={crs.id_}>
          <div className="course-square">
            <div className="square"></div>
          </div>
          <div className="course-name">{crs.Name}</div>
        </div>
      );
    });

    arCrses = courses.map((crs) => {
      return (
        <div className="course ar" key={crs.id_}>
          <div className="course-square ar">
            <div className="square"></div>
          </div>
          <div className="course-name">{crs.NameAr}</div>
        </div>
      );
    });
  }

  let achievs = null;
  let arAchievs = null;
  if (achievements.length > 0) {
    achievs = achievements.map((achiev) => {
      return (
        <div className="achiev" key={achiev.id_}>
          <div className="achiev-square">
            <div className="square"></div>
          </div>
          <div className="achiev-name">{achiev.Name}</div>
        </div>
      );
    });

    arAchievs = achievements.map((achiev) => {
      return (
        <div className="achiev ar" key={achiev.id_}>
          <div className="achiev-square ar">
            <div className="square"></div>
          </div>
          <div className="achiev-name">{achiev.Name}</div>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_13,
    MS2: img_14,
    MS3: img_15,
    MS4: img_16,
    MS5: img_17,
    MS6: img_18,
    MS7: img_19,
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
            <p>{skill.NameAr}</p>
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
  }

  let langs = null;
  let arLangs = null;
  if (languages.length > 0) {
    langs = languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<img src={img_20} alt="" key={Math.random()} />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_21} alt="" key={Math.random()} />);
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
    arLangs = languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<img src={img_20} alt="" key={Math.random()} />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_21} alt="" key={Math.random()} />);
      }

      return (
        <div className="lang" key={lang.id_}>
          <div className="lang-name">
            <p>{lang.NameAr}</p>
          </div>
          <div className="lang-rate">{rate}</div>
        </div>
      );
    });
  }

  //#region - Education Section
  let eduSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec edu-sec">
        <div className="sec-logo">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Education</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">
          <div className="sec-content">{edus}</div>
        </div>
      </div>
      {/* Arabic */}
      <div className="sec edu-sec ar">
        <div className="sec-logo ar">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-title ar">
          <div className="title">
            <p>المؤهلات العلمية</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">{arEdus}</div>
        </div>
      </div>
    </div>
  );

  //#endregion
  //#region - Work Section
  let workSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec work-sec">
        <div className="sec-logo">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Experience</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">
          <div className="sec-content">{jobs}</div>
        </div>
      </div>

      {/* Arabic */}
      <div className="sec work-sec ar">
        <div className="sec-logo ar">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-title ar">
          <div className="title">
            <p>الخبرات</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">{arJobs}</div>
        </div>
      </div>
    </div>
  );

  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec course-sec">
        <div className="sec-logo">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Courses</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">
          <div className="sec-content">{crses}</div>
        </div>
      </div>
      {/* Arabic */}
      <div className="sec course-sec ar">
        <div className="sec-logo ar">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title ar">
          <div className="title">
            <p>الدورات</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">{arCrses}</div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Achievements Section
  let achievsSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec achiev-sec">
        <div className="sec-logo">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Achievements</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">
          <div className="sec-content">{achievs}</div>
        </div>
      </div>
      {/* Arabic */}
      <div className="sec achiev-sec ar">
        <div className="sec-logo ar">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title ar">
          <div className="title">
            <p>الإنجازات</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">{arAchievs}</div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Languages Section
  let languagesSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec lang-sec">
        <div className="sec-logo">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Languages</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">{langs}</div>
      </div>
      {/* Arabic */}
      <div className="sec lang-sec ar">
        <div className="sec-logo ar">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-title ar">
          <div className="title">
            <p>اللغات</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body ar">{arLangs}</div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className="row-section">
      <div className="sec skill-sec">
        <div className="sec-logo">
          <img src={img_12} alt="" />
        </div>
        <div className="sec-title">
          <div className="title">
            <p>Skills</p>
          </div>
          <div className="sec-arrow">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-body">{skls}</div>
      </div>
      <div className="sec skill-sec ar">
        <div className="sec-title ar">
          <div className="title">
            <p>المهارات</p>
          </div>
          <div className="sec-arrow ar">
            <img src={img_22} alt="arrow-down" />
          </div>
        </div>
        <div className="sec-logo ar">
          <img src={img_12} alt="" />
        </div>
      </div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    eduSection,
    workSection,
    coursesSection,
    achievsSection,
    languagesSection,
    skillsSection,
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
    }
  }

  return (
    <>
      <button onClick={print}>Export As pdf</button>
      <div className="template11-page">
        <div className="template11-body" ref={ref} id="toPDF">
          {/* Info Section */}
          <div className="row-section bold">
            <div className="info-sec">
              <div className="info">
                <div className="info-logo info-logo-1">
                  <img src={img_01} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-2">
                  <img src={img_02} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.MaritalStatus}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-3">
                  <img src={img_03} alt="" />
                </div>
                <div className="info-text">
                  <p>{`${PI.Nationality} - ${PI.City}`}</p>
                </div>
              </div>
            </div>
            <div className="info-sec ar">
              <div className="info">
                <div className="info-logo info-logo-1">
                  <img src={img_01} alt="" />
                </div>
                <div className="info-text ar">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-2">
                  <img
                    src={img_02}
                    alt=""
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
                <div className="info-text ar">
                  <p>{PI.MaritalStatusAr}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-3">
                  <img src={img_03} alt="" />
                </div>
                <div className="info-text ar">
                  <p>{`${PI.NationalityAr} - ${PI.City}`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div className="header-sec">
            <div className="name-sec">
              <h2>
                {PI.FirstNameAr} {PI.LastNameAr}
              </h2>
              <h2>
                {PI.FirstName} {PI.LastName}
              </h2>
            </div>
            <div className="contact-info">
              <div className="info bold">
                <div className="info-logo info-logo-4">
                  <img src={img_04} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
              <div className="info bold">
                <div className="info-logo info-logo-5">
                  <img src={img_05} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="row-section intro">
            <div className="sec intro-sec">
              <div className="intro-logo">
                <img src={img_06} alt="" />
                <p className="bold">Introduction</p>
              </div>
              <div className="vl"></div>
              <div className="intro-text">
                <p>{CO.Text}</p>
              </div>
            </div>
            <div className="vl-center"></div>
            <div className="sec intro-sec ar">
              <div className="intro-logo">
                <img src={img_06} alt="" style={{ transform: "scaleX(-1)" }} />
                <p className="bold">المقدمة</p>
              </div>
              <div className="vl"></div>
              <div className="intro-text">
                <p>{CO.TextAr}</p>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable-main" type="Main">
              {(provided) => (
                <div
                  className="main"
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
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default Template11;
