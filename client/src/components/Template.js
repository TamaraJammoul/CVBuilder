import React from "react";
import "./template.css";
import Pdf from "react-to-pdf";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const ref = React.createRef();

const Template = () => {
  return (
    <>
      <div className="page" ref={ref}>
        <div className="template-body">
          <div className="left">
            <div className="photo">
              {/* <img src="../assets/imgs/Layer_13.png" alt="personal_photo" /> */}
            </div>
            <div className="personal-info sec">
              <h3 className="sec-title">Personal Info</h3>
              <div>
                <i className="fa fa-home"></i>
                <span>Al-Riyadh</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span>000000000</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span>test@gmail.com</span>
              </div>
              <div>
                <i className="fa fa-calendar"></i>
                <span>12/12/2020</span>
              </div>
              <div>
                <i className="fa fa-globe"></i>
                <span>Saudi Arabia</span>
              </div>
            </div>
            <div className="skills sec">
              <h3 className="sec-title">Skills</h3>
              <p>Computer Skills</p>
              <p>Time Management</p>
              <p>Team Working</p>
              <p>Leadership</p>
              <p>Responsibility</p>
              <p>Communication</p>
            </div>
            <div className="languages sec">
              <h3 className="sec-title">Languages</h3>
              <div className="lang">
                <div className="lang-name">Arabic</div>
                <div className="lang-rate">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                </div>
              </div>
              <div className="lang">
                <div className="lang-name">English</div>
                <div className="lang-rate">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="header">
              <h1>Ahmad Mhammad Hasan</h1>
            </div>
            <div className="main">
              <div className="objective main-sec">
                <i className="fa fa-home"></i>
                <div className="sec-title">
                  <h3>Career Objective</h3>
                </div>
                <div className="sec-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
              <div className="education main-sec">
                <i className="fa fa-home"></i>
                <div className="sec-title">
                  <h3>Education</h3>
                </div>
                <div className="sec-body">
                  <p>Bachelor in English Litereture</p>
                  <p>University name</p>
                  <p>University Grade: Good</p>
                  <p>Graduate year: 2019</p>
                </div>
              </div>
              <div className="work main-sec">
                <i className="fa fa-home"></i>
                <div className="sec-title">
                  <h3>Work Experience</h3>
                </div>
                <div className="sec-body">
                  <ul>
                    <li>
                      <p>2015-2017</p>
                      <p>Job title</p>
                    </li>
                    <li>
                      <p>2011-20113</p>
                      <p>Job title</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="courses main-sec">
                <i className="fa fa-home"></i>
                <div className="sec-title">
                  <h3>Training Courses</h3>
                </div>
                <div className="sec-body">
                  <p>Course name</p>
                  <p>Course name</p>
                  <p>Course name</p>
                  <p>Course name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="post.pdf" x={0.5} y={0.5}>
        {({toPdf}) => <button onClick={toPdf}>Export As JPEG</button>}
      </Pdf>
      <button onClick={() => exportComponentAsJPEG(ref)}>Export As JPEG</button>
      <button onClick={() => exportComponentAsPNG(ref)}>Export As PNG</button>
    </>
  );
};

export default Template;
