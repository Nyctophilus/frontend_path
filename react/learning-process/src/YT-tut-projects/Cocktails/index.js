import React from "react";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

function index() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default index;
