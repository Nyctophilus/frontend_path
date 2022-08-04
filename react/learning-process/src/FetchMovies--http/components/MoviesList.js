import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => {
        const { openingText, id, title, releaseDate } =
          movie;
        return (
          <Movie
            key={id}
            title={title}
            releaseDate={releaseDate}
            openingText={openingText}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
