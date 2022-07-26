import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

import axios from "axios";

//setting defaults to globally in app
axios.defaults.baseURL =
  "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] =
  "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] =
  "application/json";

//common use :: add headers
axios.interceptors.request.use(
  (req) => {
    console.log(req);
    // edit request config
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log(res);
    // edit response config
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />);
