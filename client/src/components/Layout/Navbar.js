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

  useEffect(() => {
    setisst(localStorage.getItem("state"));
  }, [history.location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        Dashboard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="navbar-brand" href="#">
              Content
            </a>
          </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="#">
              ChangeTemplate
            </a>
          </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="#">
              Preview & Download
            </a>
          </li>
          <li className="nav-item">
            <img src={us} style={{width: "30px", marginLeft: "10px"}} />
          </li>
          <li className="nav-item">
            <AccountCircle
              style={{width: "90px", color: "#2E0E33"}}
              onClick={props.setDrawerState}
            />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
