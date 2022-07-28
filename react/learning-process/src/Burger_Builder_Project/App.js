import React from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";

import { Routes, Route } from "react-router-dom";
import ContactData from "./Containers/Checkout/ContactData/ContactData";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />

        <Route path="checkout" element={<Checkout />}>
          <Route
            path="contact-data"
            element={<ContactData />}
          />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
