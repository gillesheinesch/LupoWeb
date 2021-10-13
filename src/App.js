import React, { Fragment } from "react";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import LogoutPage from "./pages/LogoutPage.js";
import { Redirect, Route, Switch } from "react-router-dom";
import ImprintPage from "./pages/ImprintPage.js";
import PrivacyPage from "./pages/PrivacyPage.js";
import PluginStorePage from "./pages/PluginStorePage.js";
import PluginStoreInfoPage from "./pages/PluginStoreInfoPage.js";

export var config = require('./config.json');

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/logout" component={ LogoutPage } />

        <Route exact path="/pluginstore" component={ PluginStorePage } />
        <Route path="/pluginstore/:plugin" component={ PluginStoreInfoPage } />

        <Route exact path="/terms" component={() => <Redirect to="/terms/imprint" />} />
        <Route exact path="/terms/imprint" component={ ImprintPage } />
        <Route exact path="/terms/privacy" component={ PrivacyPage } />
        
        <Route path="**" component={() => <Redirect to="/"/>} />
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App;
