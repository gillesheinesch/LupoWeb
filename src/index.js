import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "rsuite/dist/styles/rsuite-default.css";
import './i18n';
import { UserProvider } from "./components/UserProvider";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ LoadingPage }>
      <Router>
        <UserProvider>
            <App />
        </UserProvider>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);