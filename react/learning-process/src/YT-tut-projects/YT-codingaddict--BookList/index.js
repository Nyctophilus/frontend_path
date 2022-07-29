import React from "react";
import classes from "./BookList.module.css";
import { data } from "./books";
import Book from "./Book";

const BookList = () => (
  <section className={classes.BookList}>
    {data.map((book) => {
      return <Book key={book.id} {...book} />;
    })}
  </section>
);

export default BookList;
