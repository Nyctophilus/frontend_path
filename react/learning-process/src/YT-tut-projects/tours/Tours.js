import React, { useState, useEffect } from "react";
import Tour from "./components/Tour/Tour";
import Loading from "./components/Loading/Loading";
import "./tours.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);

      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeHandler = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  if (!tours.length) {
    return (
      <>
        <h1>No more tours left!🥺</h1>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </>
    );
  }

  return (
    <main>
      <header>
        <h1>Our Tours</h1>
      </header>
      <article>
        {tours.map((tour) => (
          <Tour
            {...tour}
            key={tour.id}
            removeHandler={() => removeHandler(tour.id)}
          />
        ))}
      </article>
    </main>
  );
};

export default Tours;
