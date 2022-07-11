import React, { useState, useEffect } from "react";
import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./index.css";
import data from "./data";

function App() {
  const [users, setUsers] = useState(data);
  const [activeSlide, setActiveSlide] = useState(1);

  const setClasses = (id) => {
    if (id > activeSlide) return `nextSlide`;
    if (id < activeSlide) return `lastSlide`;
    if (id === activeSlide) return `activeSlide`;
  };

  useEffect(() => {
    if (activeSlide < 1) setActiveSlide(users.length);
    else if (activeSlide > users.length) setActiveSlide(1);
  }, [activeSlide, users]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide(activeSlide + 1);
    }, 5000);

    // cleaning previous calls when spam clicking on the button unless they all gonna be invoked
    return () => {
      clearTimeout(timeout);
    };
  }, [activeSlide]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {users.map((user) => {
          const { id, image, name, title, quote } = user;

          return (
            <article className={setClasses(id)} key={id}>
              <img
                src={image}
                alt={name}
                className="person-img"
              />
              <h4>{name}</h4>
              <p className="title"> {title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() => setActiveSlide(activeSlide + 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setActiveSlide(activeSlide - 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
