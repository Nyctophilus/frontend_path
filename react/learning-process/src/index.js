import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51UG6OlFxFL._SX343_BO1,204,203,200_.jpg",
    title: "Thor Love And Thunder",
    author: "Muhammed Fayad",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCKUL._AC_UL200_SR200,200.jpg",
    title: "ILove You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200.jpg",
    title: "Our Class isaFamily",
    author: "Shannon Olsen",
  },
];

const BookList = () => (
  <section>
    {books.map((book) => {
      return (
        <Book
          img={book.img}
          title={book.title}
          author={book.author}
        />
      );
    })}
  </section>
);

const Book = ({ img, title, author, children }) => (
  <article>
    <img src={img} alt="Thor" />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>
);

ReactDom.render(
  <BookList />,
  document.getElementById("root")
);
