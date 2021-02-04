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

const Data = {};
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
