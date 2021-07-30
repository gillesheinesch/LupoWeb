import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "rsuite/dist/rsuite.css";
import './i18n';
import { UserProvider } from "./components/UserProvider";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let currentTheme = '';

const setTheme = (theme) => {
  if (currentTheme) {
    document.body.classList.remove(`rs-theme-${currentTheme}`);
  }
  document.body.classList.add(`rs-theme-${theme}`);
  currentTheme = theme;
  cookies.set('lupobot_theme', currentTheme);
}
const toggleTheme = () => {
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

if (!cookies.get('lupobot_theme')) {
  setTheme('light');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }
} else {
  setTheme(cookies.get('lupobot_theme'));
}

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

export { setTheme, toggleTheme };