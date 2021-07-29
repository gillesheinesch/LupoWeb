import Axios from "axios";
import { config } from "./App.js";

  function sendRequest(route, method) {
    return Axios({
        url: config.apiBaseUrl + route,
        method: method
    });
  }

  export { sendRequest };