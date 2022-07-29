import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import "./index.css";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <div className="stripe">
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </div>
    </AppProvider>
  );
}

export default App;
