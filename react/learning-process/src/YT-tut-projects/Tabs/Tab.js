import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Tab = ({ title, dates, duties, company, order }) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {duties.map((duty) => (
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </>
  );
};

export default Tab;
