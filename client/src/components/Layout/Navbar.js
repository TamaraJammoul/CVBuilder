import React, {useContext, useEffect, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import {ButtonContainer} from "./Button";
import us from "./../../img/us.svg";
import ar from "./../../img/sa.svg";

import AccountCircle from "@material-ui/icons/AccountCircle";

import {useTheme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
function Navbar(props) {
  const [isst, setisst] = useState(false);

  let history = useHistory();
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  };
  useEffect(() => {
    setisst(localStorage.getItem("state"));
  }, [history.location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        {t("Dashboard")}
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
              <h5> {t("Content")}</h5>
            </a>
          </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="#">
              <h5>{t("ChangeTemplate")}</h5>
            </a>
          </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="#">
              <h5>{t("Preview&Download")}</h5>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={i18n.language == "en" ? us : ar}
                style={{width: "30px", marginLeft: "10px", marginRight: "10px"}}
              />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item">
                <img
                  src={us}
                  style={{
                    width: "30px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  onClick={() => changeLanguage("en")}
                />
              </a>
              <a className="dropdown-item">
                <img
                  src={ar}
                  style={{
                    width: "30px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  onClick={() => changeLanguage("ar")}
                />{" "}
              </a>
            </div>
          </li>
          <li className="nav-item">
            <h5>
              <AccountCircle
                style={{width: "90px", color: "#2E0E33"}}
                onClick={props.setDrawerState}
              />{" "}
            </h5>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
