import React, {useState, useEffect} from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
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
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {useSelector, useDispatch} from "react-redux";

function App(props) {
  const [loading, setLoading] = useState(true);

  const [tyrtyr, setToast] = useState(true);
  //handel me
  const toast = useSelector((state) => this.state.toast);
  const toastMessage = useSelector((state) => state.toastMessage);
  const toastType = useSelector((state) => state.toastType);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Provider store={store}>
      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={() => setToast(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent="SlideTransition"
      >
        <Alert onClose={() => setToast(false)} severity={toastType}>
          {toastMessage}
        </Alert>
      </Snackbar>
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
              <Route path="/template" render={(props) => <Template />} />
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
export default withRoot(App);
