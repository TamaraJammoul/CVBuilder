import React from "react";
import Pdf from "react-to-pdf";

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
import "./template_04.css";

const ref = React.createRef();
const Template04 = (props) => {
  const {
    Educations,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Memberships,
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
          <p className="edu-title">
            {edu.Degree} in {edu.Field}
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
            <p>Grade: {edu.DegreeFrom5}</p>
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
            className={`circle ${props.language === "Ar" ? "ar" : ""}`}
          ></div>
          <p>{crs.Name}</p>
        </div>
      );
    });
  }

  let languages = null;
  if (Languages.length > 0) {
    languages = Languages.map((lang) => {
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

  let memberships = null;
  if (Memberships.length > 0) {
    memberships = Memberships.map((member) => {
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
  let skills = null;
  if (Skill.length > 0) {
    skills = Skill.map((skill, id) => {
      let skillLogo = allSkills[skill.Name];

      return (
        <div className="skill" key={skill.id_}>
          <div className="skill-logo">
            <img className={`skill-logo-${id + 1}`} src={skillLogo} alt="" />
          </div>
          <div className="skill-name">{skill.Name}</div>
        </div>
      );
    });
  }

  return (
    <>
      <Pdf targetRef={ref} filename="post.pdf" x={5} y={8}>
        {({ toPdf }) => <button onClick={toPdf}>Export As pdf</button>}
      </Pdf>
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
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </h1>
            {/* <h2>Computer Science</h2> */}
          </div>

          {/* Main */}
          <div className="main">
            {/* Main - Left */}
            <div className={`left ${props.language === "Ar" ? "ar" : ""}`}>
              {/* Objective Goal */}
              <div className="sec objective-sec">
                <div
                  className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
                >
                  {props.language === "Ar"
                    ? "الهدف الوظيفي"
                    : "Objective Career"}
                </div>
                <div className="sec-body">
                  <p>{careerObjectives}</p>
                </div>
              </div>

              {/* Communication Info. */}
              <div className="sec comm-sec">
                <div
                  className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
                >
                  {props.language === "Ar" ? "التواصل" : "Communication"}
                </div>
                <div className="sec-body">
                  <div className="comm">
                    <div className="comm-logo">
                      <div className="comm-logo-bg">
                        <img className="comm-logo-1" src={img_01} alt="" />
                      </div>
                    </div>
                    <div
                      className={`comm-name ${
                        props.language === "Ar" ? "ar" : ""
                      }`}
                    >
                      <p className="comm-name-1">{PI.Email}</p>
                    </div>
                  </div>
                  <div className="comm">
                    <div className="comm-logo">
                      <div className="comm-logo-bg">
                        <img className="comm-logo-2" src={img_02} alt="" />
                      </div>
                    </div>
                    <div
                      className={`comm-name ${
                        props.language === "Ar" ? "ar" : ""
                      }`}
                    >
                      <p className="comm-name-2">{PI.Phone}</p>
                    </div>
                  </div>
                  <div className="comm">
                    <div className="comm-logo">
                      <div className="comm-logo-bg">
                        <img className="comm-logo-3" src={img_03} alt="" />
                      </div>
                    </div>
                    <div
                      className={`comm-name ${
                        props.language === "Ar" ? "ar" : ""
                      }`}
                    >
                      <p className="comm-name-3">
                        {PI.Nationality} - {PI.City}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="sec lang-sec">
                <div
                  className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
                >
                  {props.language === "Ar" ? "اللغة" : "Languages"}
                </div>
                <div className="sec-body">{languages}</div>
              </div>

              {/* Skills */}
              <div className="sec skill-sec">
                <div
                  className={`sec-title ${props.language === "Ar" ? "ar" : ""}`}
                >
                  {props.language === "Ar" ? "المهارات" : "Skills"}
                </div>
                <div className="sec-body">{skills}</div>
              </div>
            </div>

            {/* Main - Right */}
            <div className="right">
              {/* Education */}
              <div className="main-sec edu-sec">
                <div className="main-sec-title">
                  <div
                    className={`title-back-bg ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    <div className="title-front-bg"></div>
                    <p>
                      {props.language === "Ar"
                        ? "المؤهلات العلمية"
                        : "Education"}
                    </p>
                  </div>
                </div>
                <div className="main-sec-body edu-body">{educations}</div>
              </div>

              {/* Work */}
              <div className="main-sec work-sec">
                <div className="main-sec-title">
                  <div
                    className={`title-back-bg ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    <div className="title-front-bg"></div>
                    <p>
                      {props.language === "Ar"
                        ? "الخبرات العملية"
                        : "Work Experience"}
                    </p>
                  </div>
                </div>
                <div className="main-sec-body">{jobs}</div>
              </div>

              {/* Courses */}
              <div className="main-sec course-sec">
                <div className="main-sec-title">
                  <div
                    className={`title-back-bg ${
                      props.language === "Ar" ? "ar" : ""
                    }`}
                  >
                    <div className="title-front-bg"></div>
                    <p>
                      {props.language === "Ar"
                        ? "الدورات التدريبية"
                        : "Training Courses"}
                    </p>
                  </div>
                </div>
                <div className="main-sec-body">{courses}</div>
              </div>

              {/* Memberships */}
              <div className="main-sec part-sec">
                <div className="main-sec-title">
                  <div className="title-back-bg">
                    <div className="title-front-bg"></div>
                    <p>
                      {props.language === "Ar" ? "العضويات" : "Memberships"}
                    </p>
                  </div>
                </div>
                <div className="main-sec-body">{memberships}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template04;
