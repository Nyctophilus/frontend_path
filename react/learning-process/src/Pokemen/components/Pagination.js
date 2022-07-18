import React from "react";

export const Pagination = ({ nextPage, prevPage }) => {
  return (
    <div>
      {prevPage && (
        <button onClick={prevPage}>Previous</button>
      )}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
};
