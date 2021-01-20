import React from "react";
import Pdf from "react-to-pdf";
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

const ref = React.createRef();
const Template06 = (props) => {
  const {
    Educations,
    Certificates,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    OtherTrainings,
    Skill,
  } = props.Data;

  let educations = null;
  if (Educations.length > 0) {
    educations = Educations.map((edu) => {
      return (
        <div className="edu" key={edu.id_}>
          <div className="edu-title">
            <p>{edu.UniversityName}</p>
          </div>
          <div className="edu-content">
            <div className="edu-major">
              <p>
                {edu.Degree} in {edu.Field}
              </p>
            </div>
            <div className="edu-year">
              <p>Graduation Year: {edu.YearEnd}</p>
            </div>
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
          <div className="work-company">
            <div className="arrow">
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
        <div className="course" key={crs.id_}>
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

  let languages = null;
  if (Languages.length > 0) {
    languages = Languages.map((lang) => {
      let rate = [];
      for (let i = 0; i < lang.Rate; i++) {
        rate.push(<img src={img_29} alt="" />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_30} alt="" />);
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

  let otherTrainings = null;
  if (OtherTrainings.length > 0) {
    otherTrainings = OtherTrainings.map((train) => {
      return (
        <div className="train" key={train.id_}>
          <div className="train-circle">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
          </div>
          <div className="train-name">{train.Name}</div>
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

  let certificates = null;
  if (Certificates.length > 0) {
    certificates = Certificates.map((cert) => {
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

  return (
    <>
      <Pdf targetRef={ref} filename="post.pdf" x={5} y={0}>
        {({ toPdf }) => <button onClick={toPdf}>Export As pdf</button>}
      </Pdf>
      <div className="template06-page">
        <div className="template06-body" ref={ref} id="toPDF">
          {/* Name Section */}
          <div className="name-sec">
            <h1>
              {PersonalInformation.FirstName} {PersonalInformation.LastName}
            </h1>
          </div>

          {/* Personal Info. + Career Objective */}
          <div className="sec-wrapper sec-wrapper-1">
            {/* Info Section */}
            <div className="sec info-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_01} alt="" />
                </div>
                <div className="title-name">
                  <p>Personal Information</p>
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

            {/* Career Objective Section */}
            <div className="sec objective-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_02} alt="" />
                </div>
                <div className="title-name">
                  <p>Career Objective</p>
                </div>
              </div>
              <div className="sec-body">
                <div className="objective-text">
                  <p>{careerObjectives}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work + Education */}
          <div className="sec-wrapper sec-wrapper-2">
            {/* Work Section */}
            <div className="sec work-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_09} alt="" />
                </div>
                <div className="title-name">
                  <p>Experience</p>
                </div>
              </div>
              <div className="sec-body">
                <div className="left">
                  <div className="year">
                    <p>Present</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2020</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2019</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2018</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2017</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2016</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2015</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2014</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2013</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2012</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2011</p>
                    <div className="dot"></div>
                  </div>
                  <div className="year">
                    <p>2010</p>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="right">{jobs}</div>
              </div>
            </div>

            {/* Education Section */}
            <div className="sec edu-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_11} alt="" />
                </div>
                <div className="title-name">
                  <p>Education</p>
                </div>
              </div>
              <div className="sec-body">
                {educations}
                <div className="sec certification-sec">
                  <div className="sec-title">
                    <div className="title-logo">
                      <img src={img_12} alt="" />
                    </div>
                    <div className="title-name">
                      <p>Certificates</p>
                    </div>
                  </div>
                  <div className="sec-body">{certificates}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses + Programs */}
          <div className="sec-wrapper sec-wrapper-3">
            {/* Courses Section */}
            <div className="sec course-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_13} alt="" />
                </div>
                <div className="title-name">
                  <p>Courses</p>
                </div>
              </div>
              <div className="sec-body">{courses}</div>
            </div>

            {/* Programs Section */}
            <div className="sec program-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_14} alt="" />
                </div>
                <div className="title-name">
                  <p>Programs</p>
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
          </div>

          {/* Skills */}
          <div className="sec-wrapper sec-wrapper-4">
            {/* Skills Section */}
            <div className="sec skill-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_16} alt="" />
                </div>
                <div className="title-name">
                  <p>Skills</p>
                </div>
              </div>
              <div className="sec-body">{skills}</div>
            </div>
          </div>

          {/* Other Training + Languages */}
          <div className="sec-wrapper sec-wrapper-5">
            {/* Other Training */}
            <div className="sec other-sec">
              <div className="sec-title">
                <div className="title-logo">
                  <img src={img_17} alt="" />
                </div>
                <div className="title-name">
                  <p>Other Training</p>
                </div>
              </div>
              <div className="sec-body">{otherTrainings}</div>
            </div>

            {/* Languages */}
            <div className="lang-wrapper">
              <div className="sec lang-sec">
                <div className="sec-title">
                  <div className="title-logo">
                    <img src={img_18} alt="" />
                  </div>
                  <div className="title-name">
                    <p>Languages</p>
                  </div>
                </div>
                <div className="sec-body">{languages}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template06;
