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

import Template02 from "./templates/template_02/template_02";

const Data = {
  // Done
  Educations: [
    {
      id_: "1414",
      Degree: "Bachelor",
      Field: "Software Engineering",
      Faculty: "Faculty Name",
      UniversityName: "Al-Baath University",
      DegreeFrom5: 3.76,
      DegreeFrom100: 82,
      Grade: "Excellent",
      YearStart: 2014,
      YearEnd: 2019,
    },
  ],
  Experiences: [
    {
      id_: "q",
      Name: "Job Title",
      Description: "Job Description",
      Start: 2014,
      End: 2016,
      Project: "Project Title",
    },
    {
      id_: "q4",
      Name: "Job Title",
      Description: "Job Description",
      Start: 2014,
      End: 2016,
      Project: "Project Title",
    },
  ],
  // Done
  Courses: [
    {
      id_: "245",
      Name: "Course Name",
      Description: "Course Description",
      Year: "2015",
    },
    {
      id_: "2115",
      Name: "Course Name",
      Description: "Course Description",
      Year: "2015",
    },
  ],
  // Done
  Certificates: [
    {
      id_: "25",
      Name: "Certificate Name",
      Description: "Certificate Description",
      Year: "2015",
    },
  ],
  // Done
  Languages: [
    {
      id_: "546",
      Name: "Arabic",
      Rate: 5,
      RateFrom10: 6,
      RateFrom100: 50,
    },
    {
      id_: "56",
      Name: "English",
      Rate: 3,
      RateFrom10: 6,
      RateFrom100: 79,
    },
  ],
  // Done
  Memberships: [
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
  OtherTrainings: [
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
  TechnicalSkills: [
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
  Skill: [
    {
      id_: "141",
      Name: "MS1",
    },
    {
      id_: "145",
      Name: "MS3",
    },
    {
      id_: "149",
      Name: "MS2",
    },
    {
      id_: "146",
      Name: "MS4",
    },
  ],
  // Done
  References: [
    {
      id_: "123",
      Name: "Reference Name",
      Number: "05000000",
    },
  ],
  // Done
  PersonalInformation: {
    id_: "String",
    FirstName: "Mohammed",
    LastName: "Saad",
    Phone: "050000000",
    Email: "xxxxxx@hotmail.com",
    LinkedIn: "String",
    MaritalStatus: "Married",
    Nationality: "Saudi",
    Birth: "20/10/1991",
    City: "Al-Riyadh",
  },
  // Done
  CareerObjectives: {
    id_: "3354",
    Text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia recusandae? Qui numquam alias at.",
  },
};
function App(props) {
  const [loading, setLoading] = useState(true);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Provider store={store}>
      <Toast />
      <div className="wow">
        {loading ? (
          <Loading />
        ) : (
          <>
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
              <Route render={(props) => <Default />} />
            </Switch>
            <ScrollUpButton
              AnimationDuration={500}
              EasingType="easeOutCubic"
              style={{backgroundColor: "#5B2338"}}
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
