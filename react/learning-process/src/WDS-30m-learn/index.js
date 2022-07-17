import React from "react";
import App from "./App";
import { AppProvider } from "./context/Context";

const index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
export default index;
