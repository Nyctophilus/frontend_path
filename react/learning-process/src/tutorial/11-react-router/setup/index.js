import React from "react";
// react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Switch,   // deprecated
} from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<Error />} />
        <Route path="/person/:id" element={<Person />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
