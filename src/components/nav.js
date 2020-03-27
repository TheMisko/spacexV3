import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="animated-link">
        <Link style={{ textDecoration: "none" }} to="/">
          <img src="https://i.imgur.com/Hpu2RhB.png" />
        </Link>
      </div>

      <div className="nav-btns">
        <div className="btn">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2 className="animated-link">Home</h2>
          </Link>
        </div>
        <div className="btn">
          <Link style={{ textDecoration: "none" }} to="/launches">
            <h2 className="animated-link">Launches</h2>
          </Link>
        </div>
        <div className="btn">
          <Link style={{ textDecoration: "none" }} to="/news">
            <h2 className="animated-link">News</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
