import React from "react";
import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

// import { useContext } from "react";
// import { ProductsContext } from "../context/products-context";

const Products = (props) => {
  //   const { products: productList } =
  //     useContext(ProductsContext);

  const state = useStore()[0];

  return (
    <ul className="products-list">
      {state.Products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
