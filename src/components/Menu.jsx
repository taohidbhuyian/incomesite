import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
