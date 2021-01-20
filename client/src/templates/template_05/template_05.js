import React from "react";
import Pdf from "react-to-pdf";
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

const ref = React.createRef();
const Template05 = (props) => {
  const {
    Educations,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Memberships,
    References,
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
          <div className={`edu-box ${props.language === "Ar" ? "ar" : ""}`}>
            <div className={`edu-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>{edu.UniversityName}</p>
            </div>
            <div
              className={`edu-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>
                <span className="content-name">Degree: </span>
                <span>{edu.Degree}</span>
              </p>
              <p>
                <span className="content-name">Field: </span>
                <span>{edu.Field}</span>
              </p>
              <p>
                <span className="content-name">Grade: </span>
                <span>{edu.DegreeFrom50} out of 5</span>
              </p>
            </div>
          </div>
          <div className={`edu-date ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <span className="start-date">{edu.YearStart}</span> -
            <span className="end-date">{edu.YearEnd}</span>
          </div>
        </div>
      );
    });
  }

  let jobs = null;
  if (Experiences.length > 0) {
    jobs = Experiences.map((job) => {
      return (
        <div
          className={`work ${props.language === "Ar" ? "ar" : ""}`}
          key={job.id_}
        >
          <div className={`work-box ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`work-title ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>{job.Name}</p>
            </div>
            <div
              className={`work-content ${props.language === "Ar" ? "ar" : ""}`}
            >
              <p>
                <span className="project-name">Project: </span>
                <span className="project-value">{job.Project}</span>
              </p>
              <p>
                <span className="job-name">Job: </span>
                <span className="job-value">{job.Description}</span>
              </p>
            </div>
          </div>
          <div className={`work-date ${props.language === "Ar" ? "ar" : ""}`}>
            <div
              className={`circle ${props.language === "Ar" ? "ar" : ""}`}
            ></div>
            <span className="start-date">{job.Start}</span> -
            <span className="end-date">{job.End}</span>
          </div>
        </div>
      );
    });
  }

  let careerObjectives = null;
  if (CareerObjectives) {
    careerObjectives = CareerObjectives.Text;
  }

  let PI = null;
  if (PersonalInformation) {
    PI = PersonalInformation;
  }

  let courses = null;
  if (Courses.length > 0) {
    courses = Courses.map((crs) => {
      return (
        <div
          className={`course ${props.language === "Ar" ? "ar" : ""}`}
          key={crs.id_}
        >
          <div
            className={`course-circle ${props.language === "Ar" ? "ar" : ""}`}
          >
            <div className="circle"></div>
          </div>
          <div className="course-name">{crs.Name}</div>
        </div>
      );
    });
  }

  let languages = null;
  if (Languages.length > 0) {
    languages = Languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<div className="lang-deg" key={Math.random()}></div>);
      }
      for (let i = 0; i < 10 - lang.Rate; i++) {
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
  }

  let memberships = null;
  if (Memberships.length > 0) {
    memberships = Memberships.map((member) => {
      return (
        <div
          className={`part ${props.language === "Ar" ? "ar" : ""}`}
          key={member.id_}
        >
          <div className="part-circle">
            <div className="circle"></div>
          </div>
          <div className="part-text">{member.Name}</div>
        </div>
      );
    });
  }

  let references = null;
  if (References.length > 0) {
    references = References.map((ref) => {
      return (
        <div className="ref" key={ref.id_}>
          <div className="ref-circle">
            <div className="circle"></div>
          </div>
          <div className="ref-name">
            <p>{ref.Name}</p>
          </div>
          <div className="ref-logo">
            <img src={img_25} alt="" />
          </div>
          <div className="ref-num">
            <p>{ref.Number}</p>
          </div>
        </div>
      );
    });
  }

  const allSkills = {
    MS1: img_15,
    MS2: img_16,
    MS3: img_17,
    MS4: img_18,
    MS5: img_19,
    MS6: img_20,
    MS7: img_21,
    MS8: img_22,
    MS9: img_23,
    MS10: img_24,
  };
  let skills = null;
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
  }

  return (
    <>
      <Pdf targetRef={ref} filename="post.pdf" x={5} y={8}>
        {({ toPdf }) => <button onClick={toPdf}>Export As pdf</button>}
      </Pdf>
      <div className="template05-page">
        <div
          className={`template05-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
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
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </div>

            {/* Details */}
            <div className="details">
              <div className={`detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="detail-logo">
                  <img src={img_01} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className={`detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="detail-logo">
                  <img src={img_02} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
              <div className={`detail ${props.language === "Ar" ? "ar" : ""}`}>
                <div className="detail-logo">
                  <img src={img_03} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="location">
              <div className="loc-data">
                <div className={`loc ${props.language === "Ar" ? "ar" : ""}`}>
                  <div className="loc-icon">
                    <img className="flag" src={img_04} alt="" />
                  </div>
                  <div className="loc-text">
                    <p>{PI.Nationality}</p>
                  </div>
                </div>
                <div className={`loc ${props.language === "Ar" ? "ar" : ""}`}>
                  <div className="loc-icon">
                    <img src={img_05} alt="" />
                  </div>
                  <div className="loc-text">
                    <p>{PI.City}</p>
                  </div>
                </div>
              </div>
              {props.language === "Ar" ? (
                <img className="world ar" src={img_26} alt="" />
              ) : (
                <img className="world" src={img_06} alt="" />
              )}
            </div>
          </div>

          {/* Intro Section */}
          <div className={`objective ${props.language === "Ar" ? "ar" : ""}`}>
            <div className={`obj-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_07} alt="" />
            </div>
            <div className={`obj-text ${props.language === "Ar" ? "ar" : ""}`}>
              <p>{careerObjectives}</p>
            </div>
          </div>

          {/* Education Section */}
          <div className={`sec edu-sec ${props.language === "Ar" ? "ar" : ""}`}>
            {/* sec logo */}
            <div className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_08} alt="" />
            </div>
            {/* sec title */}
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>{props.language === "Ar" ? "المؤهل التعليمي" : "Education"}</p>
            </div>
            {/* sec body */}
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              {educations}
            </div>
          </div>

          {/* Work Section */}
          <div
            className={`sec work-sec ${props.language === "Ar" ? "ar" : ""}`}
          >
            {/* sec logo */}
            <div className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_09} alt="" />
            </div>
            {/* sec title */}
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>
                {props.language === "Ar"
                  ? "الخبرات العملية"
                  : "Work Experience"}
              </p>
            </div>
            {/* sec body */}
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              {jobs}
            </div>
          </div>

          {/* Courses Section */}
          <div
            className={`sec courses-sec ${props.language === "Ar" ? "ar" : ""}`}
          >
            {/* sec logo */}
            <div className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_10} alt="" />
            </div>
            {/* sec title */}
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>
                {props.language === "Ar"
                  ? "الدورات التدريبية"
                  : "Training Courses"}
              </p>
            </div>
            {/* sec body */}
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              <div className="sec-content">{courses}</div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`sec skills-sec ${props.language === "Ar" ? "ar" : ""}`}
          >
            {/* sec logo */}
            <div className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}>
              <img src={img_11} alt="" />
            </div>
            {/* sec title */}
            <div className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}>
              <p>{props.language === "Ar" ? "المهارات" : "Skills"}</p>
            </div>
            {/* sec body */}
            <div className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}>
              {skills}
            </div>
          </div>

          {/* Other Sections */}
          <div className="other-sec">
            {/* Memberships */}
            <div
              className={`sec part-sec ${props.language === "Ar" ? "ar" : ""}`}
            >
              {/* sec logo */}
              <div
                className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}
              >
                <img src={img_12} alt="" />
              </div>
              {/* sec title */}
              <div
                className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
              >
                <p>{props.language === "Ar" ? "العضويات" : "Memberships"}</p>
              </div>
              {/* sec body */}
              <div
                className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}
              >
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  {memberships}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div
              className={`sec lang-sec ${props.language === "Ar" ? "ar" : ""}`}
            >
              {/* sec logo */}
              <div
                className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}
              >
                <img src={img_13} alt="" />
              </div>
              {/* sec title */}
              <div
                className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
              >
                <p>{props.language === "Ar" ? "اللغات" : "Languages"}</p>
              </div>
              {/* sec body */}
              <div
                className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}
              >
                {languages}
              </div>
            </div>

            {/* References */}
            <div
              className={`sec ref-sec ${props.language === "Ar" ? "ar" : ""}`}
            >
              {/* sec logo */}
              <div
                className={`sec-logo ${props.language === "Ar" ? "ar" : ""}`}
              >
                <img src={img_14} alt="" />
              </div>
              {/* sec title */}
              <div
                className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
              >
                <p>{props.language === "Ar" ? "المراجع" : "References"}</p>
              </div>
              {/* sec body */}
              <div
                className={`sec-body ${props.language === "Ar" ? "ar" : ""}`}
              >
                {references}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template05;
