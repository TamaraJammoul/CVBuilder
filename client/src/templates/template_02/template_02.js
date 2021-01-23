import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./template_02.css";

//#region Import Images
import photo from "../../assets/imgs/template_02/00.png";
import img_01 from "../../assets/imgs/template_02/01.png";
import img_02 from "../../assets/imgs/template_02/02.png";
import img_03 from "../../assets/imgs/template_02/03.png";
import img_04 from "../../assets/imgs/template_02/04.png";
import img_05 from "../../assets/imgs/template_02/05.png";
import img_06 from "../../assets/imgs/template_02/06.png";
import img_07 from "../../assets/imgs/template_02/07.png";
import img_08 from "../../assets/imgs/template_02/08.png";
import img_09 from "../../assets/imgs/template_02/09.png";
import img_10 from "../../assets/imgs/template_02/10.png";
import img_11 from "../../assets/imgs/template_02/11.png";
import img_12 from "../../assets/imgs/template_02/12.png";
import img_13 from "../../assets/imgs/template_02/13.png";
import img_14 from "../../assets/imgs/template_02/14.png";
import img_15 from "../../assets/imgs/template_02/15.png";
import img_16 from "../../assets/imgs/template_02/16.png";
import img_17 from "../../assets/imgs/template_02/17.png";
import img_18 from "../../assets/imgs/template_02/18.png";
import img_19 from "../../assets/imgs/template_02/19.png";
import img_20 from "../../assets/imgs/template_02/20.png";
import img_21 from "../../assets/imgs/template_02/21.png";
import img_22 from "../../assets/imgs/template_02/22.png";
import img_23 from "../../assets/imgs/template_02/23.png";
import img_24 from "../../assets/imgs/template_02/24.png";
//#endregion

function print() {
  const filename = "template-2.pdf";

  html2canvas(document.getElementById("toPDF"), {
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
}

const ref = React.createRef();
const Template02 = (props) => {
  const {
    Educations,
    Experiences,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Skill,
  } = props.Data;

  let educations = null;
  if (Educations.length > 0) {
    educations = Educations.map((edu) => {
      return (
        <div
          className={`edu ${props.language === "Ar" ? "ar" : ""}`}
          key={edu.id_}
        >
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="edu-title">{edu.Degree}</p>
          <p>{edu.UniversityName}</p>
          <p>Grade: {edu.DegreeFrom5} out of 5</p>
          <div className={`edu-year ${props.language === "Ar" ? "ar" : ""}`}>
            <p>{edu.YearEnd}</p>
          </div>
        </div>
      );
    });
  }

  let careerObjectives = null;
  if (CareerObjectives) {
    careerObjectives = CareerObjectives.Text;
  }

  let jobs = null;
  if (Experiences.length > 0) {
    jobs = Experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>{job.Description}</p>
        </div>
      );
    });
  }

  let PI = null;
  if (PersonalInformation) {
    PI = PersonalInformation;
  }

  let courses = null;
  if (Courses.length > 0) {
    courses = Courses.map((crs) => {
      return (
        <div className="course" key={crs.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>{crs.Name}</p>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_16,
    MS2: img_17,
    MS3: img_18,
    MS4: img_19,
    MS5: img_20,
    MS6: img_21,
    MS7: img_22,
    MS8: img_23,
    MS9: img_24,
  };
  let skills = null;
  if (Skill.length > 0) {
    skills = Skill.map((skill) => {
      let skillLogo = allSkills[skill.Name];
      return (
        <div className="flex-content" key={skill.id_}>
          <div className="skill-icon-bg">
            <img className="skill-icon-1" src={skillLogo} alt="" />
          </div>
          <p>{skill.Name}</p>
        </div>
      );
    });
  }

  return (
    <>
      <button onClick={print}>Export As pdf</button>
      <div className="template02-page">
        <div
          className={`template02-body ${props.language === "Ar" ? "ar" : ""} `}
          ref={ref}
          id="toPDF"
        >
          {/* Name Section */}
          <div className="name-sec">
            <h1>
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </h1>
          </div>

          {/* Info Section */}
          <div className="info-sec">
            <div className="main-photo">
              <img
                className={`photo ${props.language === "Ar" ? "ar" : ""} `}
                src={photo}
                alt=""
              />
            </div>
            <div className="info-details">
              <div className="info-content">
                <div className="content-img">
                  <img className="date" src={img_01} alt="date-icon" />
                </div>
                <p>{PI.Birth}</p>
              </div>
              <div className="info-content">
                <div className="content-img">
                  <img
                    className="location-mark"
                    src={img_04}
                    alt="location-mark-icon"
                  />
                </div>
                <p>{PI.City}</p>
              </div>
              <div className="info-content">
                <div className="content-img">
                  <img
                    className="flag"
                    src={img_02}
                    alt="saudi-arabia-flag-icon"
                  />
                </div>
                <p>{PI.Nationality}</p>
              </div>
              <div className="info-content">
                <div className="content-img">
                  <img
                    className="smartphone"
                    src={img_05}
                    alt="smartphone-icon"
                  />
                </div>
                <p>{PI.Phone}</p>
              </div>
              <div className="info-content">
                <div className="content-img">
                  <img className="man" src={img_03} alt="man-icon" />
                </div>
                <p>{PI.MaritalStatus}</p>
              </div>
              <div className="info-content">
                <div className="content-img">
                  <img className="envelope" src={img_06} alt="envelope-icon" />
                </div>
                <p>{PI.Email}</p>
              </div>
            </div>
            <div className="world">
              <img src={img_07} alt="world-map" />
            </div>
          </div>

          {/* Intro Section */}
          <div className="intro-sec">
            <div className="intro-body">
              <img src={img_08} alt="" />
              <div className="intro-content">
                <p>{careerObjectives}</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="sec edu-sec">
            <div
              className={`sec-icon-bg ${props.language === "Ar" ? "ar" : ""}`}
            >
              <img className="sec-icon-1" src={img_09} alt="" />
            </div>
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>
                {props.language === "Ar" ? "المؤهلات العلمية" : "Education"}
              </p>
            </div>
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              <div className="sec-body-content">{educations}</div>
              <div className="sec-body-img">
                <img src={img_13} alt="" />
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="sec work-sec">
            <div
              className={`sec-icon-bg ${props.language === "Ar" ? "ar" : ""}`}
            >
              <img className="sec-icon-2" src={img_10} alt="" />
            </div>
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>
                {" "}
                {props.language === "Ar"
                  ? "الخبرات العملية"
                  : "Work Experience"}
              </p>
            </div>
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              <div className="sec-body-content">{jobs}</div>
              <div className="sec-body-img">
                <img src={img_14} alt="" />
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="sec course-sec">
            <div
              className={`sec-icon-bg ${props.language === "Ar" ? "ar" : ""}`}
            >
              <img className="sec-icon-3" src={img_11} alt="" />
            </div>
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>
                {props.language === "Ar"
                  ? "الدورات التدريبية"
                  : "Training Courses"}
              </p>
            </div>
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              <div className="sec-body-content">{courses}</div>
              <div className="sec-body-img">
                <img src={img_15} alt="" />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="sec skills-sec">
            <div
              className={`sec-icon-bg ${props.language === "Ar" ? "ar" : ""}`}
            >
              <img className="sec-icon-4" src={img_12} alt="" />
            </div>
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>{props.language === "Ar" ? "المهارات" : "Skills"}</p>
            </div>
            <div
              className={`skill-sec-body ${
                props.language === "Ar" ? "ar" : ""
              }`}
            >
              <div className="flex-container">{skills}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template02;