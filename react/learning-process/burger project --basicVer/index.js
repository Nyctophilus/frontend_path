import React from "react";
import ReactDOM from "react-dom/client";
import "../burger project --basicVer/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Ass1 from "./Assignment1/Assignment1";
// import Ass2 from "./Assignment2/assignment2";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App title="Burger Builder" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
