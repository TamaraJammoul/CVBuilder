import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_10.css";

//#region Import Images
import img_00 from "../../assets/imgs/template_10/00.png";
import img_01 from "../../assets/imgs/template_10/01.png";
import img_02 from "../../assets/imgs/template_10/02.png";
import img_03 from "../../assets/imgs/template_10/03.png";
import img_04 from "../../assets/imgs/template_10/04.png";
import img_05 from "../../assets/imgs/template_10/05.png";
import img_06 from "../../assets/imgs/template_10/06.png";
import img_07 from "../../assets/imgs/template_10/07.png";
import img_08 from "../../assets/imgs/template_10/08.png";
import img_09 from "../../assets/imgs/template_10/09.png";
import img_10 from "../../assets/imgs/template_10/10.png";
import img_11 from "../../assets/imgs/template_10/11.png";
import img_12 from "../../assets/imgs/template_10/12.png";
import img_13 from "../../assets/imgs/template_10/13.png";
import img_14 from "../../assets/imgs/template_10/14.png";
import img_15 from "../../assets/imgs/template_10/15.png";
import img_16 from "../../assets/imgs/template_10/16.png";
//#endregion

function print() {
  const filename = "template-10.pdf";

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
const Template10 = (props) => {
  const {
    educations,
    experiences,
    languages,
    courses,
    personalInformation,
    skills,
  } = props.Data;

  let PI = null;
  if (personalInformation) {
    PI = personalInformation;
  }

  let edus = null;
  let arEdus = null;
  if (educations.length > 0) {
    let degree = "";
    let degreeAr = "";
    edus = educations.map((edu) => {
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
          <div className="edu-box">
            <div className="edu-title">
              <p className="bold">{edu.UniversityName}</p>
            </div>
            <div className="edu-content">
              <p>
                <span className="content-name">Degree: </span>
                <span>{degree}</span>
              </p>
              <p>
                <span className="content-name">Specialization: </span>
                <span>{edu.Faculty}</span>
              </p>
              <p>
                <span className="content-name">GPA:</span>
                <span>{edu.DegreeFrom5} out of 5</span>
              </p>
            </div>
          </div>
          <div className="edu-date">
            <div className="circle"></div>
            <span className="start-date">{edu.YearStart}</span> -
            <span className="end-date">{edu.YearEnd}</span>
          </div>
        </div>
      );
    });
    arEdus = educations.map((edu) => {
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
        <div className="edu ar" key={edu.id_}>
          <div className="edu-box ar">
            <div className="edu-title ar">
              <p className="bold">{edu.UniversityNameAr}</p>
            </div>
            <div className="edu-content ar">
              <p>
                <span className="content-name">الدرجة: </span>
                <span>{degreeAr}</span>
              </p>
              <p>
                <span className="content-name">التخصص: </span>
                <span>{edu.FacultyAr}</span>
              </p>
              <p>
                <span className="content-name">المعدل: </span>
                <span>{`${edu.DegreeFrom5} من 5`}</span>
              </p>
            </div>
          </div>
          <div className="edu-date ar">
            <div className="circle ar"></div>
            <span className="start-date">{edu.YearStart}</span> -
            <span className="end-date">{edu.YearEnd}</span>
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
          <div className="work-box">
            <div className="work-title">
              <p className="bold">{job.Name}</p>
            </div>
            <div className="work-content">
              <p>
                <span className="job-name">Job: </span>
                <span className="job-value">{job.Description}</span>
              </p>
            </div>
          </div>
          <div className="work-date">
            <div className="circle"></div>
            <span className="start-date">{job.Start}</span> -
            <span className="end-date">{job.End}</span>
          </div>
        </div>
      );
    });
    arJobs = experiences.map((job) => {
      return (
        <div className="work ar" key={job.id_}>
          <div className="work-box ar">
            <div className="work-title ar">
              <p className="bold">{job.NameAr}</p>
            </div>
            <div className="work-content ar">
              <p>
                <span className="job-name">الوظيفة: </span>
                <span className="job-value">{job.DescriptionAr}</span>
              </p>
            </div>
          </div>
          <div className="work-date ar">
            <div className="circle ar"></div>
            <span className="start-date">{job.Start}</span> -
            <span className="end-date">{job.End}</span>
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
          <div className="course-circle">
            <div className="circle"></div>
          </div>
          <div className="course-name">
            <p>{crs.Name}</p>
          </div>
        </div>
      );
    });

    arCrses = courses.map((crs) => {
      return (
        <div className="course ar" key={crs.id_}>
          <div className="course-circle ar">
            <div className="circle"></div>
          </div>
          <div className="course-name">
            <p>{crs.NameAr}</p>
          </div>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_12,
    MS2: img_13,
    MS3: img_14,
    MS4: img_15,
    MS5: img_16,
  };
  let skls = null;
  let arSkls = null;
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
    arSkls = skills.map((skill) => {
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
      for (let i = 0; i < lang.RateFrom10; i++) {
        rate.push(<div className="lang-deg" key={Math.random()}></div>);
      }
      for (let i = 0; i < 10 - lang.RateFrom10; i++) {
        rate.push(<div className="lang-deg empty" key={Math.random()}></div>);
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
      for (let i = 0; i < lang.RateFrom10; i++) {
        rate.push(<div className="lang-deg" key={Math.random()}></div>);
      }
      for (let i = 0; i < 10 - lang.RateFrom10; i++) {
        rate.push(<div className="lang-deg empty" key={Math.random()}></div>);
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
          <p className="bold">Education</p>
        </div>
        <div className="sec-body">{edus}</div>
      </div>
      {/* Arabic */}
      <div className="sec edu-sec ar">
        <div className="sec-logo ar">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-title ar">
          <p className="bold">المؤهل التعليمي</p>
        </div>
        <div className="sec-body ar">{arEdus}</div>
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
          <p className="bold">Experience</p>
        </div>
        <div className="sec-body">{jobs}</div>
      </div>
      {/* Arabic */}
      <div className="sec work-sec ar">
        <div className="sec-logo ar">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-title ar">
          <p className="bold">الخبرات العملية</p>
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
      <div className="sec courses-sec">
        <div className="sec-logo">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title">
          <p className="bold">Courses</p>
        </div>
        <div className="sec-body">
          <div className="sec-content">{crses}</div>
        </div>
      </div>
      {/* Arabic */}
      <div className="sec courses-sec ar">
        <div className="sec-logo ar">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-title ar">
          <p className="bold">الدورات التدريبية</p>
        </div>
        <div className="sec-body ar">
          <div className="sec-content">{arCrses}</div>
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec skills-sec">
        <div className="sec-logo">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title">
          <p className="bold">Skills</p>
        </div>
        <div className="sec-body">{skls}</div>
      </div>
      {/* Arabic */}
      <div className="sec skills-sec ar">
        <div className="sec-logo ar">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-title ar">
          <p className="bold">المهارات</p>
        </div>
        <div className="sec-body ar">{arSkls}</div>
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
          <p className="bold">Languages</p>
        </div>
        <div className="sec-body">{langs}</div>
      </div>
      {/* Arabic */}
      <div className="sec lang-sec ar">
        <div className="sec-logo ar">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-title ar">
          <p className="bold">اللغات</p>
        </div>
        <div className="sec-body ar">{arLangs}</div>
      </div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    eduSection,
    workSection,
    coursesSection,
    skillsSection,
    languagesSection,
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
      <div className="template10-page">
        <div className="template10-body" ref={ref} id="toPDF">
          {/* Header Section */}
          <div className="header-sec">
            {/* Photo */}
            <div className="photo">
              <div className="photo-bg">
                <img src={img_00} alt="" />
              </div>
            </div>

            {/* Name */}
            <div className="name">
              <p>
                {PI.FirstNameAr} {PI.LastNameAr}
              </p>
              <p>
                {PI.FirstName} {PI.LastName}
              </p>
            </div>

            {/* Details */}
            <div className="details">
              <div className="detail">
                <div className="detail-logo-1">
                  <img src={img_01} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo-2">
                  <img src={img_02} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo-3">
                  <img src={img_03} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="location">
              <div className="loc-data-1">
                <div className="loc-logo">
                  <img src={img_04} alt="" />
                </div>
                <div className="loc-text">
                  <p>{PI.CityAr}</p>
                  <p>{PI.City}</p>
                </div>
              </div>
              <div className="loc-data-2">
                <div className="loc-logo">
                  <img src={img_05} alt="" />
                </div>
                <div className="loc-text">
                  <p>{PI.NationalityAr}</p>
                  <p>{PI.Nationality}</p>
                </div>
              </div>
              <img className="world" src={img_06} alt="" />
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

export default Template10;
