import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TopNavbar from "./components/TopNavbar.js";
import HomePage from "./pages/HomePage.js";

function App() {

  return (
    <Router>
      <TopNavbar />
      <Route path="**" component={() => <Redirect to="/"/>} />
      <Route exact path="/" component={HomePage} />
    </Router>
  )
}

export default App;
