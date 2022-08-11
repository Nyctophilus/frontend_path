import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 56,
    title: "Anubis",
    description: "Egpytian God Of The Dead",
  },
  {
    id: "p2",
    price: 12,
    title: "Odin",
    description: "The Hai All Father",
  },
  {
    id: "p3",
    price: 15,
    title: "React-Redux",
    description: "This is such an amazing tool!",
  },
  {
    id: "p4",
    price: 22,
    title: "Thor: Thunder And Love",
    description: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((p) => (
          <ProductItem key={p.id} {...p} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
