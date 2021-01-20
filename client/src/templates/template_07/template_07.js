import React from "react";
import Pdf from "react-to-pdf";
import "./template_07.css";

//#region Import Images
import img_00 from "../../assets/imgs/template_07/00.png";
import img_01 from "../../assets/imgs/template_07/01.png";
import img_02 from "../../assets/imgs/template_07/02.png";
import img_03 from "../../assets/imgs/template_07/03.png";
import img_04 from "../../assets/imgs/template_07/04.png";
import img_05 from "../../assets/imgs/template_07/05.png";
import img_06 from "../../assets/imgs/template_07/06.png";
import img_07 from "../../assets/imgs/template_07/07.png";
import img_08 from "../../assets/imgs/template_07/08.png";
import img_09 from "../../assets/imgs/template_07/09.png";
import img_10 from "../../assets/imgs/template_07/10.png";
import img_11 from "../../assets/imgs/template_07/11.png";
import img_12 from "../../assets/imgs/template_07/12.png";
import img_13 from "../../assets/imgs/template_07/13.png";
import img_14 from "../../assets/imgs/template_07/14.png";
import img_15 from "../../assets/imgs/template_07/15.png";
import img_16 from "../../assets/imgs/template_07/16.png";
import img_17 from "../../assets/imgs/template_07/17.png";
import img_18 from "../../assets/imgs/template_07/18.png";
import img_19 from "../../assets/imgs/template_07/19.png";
import img_20 from "../../assets/imgs/template_07/20.png";
import img_21 from "../../assets/imgs/template_07/21.png";
import img_22 from "../../assets/imgs/template_07/22.png";
import img_23 from "../../assets/imgs/template_07/23.png";
import img_24 from "../../assets/imgs/template_07/24.png";
import img_25 from "../../assets/imgs/template_07/25.png";
import img_26 from "../../assets/imgs/template_07/26.png";
import img_27 from "../../assets/imgs/template_07/27.png";
import img_28 from "../../assets/imgs/template_07/28.png";
import img_29 from "../../assets/imgs/template_07/29.png";
import img_30 from "../../assets/imgs/template_07/30.png";
import img_31 from "../../assets/imgs/template_07/31.png";
import img_32 from "../../assets/imgs/template_07/32.png";
import img_33 from "../../assets/imgs/template_07/33.png";
import img_35 from "../../assets/imgs/template_07/35.png";
//#endregion

const ref = React.createRef();
const Template07 = (props) => {
  const {
    Educations,
    Experiences,
    Languages,
    Courses,
    CareerObjectives,
    PersonalInformation,
    Skill,
  } = props.Data;

  let educations = null;
  if (Educations.length > 0) {
    educations = Educations.map((edu) => {
      return (
        <div className="edu" key={edu.id_}>
          <div className="edu-img">
            <img src={img_17} alt="" />
          </div>
          <div className="edu-circle">
            <div className="circle"></div>
          </div>
          <div className="edu-degree">
            <p>
              {edu.Degree} in {edu.Field}
            </p>
          </div>
          <div className="edu-school">
            <p>{edu.UniversityName}</p>
          </div>
          <div className="edu-grade">
            <p>Grade: {edu.Grade}</p>
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
          <div className="course-bullet">
            <div className="bullet">
              <div className="dash"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="course-name">
            <p>{crs.Name}</p>
          </div>
          <div className="course-co">
            <p>{crs.Description}</p>
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
        rate.push(<img src={img_30} alt="" />);
      }
      for (let i = 0; i < 5 - lang.Rate; i++) {
        rate.push(<img src={img_31} alt="" />);
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

  const allSkills = {
    MS1: img_21,
    MS2: img_22,
    MS3: img_23,
    MS4: img_24,
    MS5: img_25,
    MS6: img_26,
    MS7: img_27,
    MS8: img_28,
    MS9: img_29,
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
      <Pdf targetRef={ref} filename="post.pdf" x={5} y={-1}>
        {({ toPdf }) => <button onClick={toPdf}>Export As pdf</button>}
      </Pdf>
      <div className="template07-page">
        <div className="template07-body" ref={ref} id="toPDF">
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
                {PersonalInformation.FirstName} {PersonalInformation.LastName}
              </p>
            </div>

            {/* Details */}
            <div className="details">
              <div className="detail">
                <div className="detail-logo">
                  <img className="detail-logo-1" src={img_01} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Email}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo">
                  <img className="detail-logo-2" src={img_02} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Birth}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo">
                  <img className="detail-logo-3" src={img_03} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.Phone}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo">
                  <img className="detail-logo-4" src={img_04} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.City}</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-logo">
                  <img className="detail-logo-5" src={img_05} alt="" />
                </div>
                <div className="detail-text">
                  <p>{PI.MaritalStatus}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="location">
              <div className="loc-data">
                <div className="loc">
                  <div className="loc-icon">
                    <img className="flag" src={img_06} alt="" />
                  </div>
                  <div className="loc-text">
                    <p>{PI.Nationality}</p>
                  </div>
                </div>
              </div>
              <img className="world" src={img_07} alt="" />
            </div>
          </div>

          {/* Career Objective Section */}
          <div className="objective-sec">
            <div className="sec-logo">
              <img src={img_08} alt="" />
            </div>
            <div className="sec-name">
              <p>Career Objective</p>
            </div>
            <div className="sec-text">
              <p>{careerObjectives}</p>
            </div>
          </div>

          {/* Education + Work Sections */}
          <div className="sec exp-sec">
            <div className="sec-logo edu-sec-logo">
              <img src={img_09} alt="" />
            </div>
            <div className="sec-title edu-sec-title">
              <div className="title">
                <p>Education</p>
              </div>
              <div className="sec-arrow">
                <img src={img_14} alt="arrow-down" />
              </div>
            </div>
            <div className="sec-body">
              <div className="edu-body">
                <img className="edu-sec-img" src={img_16} alt="" />
                {educations}
              </div>
              <div className="sec-half">
                <div className="grey"></div>
                <div className="dark-grey"></div>
                <div className="grey"></div>
                <div className="dark-grey"></div>
                <div className="grey"></div>
                <div className="dark-grey"></div>
                <div className="grey"></div>
              </div>
              <div className="work-body" id="workBody">
                <img className="work-sec-bg-img" src={img_35} alt="" />
                <img className="work-sec-img" src={img_19} alt="" />
                <div className="work-row">
                  <div className="work">
                    <div className="work-year">
                      <p>2002 - 2003</p>
                    </div>
                    <div className="work-co">
                      <p>Company Name</p>
                    </div>
                    <div className="work-pos">
                      <p>Postition</p>
                    </div>
                  </div>
                  <div className="work">
                    <div className="work-year">
                      <p>2002 - 2003</p>
                    </div>
                    <div className="work-co">
                      <p>Company Name</p>
                    </div>
                    <div className="work-pos">
                      <p>Postition</p>
                    </div>
                  </div>
                  <div className="work">
                    <div className="work-year">
                      <p>2002 - 2003</p>
                    </div>
                    <div className="work-co">
                      <p>Company Name</p>
                    </div>
                    <div className="work-pos">
                      <p>Postition</p>
                    </div>
                  </div>
                </div>
                <div className="work-row">
                  <div className="work">
                    <div className="work-year">
                      <p>2002 - 2003</p>
                    </div>
                    <div className="work-co">
                      <p>Company Name</p>
                    </div>
                    <div className="work-pos">
                      <p>Postition</p>
                    </div>
                  </div>
                  <div className="work">
                    <div className="work-year">
                      <p>2002 - 2003</p>
                    </div>
                    <div className="work-co">
                      <p>Company Name</p>
                    </div>
                    <div className="work-pos">
                      <p>Postition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-logo work-sec-logo">
              <img src={img_10} alt="" />
            </div>
            <div className="sec-title work-sec-title">
              <div className="title">
                <p>Work Experience</p>
              </div>
              <div className="sec-arrow">
                <img src={img_15} alt="arrow-up" />
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="sec course-sec">
            <div className="sec-logo">
              <img src={img_11} alt="" />
            </div>
            <div className="sec-title">
              <div className="title">
                <p>Courses</p>
              </div>
              <div className="sec-arrow">
                <img src={img_14} alt="arrow-down" />
              </div>
            </div>
            <div className="sec-body">
              <div className="sec-img">
                <img src={img_20} alt="" />
              </div>
              <div className="sec-content">
                {/* this img will be changed to img_33 if the number 
                of jobs is less than or equal to 5 */}
                <img className="course-sec-bg" src={img_32} alt="" />
                {courses}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="sec skills-sec">
            <div className="sec-logo">
              <img src={img_12} alt="" />
            </div>
            <div className="sec-title">
              <div className="title">
                <p>Skills</p>
              </div>
              <div className="sec-arrow">
                <img src={img_14} alt="arrow-down" />
              </div>
            </div>
            <div className="sec-body">{skills}</div>
          </div>

          {/* Languages Section */}
          <div className="sec lang-sec">
            <div className="sec-logo">
              <img src={img_13} alt="" />
            </div>
            <div className="sec-title">
              <div className="title">
                <p>Languages</p>
              </div>
              <div className="sec-arrow">
                <img src={img_14} alt="arrow-down" />
              </div>
            </div>
            <div className="sec-body">{languages}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template07;
