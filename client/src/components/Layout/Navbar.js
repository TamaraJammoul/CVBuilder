import React, {useContext, useEffect, useState} from "react";
import {
  Link,
  NavLink,
  Redirect,
  useHistory,
  withRouter,
} from "react-router-dom";
import {ButtonContainer} from "./Button";
import {CvContext} from "./../../CvContext";
import logo from "./../../img/logo.png";
import us from "./../../img/us.svg";

import AccountCircle from "@material-ui/icons/AccountCircle";

import {AuthContext} from "./../../AuthContext";
function Navbar(props) {
  const authContext = useContext(AuthContext);
  const courseContext = useContext(CvContext);
  const [isst, setisst] = useState(false);
  let history = useHistory();

  function logout() {
    localStorage.clear();
    authContext.setAuth("");
    return (
      <Redirect
        to={{
          pathname: `/login`,
          state: {from: props.location},
          key: "redirect-login",
        }}
      />
    );
  }
  useEffect(() => {
    setisst(localStorage.getItem("state"));
  }, [history.location]);
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#">
        Dashboard
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="navbar-brand" href="#">
              Content
            </a>
          </li>
          <li class="nav-item active">
            <a class="navbar-brand" href="#">
              ChangeTemplate
            </a>
          </li>
          <li class="nav-item active">
            <a class="navbar-brand" href="#">
              Preview & Download
            </a>
          </li>
          <li class="nav-item">
            <img src={us} style={{width: "30px", marginLeft: "10px"}} />
          </li>
          <li class="nav-item">
            <AccountCircle style={{width: "90px", color: "#2E0E33"}} />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
