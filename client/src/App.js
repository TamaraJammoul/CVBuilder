import React, {useState, useEffect} from "react";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import "./App.css";
import {Route, Switch, Redirect} from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Default from "./components/Layout/Default";
import Home from "./components/Home";
import Loading from "./components/Layout/Loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contactus from "./components/Contactus";
import ForgetPassword from "./components/ForgetPassword";
import CVTemplates from "./components/CV/CVTemplates";
import CVName from "./components/CV/CVName";
import CVLanguage from "./components/CV/CVLanguage";
import BuildCV from "./components/CV/BuildCV";
import Template from "./components/Template";
import Dashboard from "./components/Dashboard";
import store from "./store/store";
import {Provider} from "react-redux";
import withRoot from "./i18n/WithRoot";

import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import Toast from "./components/Toast";

import AOS from "aos";
import "aos/dist/aos.css";

import Template01 from "./templates/template_01/template_01";
import Template02 from "./templates/template_02/template_02";
import Template03 from "./templates/template_03/template_03";
import Template04 from "./templates/template_04/template_04";
import Template05 from "./templates/template_05/template_05";
import Template06 from "./templates/template_06/template_06";
import Template07 from "./templates/template_07/template_07";
import Template08 from "./templates/template_08/template_08";
import Template09 from "./templates/template_09/template_09";
import Template10 from "./templates/template_10/template_10";
import Template11 from "./templates/template_11/template_11";
const Data = {
  // Done
  educations: [
    {
      id_: "1414",
      Degree: 1,
      Field: "Software Engineering",
      Faculty: "Faculty Name",
      FacultyAr: "اسم الكلية",
      UniversityName: "Al-Baath University",
      UniversityNameAr: "جامعة البعث",
      DegreeFrom5: 3.76,
      DegreeFrom100: 82,
      Grade: 3,
      YearStart: 2014,
      YearEnd: 2019,
    },
    // {
    //   id_: "1415",
    //   Degree: "Bachelor",
    //   Field: "Software Engineering",
    //   Faculty: "Faculty Name",
    //   UniversityName: "Al-Baath University",
    //   DegreeFrom5: 3.76,
    //   DegreeFrom100: 82,
    //   Grade: "Excellent",
    //   YearStart: 2014,
    //   YearEnd: 2019,
    // },
  ],
  experiences: [
    {
      id_: "q",
      Name: "Job Title",
      NameAr: "اسم العمل",
      Description: "Job Description",
      DescriptionAr: "وصف العمل",
      Start: 2014,
      End: 2016,
      Project: "Project Title",
      ProjectAr: "اسم المشروع",
    },
    {
      id_: "aq",
      Name: "Job Title",
      NameAr: "اسم العمل",
      Description: "Job Description",
      DescriptionAr: "وصف العمل",
      Start: 2014,
      End: 2016,
      Project: "Project Title",
      ProjectAr: "اسم المشروع",
    },
    // {
    //   id_: "q4",
    //   Name: "Job Title",
    //   Description: "Job Description",
    //   Start: 2014,
    //   End: 2016,
    //   Project: "Project Title",
    // },
    // {
    //   id_: "q2",
    //   Name: "Job Title",
    //   Description: "Job Description",
    //   Start: 2014,
    //   End: 2016,
    //   Project: "Project Title",
    // },
    // {
    //   id_: "q1",
    //   Name: "Job Title",
    //   Description: "Job Description",
    //   Start: 2014,
    //   End: 2016,
    //   Project: "Project Title",
    // },
  ],
  // Done
  courses: [
    {
      id_: "2453",
      Name: "Course Name",
      NameAr: "اسم الدورة",
      Description: "Course Description",
      DescriptionAr: "وصف الدورة",
      Year: "2015",
    },
    {
      id_: "21153",
      Name: "Course Name",
      NameAr: "اسم الدورة",
      Description: "Course Description",
      DescriptionAr: "وصف الدورة",
      Year: "2015",
    },
    {
      id_: "253",
      Name: "Course Name",
      NameAr: "اسم الدورة",
      Description: "Course Description",
      DescriptionAr: "وصف الدورة",
      Year: "2015",
    },
  ],
  achievements: [
    {
      id_: "a253",
      Name: "Achievement Name",
    },
    {
      id_: "a153",
      Name: "Achievement Name",
    },
  ],
  // Done
  certificates: [
    {
      id_: "25",
      Name: "Certificate Name",
      NameAr: "اسم الشهادة",
      Description: "Certificate Description",
      DescriptionAr: "وصف الشهادة",
      Year: "2015",
    },
  ],
  // Done
  languages: [
    {
      id_: "546",
      Name: "Arabic",
      NameAr: "العربية",
      Rate: 5,
      RateFrom10: 9,
      RateFrom100: 50,
    },
    {
      id_: "56",
      Name: "English",
      NameAr: "الانجليزية",
      Rate: 3,
      RateFrom10: 6,
      RateFrom100: 79,
    },
  ],
  // Done
  memberships: [
    {
      id_: "7849",
      Name: "Membership Name",
    },
    {
      id_: "789",
      Name: "Membership Name",
    },
  ],
  // Done
  othertrainings: [
    {
      id_: "855",
      Name: "Course Name",
    },
    {
      id_: "8755",
      Name: "Course Name",
    },
  ],
  // Done
  technicalskills: [
    {
      id_: "2215",
      Name: "Technical Skill Name",
      Rate: 85,
    },
    {
      id_: "2414",
      Name: "Technical Skill Name",
      Rate: 49,
    },
    {
      id_: "24215",
      Name: "Technical Skill Name",
      Rate: 85,
    },
    {
      id_: "24314",
      Name: "Technical Skill Name",
      Rate: 49,
    },
  ],
  // Done
  skills: [
    {
      id_: "141",
      Name: "MS1",
      NameAr: "المهارة 1",
    },
    {
      id_: "145",
      Name: "MS3",
      NameAr: "المهارة 2",
    },
    {
      id_: "149",
      Name: "MS2",
      NameAr: "المهارة 3",
    },
    {
      id_: "146",
      Name: "MS4",
      NameAr: "المهارة 4",
    },
    {
      id_: "142",
      Name: "MS1",
      NameAr: "المهارة 1",
    },
  ],
  // Done
  references: [
    {
      id_: "123",
      Name: "Reference Name",
      Number: "05000000",
    },
  ],
  // Done
  personalInformation: {
    id_: "String",
    FirstName: "Mohammed",
    FirstNameAr: "محمد",
    LastName: "Saad",
    LastNameAr: "سعد",
    Phone: "050000000",
    Email: "xxxxxx@hotmail.com",
    LinkedIn: "String",
    MaritalStatus: "Married",
    MaritalStatusAr: "متزوج",
    Nationality: "Saudi",
    NationalityAr: "سعودي",
    Birth: "20/10/1991",
    City: "Riyadh",
    CityAr: "الرياض",
  },
  // Done
  careerobjective: {
    id_: "3354",
    Text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia recusandae? Qui numquam alias at.",
    TextAr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia recusandae? Qui numquam alias at.",
  },
};
function App(props) {
  const [loading, setLoading] = useState(true);
  const {t, i18n} = useTranslation();
  const language = "Ar";

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Provider store={store}>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Toast />
            <Switch>
              <Route exact path="/" render={(props) => <Home />} />
              <Route path="/login" render={(props) => <Login />} />
              <Route path="/signup" render={(props) => <Signup />} />
              <Route path="/contactus" render={(props) => <Contactus />} />
              <Route
                path="/forgetpassword"
                render={(props) => <ForgetPassword />}
              />
              <Route path="/cvtemplates" render={(props) => <CVTemplates />} />
              <Route path="/dashboard" render={(props) => <Dashboard />} />
              <Route path="/cvname" render={(props) => <CVName />} />
              <Route path="/cvlanguage" render={(props) => <CVLanguage />} />
              <Route path="/buildcv" render={(props) => <BuildCV />} />
              <Route
                path="/template01"
                render={(props) => (
                  <Template01 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template02"
                render={(props) => (
                  <Template02 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template03"
                render={(props) => (
                  <Template03 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template04"
                render={(props) => (
                  <Template04 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template05"
                render={(props) => (
                  <Template05 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template06"
                render={(props) => (
                  <Template06 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template07"
                render={(props) => (
                  <Template07 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template08"
                render={(props) => (
                  <Template08 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template09"
                render={(props) => (
                  <Template09 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template10"
                render={(props) => (
                  <Template10 Data={Data} language={language} />
                )}
              />
              <Route
                path="/template11"
                render={(props) => (
                  <Template11 Data={Data} language={language} />
                )}
              />

              <Route render={(props) => <Default />} />
            </Switch>
            <ScrollUpButton
              AnimationDuration={500}
              EasingType="easeOutCubic"
              style={{backgroundColor: "rgba(69, 35, 73, 0.9)"}}
            />
          </>
        )}
      </div>
    </Provider>
  );
}

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: "/login"}} />
        )
      }
    />
  );
}
export default withRoot(App);
