import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";
import "./index.css";

const allCategories = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

function App() {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] =
    useState(allCategories);

  const filterItems = (cat) => {
    if (cat === "all") {
      setItems(menu);
      return;
    }

    const filtered = menu.filter(
      (item) => item.category === cat
    );

    setItems(filtered);
  };

  return (
    <main>
      <section className="menu section">
        <div className="titleMenu">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          setCategory={filterItems}
          cats={categories}
        />

        <div className="section-center">
          {items.map((item) => (
            <Menu key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
