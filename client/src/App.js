import React, {useState, useEffect} from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import "./App.css";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Default from "./components/Layout/Default";
import Home from "./components/Home";
import Loading from "./components/Layout/Loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contactus from "./components/Contactus";
import ForgetPassword from "./components/ForgetPassword";
import CVTemplates from "./components/CV/CVTemplates";
import AddExperience from "./components/CV/AddExperience";
import JobFunctionality from "./components/CV/JobFunctionality";
import CVName from "./components/CV/CVName";
import CVLanguage from "./components/CV/CVLanguage";
import PersonalInfo from "./components/CV/PersonalInfo";
import WorkExperience from "./components/CV/WorkExperience";
import AddWorkExperience from "./components/CV/AddWorkExperience";
import AddEducation from "./components/CV/AddEducation";
import AddPersonalSkill from "./components/CV/AddPersonalSkill";
import PersonalSkills from "./components/CV/PersonalSkills";
import CareerObjectives from "./components/CV/CareerObjectives";
import AddCertificate from "./components/CV/AddCertificate";
import AddSkill from "./components/CV/AddSkill";
import AddOtherTraining from "./components/CV/AddOtherTraining";
import OtherTraining from "./components/CV/OtherTraining";
import AddMembership from "./components/CV/AddMembership";
import Reference from "./components/CV/Reference";
import BuildCV from "./components/CV/BuildCV";
import Template from "./components/Template";
import AddLanguage from "./components/CV/AddLanguage";
import Languages from "./components/CV/Languages";
import Education from "./components/CV/Education";
import Experience from "./components/CV/Experience";
import Skills from "./components/CV/Skills";
import Certificates from "./components/CV/Certificates";
import Membership from "./components/CV/Membership";
import AddReference from "./components/CV/AddReference";
import store from "./store/store";
import {Provider} from "react-redux";
function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
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
              <Route
                path="/addexperience"
                render={(props) => <AddExperience />}
              />
              <Route
                path="/jobfunctionality"
                render={(props) => <JobFunctionality />}
              />
              <Route path="/cvname" render={(props) => <CVName />} />
              <Route path="/cvlanguage" render={(props) => <CVLanguage />} />
              <Route
                path="/personalinfo"
                render={(props) => <PersonalInfo />}
              />
              <Route
                path="/careerobjectives"
                render={(props) => <CareerObjectives />}
              />
              <Route
                path="/workexperience"
                render={(props) => <WorkExperience />}
              />
              <Route
                path="/addworkexperience"
                render={(props) => <AddWorkExperience />}
              />
              <Route
                path="/addeducation"
                render={(props) => <AddEducation />}
              />
              <Route
                path="/addpersonalskill"
                render={(props) => <AddPersonalSkill />}
              />
              <Route
                path="/personalskills"
                render={(props) => <PersonalSkills />}
              />
              <Route
                path="/addcertificate"
                render={(props) => <AddCertificate />}
              />
              <Route
                path="/certificates"
                render={(props) => <Certificates />}
              />
              <Route path="/addskill" render={(props) => <AddSkill />} />
              <Route path="/skills" render={(props) => <Skills />} />

              <Route
                path="/othertraining"
                render={(props) => <OtherTraining />}
              />
              <Route
                path="/addmembership"
                render={(props) => <AddMembership />}
              />
              <Route path="/reference" render={(props) => <Reference />} />
              <Route path="/buildcv" render={(props) => <BuildCV />} />
              <Route path="/template" render={(props) => <Template />} />
              <Route path="/addlanguage" render={(props) => <AddLanguage />} />
              <Route path="/languages" render={(props) => <Languages />} />
              <Route path="/education" render={(props) => <Education />} />
              <Route path="/experience" render={(props) => <Experience />} />
              <Route path="/membership" render={(props) => <Membership />} />
              <Route render={(props) => <Default />} />
            </Switch>

            <ScrollUpButton />
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
export default App;
