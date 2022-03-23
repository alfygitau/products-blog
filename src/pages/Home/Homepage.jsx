import React from "react";
import "./Homepage.css";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

const Homepage = () => {
  return (
    <div className="home-container">
      <Slider />
      <div className="products-links">
        <NavLink to="new">New Products</NavLink>||&nbsp;
        <NavLink to="featured">Featured Products</NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
