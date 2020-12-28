import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {HashRouter as Router} from "react-router-dom";
import {CvProvider} from "./CvContext";
import {AuthProvider} from "./AuthContext";
import "./../src/i18n/i18n";
ReactDOM.render(
  <AuthProvider>
    <CvProvider>
      <Router>
        <App />
      </Router>
    </CvProvider>
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.register();
