import React from "react";
import classes from "./index.css";

import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="Cart">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
