import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

const url =
  "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calcMostExpensive = (data) => {
  return (
    data.reduce((total, curr) => {
      const price = curr.fields.price;
      if (price >= total) total = price;

      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // -HL useCallback same for memo but in fuction
  // -HL if value of [def array] doesnt change , no need to re-render, else render

  // -HL useCallback usage if missing dep array in useEffect too

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // -HL useMemo reserve values of a function if not change dont re-render
  const expensiveUseMemo = useMemo(
    () => calcMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>

      <h1>
        Most Expensive Item:
        {expensiveUseMemo}
      </h1>

      <BigList products={products} />
    </>
  );
};

// -HL memo for memozing pervious values in renders and decide if it doesnt need to re-render
const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log(`logging big list redering!`);
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
