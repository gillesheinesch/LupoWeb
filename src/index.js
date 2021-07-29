import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "rsuite/dist/styles/rsuite-default.css";
import { UserProvider } from "./components/UserProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
