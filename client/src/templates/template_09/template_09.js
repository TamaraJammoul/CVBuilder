import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_09.css";

//#region Import Images
import img_00 from "../../assets/imgs/template_09/00.png";
import img_01 from "../../assets/imgs/template_09/01.png";
import img_02 from "../../assets/imgs/template_09/02.png";
import img_03 from "../../assets/imgs/template_09/03.png";
import img_04 from "../../assets/imgs/template_09/04.png";
import img_05 from "../../assets/imgs/template_09/05.png";
import img_06 from "../../assets/imgs/template_09/06.png";
import img_07 from "../../assets/imgs/template_09/07.png";
import img_08 from "../../assets/imgs/template_09/08.png";
import img_09 from "../../assets/imgs/template_09/09.png";
import img_10 from "../../assets/imgs/template_09/10.png";
import img_11 from "../../assets/imgs/template_09/11.png";
//#endregion

function print() {
  const filename = "template-9.pdf";
  const pdf = document.getElementById("toPDF");
  const titles = [...pdf.querySelectorAll("h2")];
  const text = [...pdf.querySelectorAll("p")];

  titles.map(
    (t) =>
      !t.classList.contains("tag-text") &&
      (t.style.transform = "translateY(-35%)")
  );
  text.map(
    (p) =>
      !p.classList.contains("detail-text") &&
      (p.style.transform = "translateY(-28%)")
  );

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

  titles.map((t) => (t.style.transform = "translateY(0%)"));
  text.map(
    (p) =>
      !p.classList.contains("detail-text") &&
      (p.style.transform = "translateY(0%)")
  );
}

const Template09 = (props) => {
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
      // let grade = "";
      // if (edu.Grade === 1) {
      //   grade = "Good";
      // } else if (edu.Grade === 2) {
      //   grade = "Very Good";
      // } else if (edu.Grade === 3) {
      //   grade = "Excellent";
      // }
      return (
        <div className="edu" key={edu.id_}>
          <div className="circle"></div>
          <p className="edu-title">{degree}</p>
          <div className="edu-text">
            <p>Major: {edu.Faculty}</p>
            <p>
              {edu.UniversityName} - {edu.YearEnd}
            </p>
            <p>GPA: {edu.DegreeFrom5} out of 5</p>
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
      // let gradeAr = "";
      // if (edu.Grade === 1) {
      //   gradeAr = "جيد";
      // } else if (edu.Grade === 2) {
      //   gradeAr = "جيد جداً";
      // } else if (edu.Grade === 3) {
      //   gradeAr = "ممتاز";
      // }
      return (
        <div className="edu" key={edu.id_}>
          <div className="circle ar"></div>
          <p className="edu-title">{degreeAr}</p>
          <div className="edu-text">
            <p>تخصص: {edu.FacultyAr}</p>
            <p>{edu.UniversityNameAr}</p>
            <p>المعدل: {edu.DegreeFrom5} من 5</p>
            <p>سنة التخرج: {edu.YearEnd}</p>
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
          <div className="circle"></div>
          <p className="work-title">{job.Name}</p>
          <div className="work-text">
            <p>{job.Description}</p>
            <p>
              {job.Start} - {job.End}
            </p>
          </div>
        </div>
      );
    });
    arJobs = experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div className="circle ar"></div>
          <p className="work-title">{job.NameAr}</p>
          <div className="work-text">
            <p>بوظيفة: {job.Description}</p>
            <p>
              {job.Start} - {job.End}
            </p>
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
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="course-text">
            <p>{crs.Name}</p>
          </div>
        </div>
      );
    });
    arCrses = courses.map((crs) => {
      return (
        <div className="course ar" key={crs.id_}>
          <div className="circle-container">
            <div className="circle ar"></div>
          </div>
          <div className="course-text">
            <p>{crs.NameAr}</p>
          </div>
        </div>
      );
    });
  }

  let skls = null;
  let arSkls = null;
  if (skills.length > 0) {
    skls = skills.map((skill) => {
      return (
        <div className="p-skill" key={skill.id_}>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="p-skill-text">
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
    arSkls = skills.map((skill) => {
      return (
        <div className="p-skill ar" key={skill.id_}>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="p-skill-text">
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
  let educationSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec edu-sec">
        <div className="sec-logo">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-content">
          <h2 className="sec-title">Education</h2>
          {edus}
        </div>
      </div>
      {/* Arabic */}
      <div className="sec edu-sec ar">
        <div className="sec-logo">
          <img src={img_07} alt="" />
        </div>
        <div className="sec-content ar">
          <h2 className="sec-title ar">التعليم</h2>
          {arEdus}
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
        <div className="sec-content">
          <h2 className="sec-title">Work Experience</h2>
          {jobs}
        </div>
      </div>
      {/* Arabic */}
      <div className="sec work-sec ar">
        <div className="sec-logo">
          <img src={img_08} alt="" />
        </div>
        <div className="sec-content ar">
          <h2 className="sec-title ar">الخبرات</h2>
          {arJobs}
        </div>
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
        <div className="sec-content">
          <h2 className="sec-title">Training Courses</h2>
          {crses}
        </div>
      </div>

      {/* Arabic */}
      <div className="sec courses-sec ar">
        <div className="sec-logo">
          <img src={img_09} alt="" />
        </div>
        <div className="sec-content ar">
          <h2 className="sec-title ar">الدورات التدريبية</h2>
          {arCrses}
        </div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className="row-section">
      {/* English */}
      <div className="sec personal-skills-sec">
        <div className="sec-logo">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-content">
          <h2 className="sec-title">Personal Skills</h2>
          {skls}
        </div>
      </div>
      {/* Arabic */}
      <div className="sec personal-skills-sec ar">
        <div className="sec-logo">
          <img src={img_10} alt="" />
        </div>
        <div className="sec-content ar">
          <h2 className="sec-title ar">المهارات</h2>
          {arSkls}
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
        <div className="sec-content">
          <h2 className="sec-title">Languages</h2>
          {langs}
        </div>
      </div>
      {/* Arabic */}
      <div className="sec lang-sec ar">
        <div className="sec-logo">
          <img src={img_11} alt="" />
        </div>
        <div className="sec-content ar">
          <h2 className="sec-title ar">اللغات</h2>
          {arLangs}
        </div>
      </div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    educationSection,
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
      <div className="template09-page">
        <div className="template09-body" id="toPDF">
          {/* CV Tag */}
          <div className="cv-tag">
            <h2 className="tag-text">
              <p>CV</p>
            </h2>
          </div>

          {/* Photo Section */}
          <div className="photo">
            <img src={img_00} alt="" />
          </div>

          {/* Name Section */}
          <div className="name-sec">
            <p>
              {PI.FirstNameAr} {PI.LastNameAr}
            </p>
            <p>
              {PI.FirstName} {PI.LastName}
            </p>
          </div>

          {/* Info Section */}
          <div className="info-sec">
            <div className="info-details">
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-3">
                  <img className="detail-img-1" src={img_01} alt="" />
                </div>
                <div className="detail-p-1">
                  <p className="detail-text">{PI.Email} </p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-1">
                  <img className="detail-img-2" src={img_02} alt="" />
                </div>
                <div className="detail-p-3">
                  <p className="detail-text">{PI.Phone} </p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-2">
                  <img className="detail-img-3" src={img_03} alt="" />
                </div>
                <div className="detail-p-2">
                  <p className="detail-text">{`${PI.City} - ${PI.CityAr}`}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-2">
                  <img className="detail-img-4" src={img_04} alt="" />
                </div>
                <div className="detail-p-2">
                  <p className="detail-text">{`${PI.Nationality} - ${PI.NationalityAr}`}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-1">
                  <img className="detail-img-5" src={img_05} alt="" />
                </div>
                <div className="detail-p-3">
                  <p className="detail-text">{`${PI.MaritalStatus} - ${PI.MaritalStatusAr}`}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-img-bg detail-img-bg-3">
                  <img className="detail-img-6" src={img_06} alt="" />
                </div>
                <div className="detail-p-1">
                  <p className="detail-text">{PI.Birth} </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable-main" type="Main">
              {(provided) => (
                <div
                  className="main-sec"
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

export default Template09;
