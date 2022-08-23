import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import Products from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

import ProductsProvider from "./context/products-context";

const App = (props) => {
  return (
    <ProductsProvider>
      <Navigation />
      <main>
        <Routes>
          <Route path="" element={<Products />} />
          <Route
            path="favorites"
            element={<FavoritesPage />}
          />
        </Routes>
      </main>
    </ProductsProvider>
  );
};

export default App;
