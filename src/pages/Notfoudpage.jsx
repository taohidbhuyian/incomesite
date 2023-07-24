import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Notfoudpage = () => {
  return (
    <div>
      <Menu />
      <div className="notfound">
        <h1>Page not foud</h1>
        <button className="notfoundbtn">
          <Link to="/homepage">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default Notfoudpage;
