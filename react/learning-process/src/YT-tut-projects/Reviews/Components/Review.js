import React, { useState } from "react";
import "./Review.css";
import reviews from "../data";
import { FcNext, FcPrevious } from "react-icons/fc";
import { MdOutlineFormatQuote } from "react-icons/md";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const CheckIndex = (n) => {
    if (n < 0) return 0;
    else if (n > reviews.length - 1)
      return reviews.length - 1;
    else return n;
  };

  const randomNum = () => {
    let rando = Math.trunc(Math.random() * reviews.length);

    if (rando === index) rando += 1;

    setIndex(CheckIndex(rando));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={image}
          alt={name}
          className="person-img"
        />
        <span className="quote-icon">
          <MdOutlineFormatQuote />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() =>
            setIndex((index) => CheckIndex(index - 1))
          }
        >
          <FcPrevious />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            setIndex((index) => CheckIndex(index + 1))
          }
        >
          <FcNext />
        </button>
      </div>
      <button className="random-btn" onClick={randomNum}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
