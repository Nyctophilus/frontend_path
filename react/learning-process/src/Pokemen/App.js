import React, { useState, useEffect } from "react";
import { PokemonList } from "./components/PokemonList";
import axios from "axios";
import { Pagination } from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(
          (c) => (cancel = c)
        ),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));

        return () => cancel.cancel();
      });
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        nextPage={nextPageUrl && nextPage}
        prevPage={prevPageUrl && prevPage}
      />
    </>
  );
}

export default App;
