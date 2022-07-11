import React, { useState, useEffect } from "react";
import "./index.css";
import Tab from "./Tab";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [order, setOrder] = useState(1);

  const fetchTabs = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tabs = await res.json();

      setTabs(tabs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  const companies = [
    ...new Set(tabs.map((tab) => tab.company)),
  ];

  const chooseComp = (order) => {
    setOrder(order);
  };

  if (loading)
    return <h1 className="loading">Loading...</h1>;

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {companies.map((comp, index) => (
            <button
              key={index}
              className={`job-btn ${
                index + 1 === order ? "active-btn" : "false"
              }`}
              onClick={() => chooseComp(index + 1)}
            >
              {comp}
            </button>
          ))}
        </div>
        <article className="job-info">
          {tabs.map((tab) => {
            if (tab.order === order)
              return <Tab key={tab.id} {...tab} />;
          })}
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
