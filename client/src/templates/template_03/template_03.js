import React from "react";
import Pdf from "react-to-pdf";
import "./template_03.css";

//#region Import Images
import photo from "../../assets/imgs/template_03/00.png";
import img_01 from "../../assets/imgs/template_03/01.png";
import img_02 from "../../assets/imgs/template_03/02.png";
import img_03 from "../../assets/imgs/template_03/03.png";
import img_04 from "../../assets/imgs/template_03/04.png";
import img_05 from "../../assets/imgs/template_03/05.png";
import img_06 from "../../assets/imgs/template_03/06.png";
import img_07 from "../../assets/imgs/template_03/07.png";
import img_08 from "../../assets/imgs/template_03/08.png";
import img_09 from "../../assets/imgs/template_03/09.png";
//#endregion

const ref = React.createRef();
const Template03 = (props) => {
  const {
    Educations,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Skill,
    TechnicalSkills,
  } = props.Data;

  let educations = null;
  if (Educations.length > 0) {
    educations = Educations.map((edu) => {
      return (
        <div className="edu" key={edu.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="edu-title">{edu.Degree}</p>
          <div className="edu-text">
            <p>{edu.Field}</p>
            <p>{edu.UniversityName}</p>
            <p>
              Grade: {edu.DegreeFrom100}% ({edu.Grade})
            </p>
            <p>Graduation Date: {edu.YearEnd}</p>
          </div>
        </div>
      );
    });
  }

  let jobs = null;
  if (Experiences.length > 0) {
    jobs = Experiences.map((job) => {
      return (
        <div className="work" key={job.id_}>
          <div
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p className="work-title">{job.Name}</p>
          <div className="work-text">
            <p>{job.Description}</p>
            <p>
              {`for ${job.End - job.Start} 
              ${job.End - job.Start > 1 ? "years" : "year"}`}
            </p>
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
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="course-text">
            <p>{crs.Name}</p>
          </div>
        </div>
      );
    });
  }

  let tSkills = null;
  if (TechnicalSkills.length > 0) {
    tSkills = TechnicalSkills.map((tskill, id) => {
      return (
        <div className="t-skill" key={tskill.id_}>
          <div className="t-skill-name">
            <p>{tskill.Name}</p>
          </div>
          <div className="t-skill-value">
            <p>{tskill.Rate}%</p>
          </div>
          <div className="t-skill-bar">
            <div className="bar-container">
              <div
                className={`bar bar-${id + 1}`}
                style={{ width: `${tskill.Rate}%` }}
              ></div>
            </div>
          </div>
        </div>
      );
    });
  }

  let languages = null;
  if (Languages.length > 0) {
    languages = Languages.map((lang, id) => {
      return (
        <div className="lang" key={lang.id_}>
          <p className={`lang-rate ${props.language === "Ar" ? "ar" : ""}`}>
            {lang.RateFrom100}%
          </p>
          <p className={`lang-name ${props.language === "Ar" ? "ar" : ""}`}>
            {lang.Name}
          </p>
          <div
            className={`lang-circle-wrapper ${
              props.language === "Ar" ? "ar" : ""
            }`}
          >
            <div
              className={`full-lang-${id + 1}`}
              style={{ width: `${lang.RateFrom100}%` }}
            ></div>
          </div>
        </div>
      );
    });
  }

  let skills = null;
  if (Skill.length > 0) {
    skills = Skill.map((skill) => {
      return (
        <div
          className={`p-skill ${props.language === "Ar" ? "ar" : ""}`}
          key={skill.id_}
        >
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="p-skill-text">
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
      <div className="template03-page">
        <div
          className={`template03-body ${props.language === "Ar" ? "ar" : ""}`}
          ref={ref}
          id="toPDF"
        >
          <div className={`cv-tag ${props.language === "Ar" ? "ar" : ""}`}>
            <h2>{props.language === "Ar" ? "السيرة الذاتية" : "CV"}</h2>
          </div>

          {/* Photo Section */}
          <div className={`photo ${props.language === "Ar" ? "ar" : ""}`}>
            <img src={photo} alt="" />
          </div>

          {/* Name Section */}
          <div className="name-sec">
            <h1>
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </h1>
          </div>

          {/* Info Section */}
          <div className="info-sec">
            <div className="info-details">
              <div className="detail">
                <img
                  className={`detail-img-1 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_01}
                  alt=""
                />
                <div className="detail-p-1">
                  <p>{PI.Phone} </p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-2 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_02}
                  alt=""
                />
                <div className="detail-p-2">
                  <p>{PI.Email}</p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-3 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_03}
                  alt=""
                />
                <div className="detail-p-3">
                  <p>
                    {PI.Nationality} / {PI.City}
                  </p>
                </div>
              </div>
              <div className="detail">
                <img
                  className={`detail-img-4 ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                  src={img_04}
                  alt=""
                />
                <div className="detail-p-4">
                  <p>{PI.Birth}</p>
                </div>
              </div>
            </div>
            <div className="info-desc">
              <p className="info-desc-title">
                {props.language === "Ar" ? "الهدف الوظيفي" : "Career Objective"}
              </p>
              <p className="info-desc-text">{careerObjectives}</p>
            </div>
          </div>

          {/* Main Section */}
          <div className="main-sec">
            {/* Left */}
            <div className="left">
              <div className="sec edu-sec">
                <img src={img_05} alt="" />
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  <h2
                    className={`sec-title ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    {props.language === "Ar" ? "التعليم" : "Education"}
                  </h2>
                  {educations}
                </div>
              </div>
              <div className="sec work-sec">
                <img src={img_06} alt="" />
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  <h2
                    className={`sec-title ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    {props.language === "Ar" ? "الخبرات" : "Work Experience"}
                  </h2>
                  {jobs}
                </div>
              </div>
              <div className="sec courses-sec">
                <img
                  className={`${props.language === "Ar" ? "ar" : ""}`}
                  src={img_07}
                  alt=""
                />
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  <h2
                    className={`sec-title ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    {props.language === "Ar"
                      ? "الدورات التدريبية"
                      : "Training Courses"}
                  </h2>
                  {courses}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="right">
              <div className="sec personal-skills-sec">
                <img src={img_08} alt="" />
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  <h2
                    className={`sec-title ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    {props.language === "Ar"
                      ? "المهارات الشخصية"
                      : "Personal Skills"}
                  </h2>
                  {skills}
                </div>
              </div>

              <div className="sec tech-skills-sec">
                <img src={img_09} alt="" />
                <div
                  className={`sec-content ${
                    props.language === "Ar" ? "ar" : ""
                  }`}
                >
                  <h2
                    className={`sec-title ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    {props.language === "Ar"
                      ? "المهارات التقنية"
                      : "Technical Skills"}
                  </h2>
                  {tSkills}
                </div>
              </div>

              <div className="languages-sec">
                <div className="languages-title">
                  {props.language === "Ar" ? "اللغات" : "Languages"}
                </div>
                <div className="langs">{languages}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template03;
