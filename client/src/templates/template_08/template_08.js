import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_08.css";

//#region Import Images
import img_01 from "../../assets/imgs/template_08/01.png";
import img_02 from "../../assets/imgs/template_08/02.png";
import img_03 from "../../assets/imgs/template_08/03.png";
import img_04 from "../../assets/imgs/template_08/04.png";
import img_05 from "../../assets/imgs/template_08/05.png";
import img_07 from "../../assets/imgs/template_08/07.png";
import img_08 from "../../assets/imgs/template_08/08.png";
import img_09 from "../../assets/imgs/template_08/09.png";
import img_10 from "../../assets/imgs/template_08/10.png";
import img_11 from "../../assets/imgs/template_08/11.png";
import img_12 from "../../assets/imgs/template_08/12.png";
import img_13 from "../../assets/imgs/template_08/13.png";
import img_14 from "../../assets/imgs/template_08/14.png";
import img_15 from "../../assets/imgs/template_08/15.png";
import img_16 from "../../assets/imgs/template_08/16.png";
import img_17 from "../../assets/imgs/template_08/17.png";
import img_18 from "../../assets/imgs/template_08/18.png";
import img_19 from "../../assets/imgs/template_08/19.png";
//#endregion

function print() {
  const filename = "template-8.pdf";

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
const Template08 = (props) => {
  const {
    Educations,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Skill,
  } = props.Data;

  let careerObjectives = null;
  if (CareerObjectives) {
    careerObjectives = CareerObjectives.Text;
  }

  let PI = null;
  if (PersonalInformation) {
    PI = PersonalInformation;
  }

  let educations = null;
  let arEducations = null;
  if (Educations.length > 0) {
    educations = Educations.map((edu) => {
      return (
        <div className="edu sec-content" key={edu.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <p className="edu-title">{edu.Degree}</p>
            <div className="edu-text">
              <p>Major: {edu.Field}</p>
              <p>{`${edu.Faculty} - ${edu.YearEnd}`}</p>
              <p>
                GPA: {edu.DegreeFrom5} out of 5 with{" "}
                {edu.Grade === "Excellent" ? "an" : "a"} {edu.Grade} Grade
              </p>
            </div>
          </div>
        </div>
      );
    });
    arEducations = Educations.map((edu) => {
      return (
        <div className="edu sec-content" key={edu.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <p className="edu-title">{edu.Degree}</p>
            <div className="edu-text">
              <p>التخصص: {edu.Field}</p>
              <p>
                {edu.Faculty} - {edu.YearEnd}
              </p>
              <p>
                المعدل: {edu.DegreeFrom5} من 5 وبتقدير {edu.Grade}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  let jobs = null;
  let arJobs = null;
  if (Experiences.length > 0) {
    jobs = Experiences.map((job) => {
      return (
        <div className="work sec-content" key={job.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <div className="work-text">
              <p>
                {job.Description} as {job.Name} from {job.Start} - {job.End}
              </p>
            </div>
          </div>
        </div>
      );
    });
    arJobs = Experiences.map((job) => {
      return (
        <div className="work sec-content" key={job.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <div className="work-text">
              <p>
                {job.Description} بوظيفة {job.Name} من {job.Start} - {job.End}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  let courses = null;
  let arCourses = null;
  if (Courses.length > 0) {
    courses = Courses.map((crs) => {
      return (
        <div className="course sec-content" key={crs.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <div className="course-text">
              <p>
                {crs.Name} at {crs.Description}
              </p>
              <p>From the period {crs.Year} - (EndDate)</p>
            </div>
          </div>
        </div>
      );
    });

    arCourses = Courses.map((crs) => {
      return (
        <div className="course sec-content" key={crs.id_}>
          <div className="content-circle">
            <div className="circle"></div>
          </div>
          <div className="content-text">
            <div className="course-text">
              <p>
                {crs.Name} في {crs.Description}
              </p>
              <p>من الفترة {crs.Year} - (تاريخ الانتهاء) م</p>
            </div>
          </div>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_13,
    MS2: img_14,
    MS3: img_15,
    MS4: img_16,
  };
  const arAllSkills = {
    MS1: "مهارة 1",
    MS2: "مهارة 2",
    MS3: "مهارة 3",
    MS4: "مهارة 4",
  };
  let skills = null;
  let arSkills = null;
  if (Skill.length > 0) {
    skills = Skill.map((skill) => {
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
    arSkills = Skill.map((skill) => {
      let skillLogo = allSkills[skill.Name];
      let arSkillName = arAllSkills[skill.Name];
      return (
        <div className="skill" key={skill.id_}>
          <div className="skill-logo">
            <div className="skill-logo-bg">
              <img src={skillLogo} alt="" />
            </div>
          </div>
          <div className="skill-name">
            <p>{arSkillName}</p>
          </div>
        </div>
      );
    });
  }

  let languages = null;
  if (Languages.length > 0) {
    languages = Languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<img src={img_17} alt="" key={Math.random()} />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_18} alt="" key={Math.random()} />);
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

  //#region - Career Objective Section
  let objectiveSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec objective-sec">
        <div className="sec-logo">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-title">
          <p>Career Objective</p>
        </div>
        <div className="sec-body">
          <div className="sec-content">
            <div className="content-circle">
              <div className="circle"></div>
            </div>
            <div className="content-text">
              <p>{careerObjectives}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Arabic */}
      <div className="sec objective-sec ar">
        <div className="sec-logo ar">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-title ar">
          <p>الهدف الوظيفي</p>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">
            <div className="content-circle">
              <div className="circle"></div>
            </div>
            <div className="content-text">
              <p>{careerObjectives}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Education Section
  let educationSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec edu-sec">
        <div className="sec-logo">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-title">
          <p>Education</p>
        </div>
        <div className="sec-body">{educations}</div>
      </div>
      {/* Arabic */}
      <div className="sec edu-sec ar">
        <div className="sec-logo ar">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-title ar">
          <p>التعليم</p>
        </div>
        <div className="sec-body ar">{arEducations}</div>
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
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title">
          <p>Experience</p>
        </div>
        <div className="sec-body">{jobs}</div>
      </div>
      {/* Arabic */}
      <div className="sec work-sec ar">
        <div className="sec-logo ar">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title ar">
          <p>الخبرات</p>
        </div>
        <div className="sec-body ar">{arJobs}</div>
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
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title">
          <p>Courses</p>
        </div>
        <div className="sec-body">{courses}</div>
      </div>
      {/* Arabic */}
      <div className="sec course-sec ar">
        <div className="sec-logo ar">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title ar">
          <p>الدورات</p>
        </div>
        <div className="sec-body ar">{arCourses}</div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec skill-sec">
        <div className="sec-logo">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-title">
          <p>Skills</p>
        </div>
        <div className="sec-body">{skills}</div>
      </div>
      {/* Arabic */}
      <div className="sec skill-sec ar">
        <div className="sec-logo ar">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-title ar">
          <p>المهارات</p>
        </div>
        <div className="sec-body ar">{arSkills}</div>
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
          <img src={img_12} alt="" />
        </div>
        <div className="sec-title">
          <p>Languages</p>
        </div>
        <div className="sec-body">{languages}</div>
      </div>
      {/* Arabic */}
      <div className="sec lang-sec ar">
        <div className="sec-logo ar">
          <img src={img_12} alt="" />
        </div>
        <div className="sec-title ar">
          <p>اللغات</p>
        </div>
        <div className="sec-body ar">{languages}</div>
      </div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    objectiveSection,
    educationSection,
    workSection,
    coursesSection,
    skillsSection,
    languagesSection,
  ]);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
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
      <div className="template08-page">
        <div className="template08-body" ref={ref} id="toPDF">
          {/* Name Section */}
          <div className="name-sec">
            <h2>محمد أحمد سعد</h2>
            <h2>
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </h2>
          </div>

          {/* Header Section */}
          <div className="header-sec">
            <div className="details">
              <div className="detail detail-1 ar">{PI.City}</div>
              <div className="detail detail-2 ar">{PI.Nationality}</div>
              <div className="detail detail-3">
                <img src={img_05} alt="flag" />
              </div>
              <div className="detail detail-4">سعودي</div>
              <div className="detail detail-5">الرياض</div>
            </div>
            <div className="world">
              <img src={img_19} alt="" />
            </div>
          </div>

          {/* Info Section */}
          <div className="row-section">
            <div className="info-sec">
              <div className="info">
                <div className="info-logo info-logo-1">
                  <img src={img_01} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-2">
                  <img src={img_02} alt="" />
                </div>
                <div className="info-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
            </div>
            <div className="info-sec ar">
              <div className="info">
                <div className="info-logo info-logo-3">
                  <img src={img_03} alt="" />
                </div>
                <div className="info-text ar">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-logo info-logo-4">
                  <img src={img_04} alt="" />
                </div>
                <div className="info-text ar">
                  <p>أعزب - {PI.MaritalStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
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
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default Template08;