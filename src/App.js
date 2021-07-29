import React, { Fragment } from "react";
import TopNavbar from "./components/TopNavbar.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import LogoutPage from "./pages/LogoutPage.js";
import { Redirect, Route, Switch } from "react-router-dom";

export var config = require('./config.json');

function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/logout" component={ LogoutPage } />
        <Route path="**" component={() => <Redirect to="/"/>} />
      </Switch>
    </Fragment>
  )
}

export default App;
