import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export default ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (id) => {
    setProducts((currProdcuts) => {
      const myItem = currProdcuts.find(
          (prod) => prod.id === id
        ),
        favStatus = !myItem.isFavorite;

      const updatedItems = [...currProdcuts];
      updatedItems[updatedItems.indexOf(myItem)] = {
        ...myItem,
        isFavorite: favStatus,
      };

      console.log(updatedItems);

      return updatedItems;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, toggleFav }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
