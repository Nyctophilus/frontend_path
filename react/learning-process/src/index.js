import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { data } from "./books";
import Book from "./Book";

const BookList = () => (
  <section>
    {data.map((book) => {
      return <Book key={book.id} {...book} />;
    })}
  </section>
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
