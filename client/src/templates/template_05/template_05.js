import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./template_05.css";

//#region Import Images
import img_00 from "../../assets/imgs/template_05/00.png";
import img_01 from "../../assets/imgs/template_05/01.png";
import img_02 from "../../assets/imgs/template_05/02.png";
import img_03 from "../../assets/imgs/template_05/03.png";
import img_04 from "../../assets/imgs/template_05/04.png";
import img_05 from "../../assets/imgs/template_05/05.png";
import img_06 from "../../assets/imgs/template_05/06.png";
import img_07 from "../../assets/imgs/template_05/07.png";
import img_08 from "../../assets/imgs/template_05/08.png";
import img_09 from "../../assets/imgs/template_05/09.png";
import img_10 from "../../assets/imgs/template_05/10.png";
import img_11 from "../../assets/imgs/template_05/11.png";
import img_12 from "../../assets/imgs/template_05/12.png";
import img_13 from "../../assets/imgs/template_05/13.png";
import img_14 from "../../assets/imgs/template_05/14.png";
import img_15 from "../../assets/imgs/template_05/15.png";
import img_16 from "../../assets/imgs/template_05/16.png";
import img_17 from "../../assets/imgs/template_05/17.png";
import img_18 from "../../assets/imgs/template_05/18.png";
import img_19 from "../../assets/imgs/template_05/19.png";
import img_20 from "../../assets/imgs/template_05/20.png";
import img_21 from "../../assets/imgs/template_05/21.png";
import img_22 from "../../assets/imgs/template_05/22.png";
import img_23 from "../../assets/imgs/template_05/23.png";
import img_24 from "../../assets/imgs/template_05/24.png";
import img_25 from "../../assets/imgs/template_05/25.png";
import img_26 from "../../assets/imgs/template_05/26.png";
//#endregion

function downloadImage(data, filename = 'untitled.jpeg') {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}

function saveAs(type) {
  const pdf = document.getElementById("toPDF");
  const text = [...pdf.querySelectorAll("p")];
  text.forEach(
    (p) =>
      (p.style.transform = "translateY(-30%)")
  );

  html2canvas(pdf, {
    dpi: 300, // Set to 300 DPI
    scale: 2, // Adjusts your resolution
  })
    .then((canvas) => {
      const filename = "template_5";
      if(type==='PDF'){
        var img = canvas.toDataURL("image/jpeg", 1);
        var doc = new jsPDF("p", "mm", "a4");
        doc.addImage(img, "JPEG", -4, 0, 215, 298);
        doc.save(filename);
      }
      else if(type==='PNG'){
        let imageURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        downloadImage(imageURL, filename+'.png');
      }
      else {
        let imageURL = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        downloadImage(imageURL, filename+'.jpeg');
      }
    })
    .catch((err) => console.log(err));

    text.forEach(
      (p) =>
        (p.style.transform = "translateY(0%)")
    );
}

const ref = React.createRef();
const Template05 = (props) => {
  const {
    educations,
    experiences,
    languages,
    courses,
    careerobjective,
    personalInformation,
    memberships,
    references,
    skills,
  } = useSelector((state) => state.template);

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
          className={`t05-edu ${props.language === "Ar" ? "ar" : ""}`}
          key={edu.id_}
        >
          <div className={`t05-edu-box ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`t05-edu-title bold ${
                props.language === "Ar" ? "ar" : ""
              }`}
            >
              <p>{edu.UniversityName}</p>
            </div>
            <div
              className={`t05-edu-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>
                <span className="t05-content-name">Degree: </span>
                <span>{degree}</span>
              </p>
              <p>
                <span className="t05-content-name">Field: </span>
                <span>{edu.Faculty}</span>
              </p>
              <p>
                <span className="t05-content-name">Grade: </span>
                <span>{edu.DegreeFrom5} out of 5</span>
              </p>
            </div>
          </div>
          <div className={`t05-edu-date ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`t05-circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <p>
              <span className="t05-start-date">{edu.YearStart}</span> -
              <span className="t05-end-date">{edu.YearEnd}</span>
            </p>
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
          degreeAr = "شهادة\xa0الثانوية\xa0العامة";
        }
        return (
          <div
            className={`t05-edu ${props.language === "Ar" ? "ar" : ""}`}
            key={edu.id_}
          >
            <div className={`t05-edu-box ${props.language === "Ar" ? "ar" : ""}`}>
              <div
                className={`t05-edu-title bold ${
                  props.language === "Ar" ? "ar" : ""
                }`}
              >
                <p>{edu.UniversityNameAr}</p>
              </div>
              <div
                className={`t05-edu-content ${props.language === "Ar" ? "ar" : ""}`}
              >
                <p>
                  <span className="t05-content-name">{`الدرجة\xa0العلمية\xa0:\xa0`}</span>
                  <span>{degreeAr}</span>
                </p>
                <p>
                  <span className="t05-content-name">{`التخصص\xa0:\xa0`}</span>
                  <span>{edu.FacultyAr}</span>
                </p>
                <p>
                  <span className="t05-content-name">{`المعدل\xa0:\xa0`}</span>
                  <span>{`${edu.DegreeFrom5}\xa0من\xa05`}</span>
                </p>
              </div>
            </div>
            <div className={`t05-edu-date ${props.language === "Ar" ? "ar" : ""}`}>
              <div
                className={`t05-circle ${props.language === "Ar" ? "ar" : ""}`}
              ></div>
              <p>
                <span className="t05-start-date">{edu.YearStart}</span> -
                <span className="t05-end-date">{edu.YearEnd}</span>
              </p>
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
          className={`t05-work ${props.language === "Ar" ? "ar" : ""}`}
          key={job.id_}
        >
          <div className={`t05-work-box ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`t05-work-title bold ${
                props.language === "Ar" ? "ar" : ""
              }`}
            >
              <p>{job.Name}</p>
            </div>
            <div
              className={`t05-work-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>
                <span className="t05-project-name">Project: </span>
                <span className="t05-project-value">{job.Project}</span>
              </p>
              <p>
                <span className="t05-job-name">Job: </span>
                <span className="t05-job-value">{job.Description}</span>
              </p>
            </div>
          </div>
          <div className={`t05-work-date ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`t05-circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <p>
              <span className="t05-start-date">{job.Start}</span> -
              <span className="t05-end-date">{job.End}</span>
            </p>
          </div>
        </div>
      );
    });
    if (props.language === "Ar") {
      jobs = experiences.map((job) => {
        return (
          <div
            className={`t05-work ${props.language === "Ar" ? "ar" : ""}`}
            key={job.id_}
          >
            <div className={`t05-work-box ${props.language === "Ar" ? "ar" : ""}`}>
              <div
                className={`t05-work-title bold ${
                  props.language === "Ar" ? "ar" : ""
                }`}
              >
                <p>{job.Name}</p>
              </div>
              <div
                className={`t05-work-content ${
                  props.language === "Ar" ? "ar" : ""
                }`}
              >
                <p>
                  <span className="t05-project-name">{`المشروع\xa0:\xa0`}</span>
                  <span className="t05-project-value">{job.Project}</span>
                </p>
                <p>
                  <span className="t05-job-name">{`الوظيفة\xa0:\xa0`}</span>
                  <span className="t05-job-value">{job.Description}</span>
                </p>
              </div>
            </div>
            <div className={`t05-work-date ${props.language === "Ar" ? "ar" : ""}`}>
              <div
                className={`t05-circle ${props.language === "Ar" ? "ar" : ""}`}
              ></div>
              <p>
                <span className="t05-start-date">{job.Start}</span> -
                <span className="t05-end-date">{job.End}</span>
              </p>
            </div>
          </div>
        );
      });
    }
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
          className={`t05-course ${props.language === "Ar" ? "ar" : ""}`}
          key={crs.id_}
        >
          <div
            className={`t05-course-circle ${props.language === "Ar" ? "ar" : ""}`}
          >
            <div className="t05-circle"></div>
          </div>
          <div className="t05-course-name">
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
        rate.push(<div className="t05-lang-deg" key={Math.random()}></div>);
      }
      for (let i = 0; i < 10 - lang.Rate; i++) {
        rate.push(<div className="t05-lang-deg t05-empty" key={Math.random()}></div>);
      }

      return (
        <div className="t05-lang" key={lang.id_}>
          <div className="t05-lang-name">
            <p>{lang.Name}</p>
          </div>
          <div className="t05-lang-rate">{rate}</div>
        </div>
      );
    });
  }

  let mems = null;
  if (memberships.length > 0) {
    mems = memberships.map((member) => {
      return (
        <div
          className={`t05-part ${props.language === "Ar" ? "ar" : ""}`}
          key={member.id_}
        >
          <div className="t05-part-circle">
            <div className="t05-circle"></div>
          </div>
          <div className="t05-part-text">
            <p>{member.Name}</p>
          </div>
        </div>
      );
    });
  }

  let refs = null;
  if (references.length > 0) {
    refs = references.map((ref) => {
      return (
        <div className="t05-ref" key={ref.id_}>
          <div className="t05-ref-circle">
            <div className="t05-circle"></div>
          </div>
          <div className="t05-ref-name">
            <p>{ref.Name}</p>
          </div>
          <div className="t05-ref-logo">
            <img src={img_25} alt="" />
          </div>
          <div className="t05-ref-num">
            <p>{ref.Number}</p>
          </div>
        </div>
      );
    });
  }

  const allSkills = {
    'Computer Proficiency': img_15,
    'Office Programs': img_16,
    'Leadership and Organisation': img_17,
    'MS4': img_18,
    'Self Development': img_19,
    'Time Managment': img_20,
    'Problem solving': img_21,
    'Work under pressure': img_22,
    'MS9': img_23,
    'TeamWork': img_24,
  };
  let skls = null;
  if (skills.length > 0) {
    skls = skills.map((skill) => {
      let skillLogo = allSkills[skill.Name];
      return (
        <div className="t05-skill" key={skill.id_}>
          <div className="t05-skill-logo">
            <div className="t05-skill-logo-bg">
              <img src={skillLogo} alt="" />
            </div>
          </div>
          <div className="t05-skill-name">
            <p>{skill.Name}</p>
          </div>
        </div>
      );
    });
  }

  //#region - Education Section
  let eduSection = (
    <div className={`t05-sec t05-edu-sec ${props.language === "Ar" ? "ar" : ""}`}>
      {/* sec logo */}
      <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
        <img src={img_08} alt="" />
      </div>
      {/* sec title */}
      <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "المؤهل\xa0التعليمي" : "Education"}</p>
      </div>
      {/* sec body */}
      <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
        {edus}
      </div>
    </div>
  );
  //#endregion
  //#region - Work Section
  let workSection = (
    <div className={`t05-sec t05-work-sec ${props.language === "Ar" ? "ar" : ""}`}>
      {/* sec logo */}
      <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
        <img src={img_09} alt="" />
      </div>
      {/* sec title */}
      <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "الخبرات\xa0العملية" : "Work Experience"}</p>
      </div>
      {/* sec body */}
      <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
        {jobs}
      </div>
    </div>
  );
  //#endregion
  //#region - Courses Section
  let coursesSection = (
    <div className={`t05-sec t05-courses-sec ${props.language === "Ar" ? "ar" : ""}`}>
      {/* sec logo */}
      <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
        <img src={img_10} alt="" />
      </div>
      {/* sec title */}
      <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <p>
          {props.language === "Ar" ? "الدورات\xa0التدريبية" : "Training Courses"}
        </p>
      </div>
      {/* sec body */}
      <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
        <div className="t05-sec-content">{crses}</div>
      </div>
    </div>
  );
  //#endregion
  //#region - Skills Section
  let skillsSection = (
    <div className={`t05-sec t05-skills-sec ${props.language === "Ar" ? "ar" : ""}`}>
      {/* sec logo */}
      <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
        <img src={img_11} alt="" />
      </div>
      {/* sec title */}
      <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
        <p>{props.language === "Ar" ? "المهارات" : "Skills"}</p>
      </div>
      {/* sec body */}
      <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
        {skls}
      </div>
    </div>
  );
  //#endregion
  //#region - Other Section
  let otherSection = (
    <div className="t05-other-sec">
      {/* Memberships */}
      <div className={`t05-sec t05-part-sec ${props.language === "Ar" ? "ar" : ""}`}>
        {/* sec logo */}
        <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_12} alt="" />
        </div>
        {/* sec title */}
        <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "العضويات" : "Memberships"}</p>
        </div>
        {/* sec body */}
        <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
          <div className={`t05-sec-content ${props.language === "Ar" ? "ar" : ""}`}>
            {mems}
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className={`t05-sec t05-lang-sec ${props.language === "Ar" ? "ar" : ""}`}>
        {/* sec logo */}
        <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_13} alt="" />
        </div>
        {/* sec title */}
        <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "اللغات" : "Languages"}</p>
        </div>
        {/* sec body */}
        <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
          {langs}
        </div>
      </div>

      {/* References */}
      <div className={`t05-sec t05-ref-sec ${props.language === "Ar" ? "ar" : ""}`}>
        {/* sec logo */}
        <div className={`t05-sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
          <img src={img_14} alt="" />
        </div>
        {/* sec title */}
        <div className={`t05-sec-title ${props.language === "Ar" ? "ar" : ""}`}>
          <p>{props.language === "Ar" ? "المراجع" : "References"}</p>
        </div>
        {/* sec body */}
        <div className={`t05-sec-body ${props.language === "Ar" ? "ar" : ""}`}>
          {refs}
        </div>
      </div>
    </div>
  );
  //#endregion

  const [mainSectionList, setMainSectionList] = useState([
    eduSection,
    workSection,
    coursesSection,
    skillsSection,
    otherSection,
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
      <div className="backgroundimg">
        <div className='dl-ctrls'>
          <button onClick={() => saveAs('PDF')}>Download as PDF</button>
          <button onClick={() => saveAs('PNG')}>Download as PNG</button>
          <button onClick={() => saveAs('JPEG')}>Download as JPEG</button>
        </div>
        <div
          className={`template05-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
          {/* Header Section */}
          <div className="t05-header-sec">
            {/* Photo */}
            <div className="t05-photo">
              <div className="t05-photo-bg">
                <img src={img_00} alt="" />
              </div>
            </div>

            {/* Name */}
            <div className="t05-name">
              <p>
                {PI.FirstName} {PI.LastName}
              </p>
            </div>

            {/* Details */}
            <div className="t05-details">
              <div className={`t05-detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="t05-detail-logo">
                  <img src={img_01} alt="" />
                </div>
                <div className="t05-detail-text">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className={`t05-detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="t05-detail-logo">
                  <img src={img_02} alt="" />
                </div>
                <div className="t05-detail-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
              <div className={`t05-detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="t05-detail-logo">
                  <img src={img_03} alt="" />
                </div>
                <div className="t05-detail-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="t05-location">
              <div className="t05-loc-data">
                <div className={`t05-loc ${props.language === "Ar" ? "ar" : ""}`}>
                  <div className="t05-loc-icon">
                    <img className="t05-flag" src={img_04} alt="" />
                  </div>
                  <div className="t05-loc-text">
                    <p>{props.language==='Ar'? PI.NationalityAr : PI.Nationality}</p>
                  </div>
                </div>
                <div className={`t05-loc ${props.language === "Ar" ? "ar" : ""}`}>
                  <div className="t05-loc-icon">
                    <img src={img_05} alt="" />
                  </div>
                  <div className="t05-loc-text">
                    <p>{props.language==='Ar' ? PI.CityAr : PI.City}</p>
                  </div>
                </div>
              </div>
              {props.language === "Ar" ? (
                <img className="t05-world ar" src={img_26} alt="" />
              ) : (
                <img className="t05-world" src={img_06} alt="" />
              )}
            </div>
          </div>

          {/* Intro Section */}
          <div className={`t05-objective ${props.language === "Ar" ? "ar" : ""}`}>
            <div className={`t05-obj-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_07} alt="" />
            </div>
            <div className={`t05-obj-text ${props.language === "Ar" ? "ar" : ""}`}>
              <p className="bold">{CO.Text}</p>
            </div>
          </div>

          {/* Main Sections */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable-main" type="Main">
              {(provided) => (
                <div
                  className="t05-main-sec"
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

export default Template05;
