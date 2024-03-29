import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/favorite-item">
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite-item/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
