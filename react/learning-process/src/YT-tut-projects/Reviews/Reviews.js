import React from "react";
import "./Reviews.css";
import Review from "./Components/Review";

const Reviews = () => {
  return (
    <>
      <header>
        <div className="title">
          <h2>Our Reviews</h2>
        </div>
      </header>

      <Review />
    </>
  );
};

export default Reviews;
