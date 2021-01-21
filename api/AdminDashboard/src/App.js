import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import ChangePassword from "./containers/ChangePassword";
import BasicTable from "./containers/ListCV";
import BasicTable2 from "./containers/ListCVs";

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/listCV" component={BasicTable} />
          <Route path="/listAllCVs" component={BasicTable2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;