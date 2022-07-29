import React from "react";

const Book = ({ img, title, author, children }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button
        className="btn"
        type="button"
        onClick={() => console.log(title)}
      >
        buy
      </button>
    </article>
  );
};

export default Book;
