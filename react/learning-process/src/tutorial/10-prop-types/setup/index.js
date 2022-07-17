import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

const url =
  "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { data, loading } = useFetch(url);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {data.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
