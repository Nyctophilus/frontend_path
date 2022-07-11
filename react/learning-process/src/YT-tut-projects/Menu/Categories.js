import React from "react";

const Categories = ({ setCategory, cats }) => {
  return (
    <div className="btn-container">
      {cats.map((cat) => (
        <button
          type="button"
          className="filter-btn"
          key={cat}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
