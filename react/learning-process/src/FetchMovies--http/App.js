import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import classes from "./App.module.css";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import Loading from "./components/Loading/Loading";

const url =
  "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      /*
			-HL firebase: create new node 
			
			/movies.json
		*/
      const res = await fetch(url);

      if (!res.ok) throw new Error("something went wrong!");

      const movies = await res.json();

      const loadedMovies = [];
      for (const key in movies) {
        loadedMovies.push({
          id: key,
          title: movies[key].title,
          openingText: movies[key].openingText,
          releaseDate: movies[key].releaseDate,
        });
      }

      console.log(loadedMovies);
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  async function addMovieHandler(movie) {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
  }

  let content = <p>No Movies Found!</p>;

  if (movies.length > 0)
    content = <MoviesList {...{ movies }} />;

  if (error) content = <p>{error}</p>;

  if (loading) content = <Loading />;

  return (
    <React.Fragment>
      <section className={classes.section}>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className={classes.section}>
        <button
          className={classes.button}
          onClick={fetchMovies}
        >
          Fetch Movies
        </button>
      </section>
      <section className={classes.section}>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
