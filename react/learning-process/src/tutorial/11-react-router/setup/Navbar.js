import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="btn" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="btn" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="btn" to="/people">
            People
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
