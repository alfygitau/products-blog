import React from "react";
import "./Homepage.css";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="products-links">
        <Link to="new">New Products</Link>
        <Link to="featured">Featured Products</Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
